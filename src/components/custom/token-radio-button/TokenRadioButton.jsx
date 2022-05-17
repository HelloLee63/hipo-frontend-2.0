import TokenIcon from "../token-icon/TokenIcon"

const TokenRadioButton = props => {

  const {isCollateral, tokens, assetSymbol, setAssetSymbol, setAmount} = props

  function handleClick() {
    document.getElementById("input-amount").value = undefined
    setAmount(() => (undefined))
  }

  return (
    <>
      <form>
        <div className="d-flex justify-content-between flex-wrap">
        {tokens.map(token => (
          <div className='token-radio-button' key={isCollateral ? token.collateralAsset.symbol : token.symbol}>
            <label>
              <input type='radio' id='token-radio-button'
                value={isCollateral ? token.collateralAsset.symbol : token.symbol}
                checked={assetSymbol === (isCollateral ? token.collateralAsset.symbol : token.symbol)}
                onChange={(e)=>{ setAssetSymbol(e.target.value) }}
                onClick={handleClick}             
                />
                
              <TokenIcon 
                tokenIcon={isCollateral ? token.collateralAsset.icon : token.icon} 
                tokenSymbol={isCollateral ? token.collateralAsset.symbol : token.symbol}/>
            </label>
          </div>      
        ))}
        </div>
      </form>  
    </>
  )
}

export default TokenRadioButton