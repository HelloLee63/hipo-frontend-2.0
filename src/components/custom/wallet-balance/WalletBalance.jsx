
const WalletBalance = props => {
  const { balance, balanceIcon } = props
  return (
    <div className="d-flex align-items-center justify-content-center wallet-balance">
      <img src={balanceIcon} alt=''/>
      <span className="ps-3 balance-amount">{balance}</span>
    </div>
  )
}

export default WalletBalance