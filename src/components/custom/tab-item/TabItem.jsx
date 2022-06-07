const TabItem = props => {

  const { title } = props;

  return (  
    <div>
      <span className='tab-item ps-3'>{title}</span>
    </div>
  )
}

export default TabItem