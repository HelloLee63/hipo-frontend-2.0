const DataLable = ({text1, text2}) => {
  return (
    <div className='d-flex flex-column justify-content-center'>
      <span className='d-flex justify-content-center data-lable-title'>{text1}</span>
      <span className='d-flex justify-content-center data-lable-data pt-5'>{text2}</span>
    </div>
  )
}

export default DataLable