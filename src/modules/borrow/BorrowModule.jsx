import TransactionFormCard from '../../components/custom/transaction-form-card/TransactionFormCard'

const BorrowModule = () => {

  console.log("BorrowModule is rendered");
  return (
    <>
      <div className='row gy-5 g-xl-8 pt-5 justify-content-end'>
        <div className='col-md-5'>
          <TransactionFormCard />
        </div>
      </div>
    </>
  )
}

export default BorrowModule