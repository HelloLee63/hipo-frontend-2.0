import clsx from 'clsx';
import { Link, useLocation } from 'react-router-dom';
import { checkIsActive } from '../../../helpers/RouterHelpers';

const MenuItem = props => {

  const { title, to, menuIcon } = props;
  const {pathname} = useLocation()
  
  return (  
    <Link className={clsx('menu-item-custom menu-title-custom', {'menu-item-active': checkIsActive(pathname, to),})} to={to}>
      <img src={menuIcon} />
      <span className='ps-3'>{title}</span>
    </Link>
  )
}

export default MenuItem