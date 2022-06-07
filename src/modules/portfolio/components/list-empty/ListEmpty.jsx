import { Link } from "react-router-dom"

const ListEmpty = ({linkText, to}) => {
  return (
    <div className="d-flex  align-items-center justify-content-center">
      <div className="d-flex flex-column align-items-center justify-content-center m-10 transaction-assets-list-empty">
        <div className="d-flex align-items-center justify-content-center">
          <i style={{color:'#FFC73A'}} className="bi bi-exclamation-circle"></i>
          <span className="ps-1">There is no relevant transaction record currently.</span>
        </div>
        <div className="pt-3">
        <Link to={to}>
          <span className="transaction-action-link">
            {linkText}
          </span>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default ListEmpty