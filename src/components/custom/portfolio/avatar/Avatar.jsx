import { shortenAddr } from "../../../../helpers/web3/utils"
import { useWallet } from "../../../../wallet/walletProvider"
import Identicon from "../../identicon/Identicon"
import { ExplorerAddressLink } from "../../../button"
import { useEffect, useState } from "react"
import { usePortfolioProvider } from "../../../../modules/portfolio/provider/PortfolioProvider"

const Avatar = () => {
  
  const wallet = useWallet()
  const [state, setState] = useState(new Array)
  const { fetchUserCollaterals } = usePortfolioProvider()
  
  useEffect(() => {
    setState(() => fetchUserCollaterals())
  }, [wallet.account])

  const collateralsList = state.map(v => v.read())
  const userCollateralsList = collateralsList.filter(userCol => userCol.colUserBalance.gt(0))

  return (
    <div className="d-flex avatar">      
      <Identicon circle={ true } address={ wallet.account } width={60} height={60} className="mr-16" />
      <div className="d-flex flex-column justify-content-center">
        <ExplorerAddressLink address={wallet.account}>                
          <span className='wallet-address align-items-center ms-5'>
            {wallet.ens.name || shortenAddr(wallet.account, 3, 5)}
          </span>                                                  
        </ExplorerAddressLink>
        <div className="d-flex">
          <span className="ms-5 pt-2 avatar-lable">{userCollateralsList.length} Borrow</span>
          <span className="ms-2 pt-2 avatar-lable">{userCollateralsList.length} Lending</span> 
          <span className="ms-2 pt-2 avatar-lable">{userCollateralsList.length} Pools</span> 
          <span className="ms-2 pt-2 avatar-lable">{userCollateralsList.length} Collaterals</span>  
        </div>
      </div>
    </div>
  )
}

export default Avatar