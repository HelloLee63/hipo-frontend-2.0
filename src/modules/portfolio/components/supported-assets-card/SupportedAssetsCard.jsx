const SupportedAssetsCard = props => {

  const {title, assets} = props
  
  return (
    <div className="card supported-assets-card">
      <div className="card-body">
        <div className="card-title supported-assets-card-title">
          {title}
        </div>
        <div className="pt-7 pb-5 d-flex justify-content-between">
          {assets.map(asset => (
            <div key={asset.symbol} className='ps-5'>
              <img className='h-30px' src={asset.icon} />
              <span className="ps-2 supported-assets-card-symbol">{asset.symbol}</span>
            </div>
          ))}
        </div>
      </div>      
    </div>
  )
}

export default SupportedAssetsCard