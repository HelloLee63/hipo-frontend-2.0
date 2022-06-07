
const PortfolioButton = props => {

  const {title, handleClick} = props
  return (
    <div className="transaction-button">
      <div type='button' onClick={handleClick} className="btn btn-transaction btn-lg">{title}</div>
    </div> 
  )
}

export default PortfolioButton