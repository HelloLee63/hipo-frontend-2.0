/* eslint-disable react-hooks/exhaustive-deps */
import BigNumber from "bignumber.js"
import { useEffect, useMemo, useState } from "react"
import TransactionFormCard from "../../../components/custom/transaction-form-card/TransactionFormCard"
import { usePools } from "../../../components/provider/poolsProvider"
import { useReload } from "../../../hooks/useReload"
import { useConfig } from "../../../network/configProvider"
import { useWallet } from "../../../wallet/walletProvider"
import { useFinancingPool } from "../../../web3/components/providers/FinancingPoolProvider"
import TxConfirmModal from "../../../web3/components/tx-confirm-modal/TxConfirmModal"
import { scaleBy } from "../../../web3/utils"

const AddCollateralView = () => {
  const { collateralPools, collateralSymbol, setCollateralSymbol, getCollateralPoolBySymbol } = usePools()

  const config = useConfig()
  const [reload] = useReload()
  const walletCtx = useWallet()
  const financingPool = useFinancingPool()

  const colPool = useMemo(() => getCollateralPoolBySymbol(collateralSymbol), [collateralSymbol])
  const collateralBalance = colPool.contract.balances?.get(walletCtx.account)

  const decimals = colPool.collateralAsset.decimals

  const [addCollateralAmount, setAddCollateralAmount] = useState(0)
  const [transacting, setTransacting] = useState(false)
  const [txConfirmVisible, showTxConfirm] = useState(false)

  const tokenItems = [
    {
      isCollateral: true,
      title: 'You will add',
      assets: collateralPools.filter(pool => (pool.collateralAsset.symbol === collateralSymbol)),
      assetSymbol: collateralSymbol,
      setAssetSymbol: setCollateralSymbol
    },
  ]

  const durationItem = {
    isDispay: false
  }

  const content = {
    isDisplay: true,
    header: 'Adjust your risk here. A lower ration will reduce your risk of liquidation and increase the safety of your portfolio'
  }

  const transactionButton ={
    title: 'Add Collateral'
  }

  const contentConfirm = {
    isDisplay: true,
    header: 'Adjust your risk here. A lower ration will reduce your risk of liquidation and increase the safety of your portfolio'
  }

  useEffect(() => {
    if (walletCtx.account) {
      colPool.contract.loadAllowance(config.contracts.financingPool?.financingPool).then(reload).catch(Error)
    }
  }, [colPool, walletCtx.account])

  async function handleAddCollateral() {

    setTransacting(() => true)

    let value = new BigNumber(scaleBy(addCollateralAmount, decimals))
    let assetAddress = colPool.collateralAsset.address
    try {
      await financingPool.financingPoolContract.pledge(assetAddress, value.toString())
    } catch (e) {
      console.log(e);
    }
    setTransacting(() => false)
  }

  useEffect(() => {
    if (walletCtx.account) {
      colPool.collateralAsset.contract.loadAllowance(config.contracts.financingPool?.financingPool).then(reload).catch(Error)
    }
  }, [colPool, walletCtx.account])

  useEffect(() => {
    if (walletCtx.account) {
      colPool.contract.loadAllowance(config.contracts.financingPool?.financingPool).then(reload).catch(Error)
    }
  }, [colPool, walletCtx.account])

  return (
    <div>
      <TransactionFormCard
        customClassName='form-card-no-border'
        cardTitle="Add Collateral"
        pool={colPool}        
        tokenItems={tokenItems}
        durationItem={durationItem}
        content={content}
        transactionButton={transactionButton}
        amount={addCollateralAmount}
        setAmount={setAddCollateralAmount}
        transaction={showTxConfirm}
        isWorking= {transacting}
        balanceIcon='./media/icons/CollateralBalanceIcon.svg'
        walletBalance={collateralBalance}
      />

      {txConfirmVisible && 
        <TxConfirmModal 
          onCancel={() => showTxConfirm(false)} 
          transactionText='You will redeem'
          asset={colPool.collateralAsset}
          transactionAmount={addCollateralAmount}
          transact={handleAddCollateral}
          content={contentConfirm}
        />
      }
    </div>
  )
}

export default AddCollateralView