import clsx from 'clsx'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { Content } from './components/Content'
import { HeaderWrapper } from './components/header/HeaderWrapper'
import { PageDataProvider, useLayout } from './core'

const MasterLayout = () => {

  const {classes} = useLayout()
  return (
    <PageDataProvider>
      <div className='page d-flex flex-row flex-column-fluid'>
        <div className='wrapper d-flex flex-column flex-row-fluid' id='kt_wrapper'>
          <HeaderWrapper />

          <div id='kt_content' className='content d-flex flex-column flex-column-fluid'>
            {/* <Toolbar /> */}
            <div
              className={clsx(
                'd-flex flex-column-fluid align-items-start',
                classes.contentContainer.join(' ')
              )}
              id='kt_post'
            >
              <Content>
                <Outlet />
              </Content>
            </div>
          </div>          
        </div>        
      </div>      
    </PageDataProvider>
  )
}

export default MasterLayout