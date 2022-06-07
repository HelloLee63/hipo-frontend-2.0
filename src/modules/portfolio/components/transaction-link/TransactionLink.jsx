import { Link, useLocation } from "react-router-dom"

const TransactionLink = props => {

  const { ...transactionLinkProps } = props
  return (
    <div className='card transaction-link-card'>
      <Link to={transactionLinkProps.to}>
        <div className='card-body'>
          <div className="d-flex align-items-center">
            <div className="w-100 d-flex justify-content-space-between align-items-center">
              <img className='h-25px' src={transactionLinkProps.icon} />
              <span className="transaction-link-text ps-5">{transactionLinkProps.linkContent}</span>            
            </div>
            <i  style={{fontSize: '1.5rem'}} className="bi bi-box-arrow-up-right"></i>
          </div>   
        </div>
      </Link>    
    </div>
  )
}

export default TransactionLink