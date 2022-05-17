const TransactionInfo = props => {

  const { content } = props
  return (
    <div className='d-flex flex-column'>
      <span className='transaction-info-text1'>{ content.header }</span>
      {content.text1 && <span className='transaction-info-text2'>{ content.text1 }</span>}
      {content.text2 && <span className='transaction-info-text2'>{ content.text2 }</span>}
    </div>
  )
}

export default TransactionInfo