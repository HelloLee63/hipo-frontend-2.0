import MenuItem from '../../../components/custom/menu-item/MenuItem'

const HeaderMenu = () => {
  return (
    <div className='d-flex justify-content-between'>
      <MenuItem title='Borrow' to='/borrow' menuIcon = './media/menu/menu-lend.svg'/>
      <MenuItem title='Lending' to='/lending' menuIcon = './media/menu/menu-borrow.svg'/>
      
      <MenuItem title='Pledge' to='/pledge' menuIcon = './media/menu/menu-pledge.svg'/>
      <MenuItem title='Pool' to='/pool' menuIcon = './media/menu/menu-pool.svg'/>
    </div>
  )
}

export default HeaderMenu