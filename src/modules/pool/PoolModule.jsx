import LiquidityPoolApy from "../../components/liquidity-pool-apy/LiquidityPoolApy"

const PoolModule = () => {
  return (
    <>
      <div className='row gy-5 g-xl-8 pt-5 justify-content-center'>
        <div className='col-md-2'>
          <LiquidityPoolApy />
        </div>
        <div className='col-md-2'>
          <LiquidityPoolApy />
        </div>
        <div className='col-md-2'>
          <LiquidityPoolApy />
        </div>
        <div className='col-md-2'>
          <LiquidityPoolApy />
        </div>
      </div>
    </>


  )
}

export default PoolModule