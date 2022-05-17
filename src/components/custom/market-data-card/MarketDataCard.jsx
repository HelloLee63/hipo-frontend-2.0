import React from 'react'
import ApyLable from '../apylable/ApyLable'
import DurationLable from '../duration-lable/DurationLable'
import TabBar from '../tabbar/TabBar'

const MarketDataCard = () => {
  return (
    <div className='card'>
      <div className='card-body'>
        <TabBar />        
      </div>
      <div className='card-body'>
        <ApyLable />
      </div>
      <div className='card-body'>
        <DurationLable />
      </div>
    </div> 
  )
}

export default MarketDataCard