import React from 'react'

const TransactionInfo = props => {

  const { text1, text2 } = props
  return (
    <div className='d-flex flex-column'>
      <span className='d-flex justify-content-center transaction-info-text1'>{ text1 }</span>
      <span className='d-flex justify-content-center'>{ text2 }</span>
    </div>
  )
}

export default TransactionInfo