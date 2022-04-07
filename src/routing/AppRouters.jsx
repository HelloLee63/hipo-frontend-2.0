import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import HeaderMenu from '../layout/components/header-menu/HeaderMenu'
import MasterLayout from '../layout/MasterLayout'
import BorrowModule from '../modules/borrow/BorrowModule'
import LendingModule from '../modules/lending/LendingModule'
import PoolModule from '../modules/pool/PoolModule'

const AppRouters = () => {
  return (   
    <BrowserRouter>
      <Routes>
        <Route element={ <MasterLayout /> }>
          <Route path='/borrow' element={ <BorrowModule /> } />
          <Route path='/lending' element={ <LendingModule /> } />
          <Route path='/pool' element={ <PoolModule /> } />
        </Route>     
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouters