const ApyLable = ({ data }) => {

  return (
    <div className='d-flex justify-content-center align-items-center apy'>
      <span className='d-flex flex-nowrap apy-lable align-items-center'>Fixed APY</span>      
      <span className='d-flex flex-nowrap ps-5 apy-data align-items-center'>
      {!data ? (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>) : data}      
      </span>
    </div>
  )
}

export default ApyLable