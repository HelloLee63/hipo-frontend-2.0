import { useWallet } from "../../wallet/walletProvider"
import PortfolioView from "./PortfolioView"
import PortfolioViewNoWallet from "./PortfolioViewNoWallet";
import PortfolioProvider from "./provider/PortfolioProvider";

const Portfolio = () => {

  const wallet = useWallet();

  return (
    <PortfolioProvider>
      <div className='row align-items-start gy-5 g-xl-8 pt-15 pb-15 justify-content-center'>        
        <div className='col-md-9'>
          {wallet.account ? <PortfolioView /> : <PortfolioViewNoWallet />}
        </div>                        
      </div>
    </PortfolioProvider>
  )
}

export default Portfolio