/* eslint-disable react-hooks/exhaustive-deps */
import clsx from 'clsx'
import React from 'react'
import {Link} from 'react-router-dom'
import { Header } from './Header'
// import {KTSVG, toAbsoluteUrl} from '../../../helpers'
// import {useLayout} from '../../core'
// import {Header} from './Header'
// import {DefaultTitle} from './page-title/DefaultTitle'
// import {Topbar} from './Topbar'

export function HeaderWrapper() {
//   const {config, classes, attributes} = useLayout()
//   const {header, aside} = config

  return (
    <div
      id='kt_header'
      className={clsx('align-items-stretch')}
      data-kt-sticky='true'
      data-kt-sticky-name='header'
      data-kt-sticky-offset="{default: '200px', lg: '300px'}"
    >
      <Header />
    </div>
  )
}