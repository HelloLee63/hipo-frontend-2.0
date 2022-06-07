import { useEffect, useState } from "react"
import { useWallet } from "../../../../wallet/walletProvider"
import { usePortfolioProvider } from "../../provider/PortfolioProvider"
import CollateralTransactionCard from "../collateral-transaction-card/CollateralTransactionCard"
import ListEmpty from "../list-empty/ListEmpty"

const CollateralsList = () => {

  const wallet = useWallet()
  const [state, setState] = useState(new Array)
  const { fetchUserCollaterals } = usePortfolioProvider()
  
  useEffect(() => {
    setState(() => fetchUserCollaterals())
  }, [wallet.account])

  const collateralsList = state.map(v => v.read())
  const userCollateralsList = collateralsList.filter(userCol => userCol.colUserBalance.gt(0))

  return (   
    <>
      {
        userCollateralsList?.length > 0 ? userCollateralsList.map((element, index) => (
          <div key={index} className='pt-3'>
            <CollateralTransactionCard 
              asset={element.collateralAsset} 
              balance={element.colUserBalance.toString()}
              underlyingAssets={element.underlyingAssets}
              maxLtv={element.colMaxLtv}
              colLiquidationThreshold={element.colLiquidationThreshold}
              userLtv = {element.userLtv}
              userDebtA={element.userDebtA.toString()}
              userDebtB={ element.userDebtB.toString() }
            />
          </div>
      )) : (
        <ListEmpty to='/pledge' linkText='Go Pledge'/>
      )}
    </>   
  )
}

export default CollateralsList