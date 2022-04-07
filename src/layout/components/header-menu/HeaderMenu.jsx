import React from 'react'
import MenuItem from '../../../components/custom/menu-item/MenuItem'

const HeaderMenu = () => {
  return (
    <div className='d-flex justify-content-between'>
      <MenuItem title='Borrow' to='/borrow'/>
      <MenuItem title='Lending' to='/lending'/>
      <MenuItem title='Pool' to='/pool'/>
    </div>
  )
}

export default HeaderMenu