const PromptInfoCard = props => {
  const {title, text} = props
  return (
    <div className='card form-card prompt-info-card'>
      <div className='card-body'>
        <div className='card-title title'>{title}</div>
        <div className="card-text text" >{text}</div>
      </div>
    </div>
  )
}

export default PromptInfoCard