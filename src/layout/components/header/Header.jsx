import { useEffect } from 'react'
import { SwapperComponent } from '../../../_metronic/assets/js/components/_SwapperComponent'
import HeaderMenu from '../header-menu/HeaderMenu'

const Header = () => {

  useEffect(() => {
    SwapperComponent.reinitialization()
  }, [])

  return (
    <div
      className='header-menu align-items-stretch bg-black'
      data-kt-drawer='true'
      data-kt-drawer-name='header-menu'
      data-kt-drawer-activate='{default: true, lg: false}'
      data-kt-drawer-overlay='true'
      data-kt-drawer-width="{default:'200px', '300px': '250px'}"
      data-kt-drawer-direction='start'
      data-kt-drawer-toggle='#kt_header_menu_mobile_toggle'
      data-kt-swapper='true'
      data-kt-swapper-mode='prepend'
      data-kt-swapper-parent="{default: '#kt_body', lg: '#kt_header_nav'}"
    >
      <div
        className='menu menu-lg-rounded menu-column menu-lg-row'
        id='#kt_header_menu'
        data-kt-menu='true'
      >
        <HeaderMenu />
      </div>
    </div>
  )
}

export {Header}