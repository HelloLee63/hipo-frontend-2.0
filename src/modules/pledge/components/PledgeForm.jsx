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

const PledgeForm = () => {

  const { collateralPools, collateralSymbol, setCollateralSymbol, getCollateralPoolBySymbol } = usePools()

  const colPool = useMemo(() => getCollateralPoolBySymbol(collateralSymbol), [collateralSymbol])
  const config = useConfig()
  const [reload] = useReload()
  const walletCtx = useWallet()
  const financingPool = useFinancingPool()

  const decimals = colPool.collateralAsset.decimals

  const [pledgeAmount, setPledgeAmount] = useState(0)
  const [transacting, setTransacting] = useState(false)
  const [txConfirmVisible, showTxConfirm] = useState(false)

  const walletBalance = colPool.collateralAsset.contract.balances?.get(walletCtx.account)


  async function handlePledge() {

    setTransacting(() => true)

    let value = new BigNumber(scaleBy(pledgeAmount, decimals))
    let assetAddress = colPool.collateralAsset.address
    try {
      await financingPool.financingPoolContract.pledge(assetAddress, value.toString())
    } catch (e) {
      console.log(e);
    }
    setTransacting(() => false)
  }

  const tokenItems = [
    {
      isCollateral: true,
      title: 'Select Pairs',
      assets: collateralPools,
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

  const contentConfirm = {
    isDisplay: true,
    header: 'Adjust your risk here. A lower ration will reduce your risk of liquidation and increase the safety of your portfolio'
  }

  const transactionButton ={
    title: 'Pledge'
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
        customClassName='form-card'
        cardTitle="Pledge"
        pool={colPool}
        tokenItems={tokenItems}
        durationItem={durationItem}
        content={content}
        transactionButton={transactionButton}
        amount={pledgeAmount}
        setAmount={setPledgeAmount}
        transaction={showTxConfirm}
        isWorking= {transacting}
        balanceIcon='./media/icons/walletIcon.svg'
        walletBalance={walletBalance}
      />
      {txConfirmVisible && 
        <TxConfirmModal 
          onCancel={() => showTxConfirm(false)} 
          transactionText='You will pledge'
          asset={colPool.collateralAsset}
          transactionAmount={pledgeAmount}
          transact={handlePledge}
          content={contentConfirm}
        />
      }
    </div>
  )
}

export default PledgeForm