import MenuItem from '../../../components/custom/menu-item/MenuItem'

const HeaderMenu = () => {
  return (
    <>
      <MenuItem title='Portfolio' to='/portfolio' menuIcon = './media/menu/alarm-fill.svg'/>
      <MenuItem title='Borrow' to='/borrow' menuIcon = './media/menu/menu-lend.svg'/>
      <MenuItem title='Lending' to='/lending' menuIcon = './media/menu/menu-borrow.svg'/>      
      <MenuItem title='Pledge' to='/pledge' menuIcon = './media/menu/menu-pledge.svg'/>
      <MenuItem title='Pool' to='/pool' menuIcon = './media/menu/menu-pool.svg'/>
    </>
  )
}

export default HeaderMenu