import React from 'react'

const TokenAmountLable = props => {

  const {amount, valueInUsDollar} = props;

  return (
    <div className='d-flex flex-column'>
      <div className='d-flex justify-content-end'>{amount}</div>
      <div className='d-flex justify-content-end'>{`$ ${valueInUsDollar}`}</div>
    </div>
  )
}

export default TokenAmountLable