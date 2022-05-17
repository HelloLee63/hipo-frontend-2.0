import DataLable from '../data-lable/DataLable'

const Overview = () => {
  return (
    <div className='card form-card'>      
      <div className='d-flex justify-content-evenly flex-wrap'>
        <div className='card-body'>
          <DataLable text1='Total Value Locked' text2='478M'/>
        </div>
        <div className='card-body'>
          <DataLable text1='Total Value Locked' text2='478M'/>
        </div>
        <div className='card-body'>
          <DataLable text1='Total Value Locked' text2='478M'/>
        </div>
      </div>
    </div>
  )
}

export default Overview