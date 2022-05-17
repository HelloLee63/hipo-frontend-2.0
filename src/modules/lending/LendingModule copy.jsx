import ApyLable from "../../components/custom/apylable/ApyLable"
import DurationLable from "../../components/custom/duration-lable/DurationLable"
import TokenIcon from "../../components/custom/token-icon/TokenIcon"
import TabBar from "../../components/custom/tabbar/TabBar"
import { useProtocolData } from "../../web3/components/providers/ProtocolDataProvider"
import { usePools } from "../../components/provider/poolsProvider"
import { calAPY, formatPercent } from "../../helpers/web3/utils"
import { useEffect, useMemo, useState } from "react"

const LendingModule = () => {

  console.log("LendingModule is rendered");
  const { getBondPrice } = useProtocolData()
  const { bondPools } = usePools()
  // const [apy, setApy] = useState(null)
  // const getApy = async () => {        
  //   try {      
  //     return await getBondPrice(bondPools[0].bondAsset.address, bondPools[0].duration.duration)      
  //   } catch(error) {
  //     console.error(error);
  //   }    
  // }
  // const getApy = async () => {      
  //   const apy = await getBondPrice(bondPools[0].bondAsset.address, bondPools[0].duration.duration)
  //   console.log(apy);
  //   setApy(() => apy)  
  // }

  const apy = getBondPrice(bondPools[0].bondAsset.address, bondPools[0].duration.duration)

  // const apy = getApy()

  // let apy2
  
  // // const apy = (() => getApy().then(result => apy2 = result))()
  // const apy = getApy().then(result => {apy2 = result + 0})

  // console.log(apy2)

  // const a = useMemo(async () => 
  //   await getApy().then(
  //     result => {
  //       console.log(result);
  //       setApy(formatPercent(calAPY(result, 18, Number(bondPools[0].duration.duration))))})
  //   , [bondPools[0]])

  // useEffect(async () => await getApy().then(
  //     result => {
  //       console.log(result);
  //       setApy(formatPercent(calAPY(result, 18, Number(bondPools[0].duration.duration))))})
  //   , [bondPools[0]])
  
  // console.log(a);

  // const a = getApy().then(result => console.log(result))

  // useEffect(() => getApy(), [])
  
  return (    
    <>
      <div className='row gy-5 g-xl-8 p-10 justify-content-center'>
        <div className='col-xl-6'>
          <TabBar />
          <ApyLable data={apy}/>
          <div className="ps-5 pe-5 ms-5 me-5 pt-2 d-flex justify-content-between flex-wrap">
            <TokenIcon />
            <TokenIcon />
            <TokenIcon />
            <TokenIcon />
          </div>
          <div className='pt-10'>
            <DurationLable />
          </div>
        </div>
      </div>
    </>    
  )
}

export default LendingModule