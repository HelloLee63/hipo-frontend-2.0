import clsx from 'clsx';
import { Link, useLocation } from 'react-router-dom';
import { checkIsActive } from '../../../helpers/RouterHelpers';
import SVG from 'react-inlinesvg';

const MenuItem = props => {

  const { title, to, menuIcon } = props;
  const {pathname} = useLocation()
  
  return (
    <div className='menu-item me-lg-1'>  
      <Link className={clsx('menu-item-custom menu-title-custom', {'menu-item-active': checkIsActive(pathname, to),})} to={to}>
        <SVG className='menu-svg' src={menuIcon} />
        <span className='ps-3'>{title}</span>
      </Link>
    </div>
  )
}

export default MenuItem