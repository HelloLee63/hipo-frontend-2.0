import { useEffect, useMemo, useState } from "react"
import TransactionFormCard from "../../../components/custom/transaction-form-card/TransactionFormCard"
import { usePools } from "../../../components/provider/poolsProvider"
import { useReload } from "../../../hooks/useReload"
import { useConfig } from "../../../network/configProvider"
import { useWallet } from "../../../wallet/walletProvider"

const PledgeForm = () => {

  const { collateralPools, collateralSymbol, setCollateralSymbol, getCollateralPoolBySymbol } = usePools()

  const colPool = useMemo(() => getCollateralPoolBySymbol(collateralSymbol), [collateralSymbol])
  const config = useConfig()
  const [reload] = useReload()
  const walletCtx = useWallet()

  const [pledgeAmount, setPledgeAmount] = useState(0)

  console.log('PledgeAmount is :', pledgeAmount);

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
        cardTitle="Pledge"
        pool={colPool}
        tokenItems={tokenItems}
        durationItem={durationItem}
        content={content}
        transactionButton={transactionButton}
        amount={pledgeAmount}
        setAmount={setPledgeAmount}
      />
    </div>
  )
}

export default PledgeForm