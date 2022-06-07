import BigNumber from "bignumber.js";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import Web3 from "web3";
import { usePools } from "../../../components/provider/poolsProvider";
import { InvariantContext } from "../../../helpers/context";
import { formatBigValue, formatPercent, getHumanValue } from "../../../helpers/web3/utils";
import { useReload } from "../../../hooks/useReload";
import { useConfig } from "../../../network/configProvider";
import { RPC_HTTPS_URL } from "../../../network/networks/rinkeby-testnet";
import { useWallet } from "../../../wallet/walletProvider";
import { useProtocolData } from "../../../web3/components/providers/ProtocolDataProvider";
import { useWalletData } from "../../../web3/components/providers/WalletDataProvider";
import { FinancingPoolABI } from "../../../web3/contracts/FinancingPoolContract";

const Context = createContext(InvariantContext('PortfolioProvider'));

export function usePortfolioProvider() {
  return useContext(Context)
}

const PortfolioProvider = ({ children }) => {

  const wallet = useWallet()
  const { collateralPools } = usePools()
  const { walletDataContract, getIssuerLtv, getIssuerTotalDebts } = useWalletData()
  const { protocolDataContract } = useProtocolData()

  const config = useConfig()
  
  const address = config.contracts.financingPool.financingPool
  const abi = FinancingPoolABI
  const web3 = new Web3(RPC_HTTPS_URL)
  const contract = new web3.eth.Contract(abi,address)

  const initialState = {
    loading: false,    
    collateralPools:[],
    liquidityPools:[],   
    borrow: [],
    lending: [],
  }

  const [state, setState] = useState(initialState)
  const [reload] = useReload()

  useEffect(() => {
    setState(preState => ({
      ...preState,
      loading: true,      
      collateralPools:[],
      liquidityPools:[],
      borrow: [],
      lending: [],      
    }));

    (() => {
      try {
        const cPools = collateralPools
        setState(preState => ({
          ...preState,
          loading: false,
          
          collateralPools: (cPools ?? []).map(pool => {
            
            if(wallet.account) {
              const promise = (async () => {
                await pool.contract.loadBalance()

                const cBalance = pool.contract.balances.get(wallet.account)
                return cBalance
              })()
  
              return wrapPromis(promise)
            }                                                                   
          })
        }))
      } catch(e){
        console.log(e);
      }
    })()

    setState(preState => ({
      ...preState,
      loading: false,          
    }));
  }, [wallet.account])
  
  const fetchUserCollaterals = useCallback(() => {

    const userPromises = fetchCollaterals()
    const userCollaterals = userPromises.map(promise => wrapPromis(promise))
    return userCollaterals

  }, [fetchCollaterals, wrapPromis])

  const fetchUserTransactionsRecord = useCallback(() => {

    const promise = fetchTransactionRecords()
    return wrapPromis(promise)

  }, [fetchTransactionRecords, wrapPromis])


  function fetchTransactionRecords() {

    if(wallet.account) {

      const allTransactions = 
        contract.getPastEvents("allEvents", {
          fromBlock: 0,
          toBlock: 'latest',
        })

        .then(res => {
          // console.log(res);
          const transactions = res.filter(event => (
            (event.returnValues.liquidityProvider?.toLowerCase() === wallet.account.toLowerCase() && event.event === "AddLiquidity") ||
            (event.returnValues.issuer?.toLowerCase() === wallet.account.toLowerCase() && event.event === "Pledge") ||
            (event.returnValues.issuer?.toLowerCase() === wallet.account.toLowerCase() && event.event === "Redeem")
          ))          
          return transactions        
        })

        .then(res => {
          // console.log('B is:', res);
          const promisesArray = res.map(
            (r) => web3.eth.getBlock(r.blockNumber)
              .then(res => ({
                userAllTransactions: {
                  transaction: r,
                  block: res
                }                
              }))
          )

          const data = promisesArray.map(res => wrapPromis(res))
            
          return data   
        })

      return allTransactions  
    }      
  }
  
  function fetchCollaterals() {
  
    if(wallet.account){
      const promiseArray = (collateralPools ?? []).map(async pool => {
        await pool.contract.loadBalance(wallet.account)
        await walletDataContract.loadIssuerTotalDebts(wallet.account, pool.collateralAsset.address).then(reload).catch(Error)
        await walletDataContract.loadIssuerLtv(wallet.account, pool.collateralAsset.address).then(reload).catch(Error)
        await protocolDataContract.loadCollateralConfigurationData(pool.collateralAsset.address).then(reload).catch(Error)
        const colUserBalance = pool.contract.balances?.get(wallet.account)
        const decimals = pool.collateralAsset.decimals
        const colUserBalanceResult = new BigNumber(formatBigValue(getHumanValue(colUserBalance, decimals))) 
        const userLtv = getIssuerLtv(pool.collateralAsset.address)
        const userDebtsData = getIssuerTotalDebts(pool.collateralAsset.address)
        const decimalsOfDebtA = pool.underlyingAssets[0].decimals
        const decimalsOfDebtB = pool.underlyingAssets[1].decimals
        const userDebtA = new BigNumber(formatBigValue(getHumanValue(userDebtsData.debtAAmount, decimalsOfDebtA)))
        const userDebtB = new BigNumber(formatBigValue(getHumanValue(userDebtsData.debtBAmount, decimalsOfDebtB)))

        // console.log(userLtv);
        // console.log(userDebtsData);

        return {
          ...pool,
          colUserBalance:colUserBalanceResult,
          colMaxLtv:formatPercent(getHumanValue(protocolDataContract.maxLtvMap?.get(pool.collateralAsset.address), 2), 0),
          colLiquidationThreshold:formatPercent(getHumanValue(protocolDataContract.thresholdMap?.get(pool.collateralAsset.address), 2), 0),
          userLtv:formatPercent(getHumanValue(userLtv.issuerLtvValue, 18), 2),
          userDebtA:userDebtA,
          userDebtB:userDebtB,

        }
      })
      return promiseArray
    }
  }
  
  function wrapPromis(promise) {
    let status = "pending"
    let result
    let suspender = promise.then(
      (r) => {
        status = "sucess"
        result =  r
    },
      (e) => {
        status = "error"
        result = e
      }
    )
    return {
      read() {
        if(status === "pending") {
          throw suspender
        } else if (status === "error") {
          throw result
        } else if (status === "sucess") {
          return result
        }
      }
    }
  }

  const value = {
    state,
    fetchUserCollaterals,
    fetchUserTransactionsRecord,
  }

  return (
    <Context.Provider value={value}>
      { children }
    </Context.Provider>
  )
}

export default PortfolioProvider