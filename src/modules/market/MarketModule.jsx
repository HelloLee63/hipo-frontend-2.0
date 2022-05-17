import ApyLable from "../../components/custom/apylable/ApyLable"
import DurationLable from "../../components/custom/duration-lable/DurationLable"
import TabBar from "../../components/custom/tabbar/TabBar"
import { useProtocolData } from "../../web3/components/providers/ProtocolDataProvider"
import { usePools } from "../../components/provider/poolsProvider"
import { calAPY, formatPercent } from "../../helpers/web3/utils"
import { useEffect, useState } from "react"
import TokenRadioButton from "../../components/custom/token-radio-button/TokenRadioButton"
import { useConfig } from "../../network/configProvider"
import TransactionButton from "../../components/custom/transaction-button/TransactionButton"
import Overview from "../../components/overview/Overview"

const MarketModule = () => {

  console.log('MarketModule is executed');

  const { protocolDataContract } = useProtocolData()
  const { bondPools, assets, getPoolByBond} = usePools()
  const config = useConfig()

  const [apy, setApy] = useState(null)
  const [transactionType, setTransactionType] = useState('Borrow')
  const [assetSymbol, setAssetSymbol] = useState(assets[0].symbol)
  const [duration, setDuration] = useState(bondPools[0].duration.duration)
  const pool = getPoolByBond(assetSymbol, duration)
  const amm = config.contracts.hipoV1AMMfactory

  useEffect(() => {
    protocolDataContract.loadBondPrice(pool.bondAsset.address, pool.duration.duration, amm)
      .then(res => formatPercent(calAPY(res, 18, Number(pool.duration.duration))))
      .then(data => setApy(() => data))
  }, [transactionType, assetSymbol, duration])

  return (    
    <>
      <div className='row gy-5 g-xl-8 pt-10 justify-content-center'>
        <div className='col-xl-6'>
          <TabBar transactionType={transactionType} setTransactionType={setTransactionType}/>
          <ApyLable data={apy}/>
          <TokenRadioButton assetSymbol={ assetSymbol } setAssetSymbol={setAssetSymbol}/>
          <div className='pt-10'>
            <DurationLable setDuration={setDuration}/>
          </div>
          <div className="d-flex mt-5 pt-15 justify-content-center">
            <TransactionButton title={`Go to ${transactionType}`}/>
          </div>
        </div>
        <div className="col-xl-12 pt-10">
          <Overview />
        </div>
      </div>
    </>    
  )
}

export default MarketModule