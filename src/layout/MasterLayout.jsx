import clsx from 'clsx'
import React from 'react'
import { HeaderWrapper } from './components/header/HeaderWrapper'

const MasterLayout = () => {
  return (
    <div className='page d-flex flex-row flex-column-fluid'>
      <div className='wrapper d-flex flex-column flex-row-fluid' id='kt_wrapper'>
        <HeaderWrapper />

        <div id='kt_content' className='content d-flex flex-column flex-column-fluid'>
          <HeaderWrapper />
            <div
              className={clsx(
                'd-flex flex-column-fluid align-items-start',
                
              )}
              id='kt_post'
            >
              <HeaderWrapper />
            </div>
        </div>
        <img src='/media/temp/hipo.png' alt='' />
      </div>
    </div>
  )
}

export default MasterLayout