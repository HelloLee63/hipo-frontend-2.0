import { useMemo } from "react"
import { useProtocolData } from "../../../web3/components/providers/ProtocolDataProvider"
import { calAPY, formatPercent } from "../../../web3/utils"
import { usePools } from "../../provider/poolsProvider"

const RatesTable = () => {

  const { bondPools } = usePools()
  const { getBondPrice } = useProtocolData()
  const { collateralSymbol, getCollateralPoolBySymbol } = usePools()
  const colPool = useMemo(() => getCollateralPoolBySymbol(collateralSymbol), [collateralSymbol])

  const pools = bondPools.filter(value => {
    return value.bondAsset.symbol.toLowerCase() === colPool.underlyingAssets[0].symbol.toLowerCase() || value.bondAsset.symbol.toLowerCase() === colPool.underlyingAssets[1].symbol.toLowerCase()
  })

  return (
    <div className='card form-card rates-table'>
      <div className='card-body'>
        <div className="card-title title">Fixed APR</div>
        <table className="table">
          <thead className="table-header">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Duration</th>
              <th scope="col">{colPool.underlyingAssets[0].symbol}</th>
              <th scope="col">{colPool.underlyingAssets[1].symbol}</th>
            </tr>
          </thead>
          <tbody>
            {/* {pools.map(pool => (
              <tr key={pool.bToken.symbol} className="table-body">
                <th scope="row">{pool.index}</th>
                <td>{ pool.duration.description }</td>
                <td>{ formatToken(getBondPrice(pool.bondAsset.address, pool.duration.duration), { scale: 18 }) ?? '-' }</td>
                <td>@mdo</td>
              </tr>
            ))} */}
            <tr className="table-body">
              <th scope="row">1</th>
              <td>{ pools[0].duration.description }</td>
              <td>{formatPercent(calAPY(getBondPrice(pools[0].bondAsset.address, pools[0].duration.duration), 18, Number(pools[0].duration.duration))) ?? '-' }</td>
              <td>{formatPercent(calAPY(getBondPrice(pools[6].bondAsset.address, pools[6].duration.duration), 18, Number(pools[6].duration.duration))) ?? '-' }</td>
            </tr>
            <tr className="table-body">
              <th scope="row">2</th>
              <td>{ pools[1].duration.description }</td>
              <td>{formatPercent(calAPY(getBondPrice(pools[1].bondAsset.address, pools[1].duration.duration), 18, Number(pools[1].duration.duration))) ?? '-' }</td>
              <td>{formatPercent(calAPY(getBondPrice(pools[7].bondAsset.address, pools[7].duration.duration), 18, Number(pools[7].duration.duration))) ?? '-' }</td>
            </tr>
            <tr className="table-body">
              <th scope="row">3</th>
              <td>{ pools[2].duration.description }</td>
              <td>{formatPercent(calAPY(getBondPrice(pools[2].bondAsset.address, pools[2].duration.duration), 18, Number(pools[2].duration.duration))) ?? '-' }</td>
              <td>{formatPercent(calAPY(getBondPrice(pools[8].bondAsset.address, pools[8].duration.duration), 18, Number(pools[8].duration.duration))) ?? '-' }</td>
            </tr>
            <tr className="table-body">
              <th scope="row">4</th>
              <td>{ pools[3].duration.description }</td>
              <td>{formatPercent(calAPY(getBondPrice(pools[3].bondAsset.address, pools[3].duration.duration), 18, Number(pools[3].duration.duration))) ?? '-' }</td>
              <td>{formatPercent(calAPY(getBondPrice(pools[9].bondAsset.address, pools[9].duration.duration), 18, Number(pools[9].duration.duration))) ?? '-' }</td>
            </tr>
            <tr className="table-body">
              <th scope="row">5</th>
              <td>{ pools[4].duration.description }</td>
              <td>{formatPercent(calAPY(getBondPrice(pools[4].bondAsset.address, pools[4].duration.duration), 18, Number(pools[4].duration.duration))) ?? '-' }</td>
              <td>{formatPercent(calAPY(getBondPrice(pools[10].bondAsset.address, pools[10].duration.duration), 18, Number(pools[10].duration.duration))) ?? '-' }</td>
            </tr>
            <tr className="table-body">
              <th scope="row">6</th>
              <td>{ pools[5].duration.description }</td>
              <td>{formatPercent(calAPY(getBondPrice(pools[5].bondAsset.address, pools[5].duration.duration), 18, Number(pools[5].duration.duration))) ?? '-' }</td>
              <td>{formatPercent(calAPY(getBondPrice(pools[11].bondAsset.address, pools[11].duration.duration), 18, Number(pools[11].duration.duration))) ?? '-' }</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RatesTable