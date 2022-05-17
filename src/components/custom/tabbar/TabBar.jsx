const TabBar = props => {

  const {transactionType, setTransactionType} = props
  return (
    <div className="custom-navbar">
      <div className="d-flex justify-content-center">
        <div className='tabs'>
          <input type="radio" 
            id="radio-1" 
            name="tabs" 
            value='Borrow' 
            checked={transactionType === 'Borrow'} 
            onChange={(e) => {setTransactionType(e.target.value)}} />
          <label className="tab" htmlFor="radio-1">Borrow</label>
          <input 
            type="radio" 
            id="radio-2" 
            name="tabs" 
            value='Lend' 
            checked={transactionType === 'Lend'} 
            onChange={(e) => {setTransactionType(e.target.value)}}/>
          <label className="tab" htmlFor="radio-2">Lend</label>
          <span className="glider"></span>
        </div>
      </div>
    </div>
  )
}

export default TabBar