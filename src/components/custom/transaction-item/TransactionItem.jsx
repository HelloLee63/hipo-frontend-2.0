
const TransactionItem = ({transactionIcon, transactionTitle, transactionDate, transactionDescription}) => {
  return (
    <div className="d-flex align-items-center transaction-item ps-15 pt-15 pe-15">
      <img className="transaction-icon p-2 h-30px" src={transactionIcon} alt='' />
      <div className="d-flex flex-column ps-3">
        <span className="transaction-item-title">{transactionTitle}</span>
        <span className="transaction-item-date">{transactionDate}</span>
      </div>
      <span className="ps-3 transaction-item-description">{transactionDescription}</span>
    </div>
  )
}

export default TransactionItem