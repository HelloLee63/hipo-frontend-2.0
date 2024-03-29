/* eslint-disable react-hooks/exhaustive-deps */
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { toAbsoluteUrl } from '../../../helpers/AssetHelpers'
import { useLayout } from '../../core'
import { Topbar } from '../topbar/Topbar'
import { Header } from './Header'

export function HeaderWrapper() {
  const {config, classes, attributes} = useLayout()
  const {header} = config

  return (
    <div
      id='kt_header'
      className={clsx('header', classes.header.join(' '), 'align-items-stretch')}
      data-kt-sticky='true'
      data-kt-sticky-name='header'
      data-kt-sticky-offset="{default: '200px', lg: '300px'}"
      {...attributes.headerMenu}
    >
      <div className={clsx(classes.headerContainer.join(' '), 'd-flex align-items-center')}>
        <div
          className='d-flex topbar align-items-center d-lg-none ms-n2 me-3'
          title='Show aside menu'
        >
          <div
            className='btn btn-icon btn-active-light-primary btn-custom w-30px h-30px w-md-40px h-md-40px'
            id='kt_header_menu_mobile_toggle'
          >
            <img alt='' src='/media/icons/abs015.svg' className='svg-icon-2x' />
          </div>
        </div>
        
        <div className='header-logo me-5 me-md-10 flex-grow-1 flex-lg-grow-0'>
          <Link to='/'>
            <img
              alt='Logo'
              src={toAbsoluteUrl('/media/logos/logo.svg')}
              className='logo-default h-35px'
            />
            <img
              alt='Logo'
              src={toAbsoluteUrl('/media/logos/logo.svg')}
              className='logo-sticky h-35px'
            />
          </Link>
        </div>
        
        <div className='d-flex align-items-stretch justify-content-between flex-lg-grow-1'>          
          {header.left === 'menu' && (
            <div className='d-flex align-items-stretch' id='kt_header_nav'>
              <Header />
            </div>
          )}

          <div className='d-flex align-items-stretch flex-shrink-0'>
            <Topbar />            
          </div>
        </div>
      </div>      
    </div>
  )
}