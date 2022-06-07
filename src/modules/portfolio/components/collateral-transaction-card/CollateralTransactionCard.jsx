import TokenIcon from "../../../../components/custom/token-icon/TokenIcon"
import { usePools } from "../../../../components/provider/poolsProvider"
import AddCollateralView from "../../../pledge/views/AddCollateralView"
import RedeemView from "../../../pledge/views/RedeemView"

const CollateralTransactionCard = props => {

  const { asset, balance, underlyingAssets, maxLtv, colLiquidationThreshold, userLtv, userDebtA, userDebtB} = props
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
          <div className="d-flex align-items-center pt-5">
            <img className="h-20px" src={underlyingAssets[0].icon}/>
            <span className="ps-2 transaction-list-lable-data">{userDebtA}</span>
          </div>       
        </div>
        <div className='d-flex justify-content-center flex-column flex-column'>
          <span className="d-flex justify-content-center transaction-list-lable-title">Debt 2</span>
          <div className="d-flex align-items-center pt-5">
            <img className="h-20px" src={underlyingAssets[1].icon}/>
            <span className="ps-2 transaction-list-lable-data">{userDebtB}</span> 
          </div>         
        </div>

        <div className='d-flex justify-content-center flex-column flex-column'>
          <span className="d-flex justify-content-center transaction-list-lable-title">LTV</span>
          <span className="d-flex justify-content-center transaction-list-lable-data pt-5">{userLtv}</span>        
        </div>

        <div className='w-25 d-flex flex-column transaction-list-config'>
          <span className="d-flex justify-content-end config-text pt-3 pe-2"> Max LTV</span>
          <span className="d-flex justify-content-end config-text pt-2 pe-2">{maxLtv}</span>
          <span className="d-flex justify-content-end config-text pt-2 pe-2">Liquidation Threshold</span>
          <span className="d-flex justify-content-end config-text pt-2 pb-1 pe-2">{colLiquidationThreshold}</span>        
        </div>

        <div className="d-flex justify-content-end pe-10">
          <div className="d-flex flex-column justify-content-right">
            <div className="pt-3 transaction-button">
              <div
                onClick={handleClick} 
                title="Add" 
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#redeemForm"
                aria-controls="redeemForm"
                className="btn btn-transaction btn-lg"
                >Redeem
              </div>
            </div>
            <div className="offcanvas offcanvas-end portfolio-drawer" tabIndex="-1" 
              id="redeemForm" 
              aria-labelledby="redeemFormLabel"
              >
              <RedeemView />
            </div>
            <div className="pt-3 transaction-button">
              <div
                onClick={handleClick} 
                title="Add" 
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#addCollateralForm"
                aria-controls="addCollateralForm"
                className="btn btn-transaction btn-lg"
                >Add
              </div>
            </div>
            <div className="offcanvas offcanvas-end portfolio-drawer" tabIndex="-1" 
              id="addCollateralForm" 
              aria-labelledby="addCollateralFormLabel"
              >
              <AddCollateralView />
            </div>
          </div> 
        </div>
      </div>           
    </div>
  )
}

export default CollateralTransactionCard