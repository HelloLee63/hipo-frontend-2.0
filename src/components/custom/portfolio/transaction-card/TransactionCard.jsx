import { Link } from "react-router-dom"
import RedeemView from "../../../../modules/pledge/views/RedeemView"
import { usePools } from "../../../provider/poolsProvider"
import TokenIcon from "../../token-icon/TokenIcon"
import PortfolioButton from "../portfolio-button/PortfolioButton"

const TransactionCard = props => {

  const { asset, balance } = props

  const { setCollateralSymbol } = usePools()

  function handleClick() {
    setCollateralSymbol(() => asset.symbol) 
  }
  return (
    <div className='d-flex transaction-card align-items-center transaction-list'>      
      <div className="d-flex align-items-center justify-content-center aside-icon">
        <TokenIcon tokenIcon={asset.icon} tokenSymbol={asset.symbol} />
      </div>
      <div className="w-100 d-flex justify-content-between align-items-center">
        <div className='d-flex justify-content-center flex-column ps-10'>
          <span className="d-flex justify-content-center transaction-list-lable-title">Amount</span>
          <span className="d-flex justify-content-center transaction-list-lable-data pt-5">{balance}</span>        
        </div>
        <div className='d-flex justify-content-center flex-column flex-column'>
          <span className="d-flex justify-content-center transaction-list-lable-title">Debt 1</span>
          <span className="d-flex justify-content-center transaction-list-lable-data pt-5">{balance}</span>
          {/* <div>
            <img src={asset.underlyingAsset[0].icon}/>
            <span className="d-flex justify-content-center transaction-list-lable-data pt-5">{balance}</span>
          </div>        */}
        </div>
        <div className='d-flex justify-content-center flex-column flex-column'>
          <span className="d-flex justify-content-center transaction-list-lable-title">Debt 2</span>
          <span className="d-flex justify-content-center transaction-list-lable-data pt-5">{balance}</span>        
        </div>

        <div className='d-flex justify-content-center flex-column flex-column'>
          <span className="d-flex justify-content-center transaction-list-lable-title">LTV</span>
          <span className="d-flex justify-content-center transaction-list-lable-data pt-5">{balance}</span>        
        </div>

        <div className='w-25 d-flex flex-column transaction-list-config'>
          <span className="d-flex justify-content-end config-text pt-3 pe-2"> Max LTV</span>
          <span className="d-flex justify-content-end config-text pt-2 pe-2">{balance}</span>
          <span className="d-flex justify-content-end config-text pt-2 pe-2">Liquidation Threshold</span>
          <span className="d-flex justify-content-end config-text pt-2 pb-1 pe-2">{balance}</span>        
        </div>

        <div className="d-flex justify-content-end pe-10">
          <div className="d-flex flex-column justify-content-right">
            <div>
              <Link to='/redeem'>
                <PortfolioButton handleClick={handleClick} title="Redeem" />
              </Link>
            </div>
            <div className="pt-3 transaction-button">
              <div
                onClick={handleClick} 
                title="Add" 
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#redeemForm"
                aria-controls="redeemForm"
                className="btn btn-transaction btn-lg"
                >Add
              </div>
            </div>
            <div className="offcanvas offcanvas-end portfolio-drawer" tabIndex="-1" 
              id="redeemForm" 
              aria-labelledby="redeemFormLabel"
              >
              <RedeemView />
            </div>
          </div> 
        </div>
      </div>           
    </div>
  )
}

export default TransactionCard