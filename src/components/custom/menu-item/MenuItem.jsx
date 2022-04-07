import clsx from 'clsx';
import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { checkIsActive } from '../../../helpers/RouterHelpers';

const MenuItem = props => {

  const { title, to } = props;
  const {pathname} = useLocation()
  
  return (    
    <Link className={clsx('menu-item menu-title', {'menu-item-active': checkIsActive(pathname, to),})} to={to}>
      <span>{title}</span>
    </Link>
  )
}

export default MenuItem