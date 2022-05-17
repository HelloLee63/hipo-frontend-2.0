import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MasterLayout from '../layout/MasterLayout'
import BorrowModule from '../modules/borrow/BorrowModule'
import LendingModule from '../modules/lending/LendingModule'
import MarketModule from '../modules/market/MarketModule'
import Pledge from '../modules/pledge/Pledge'
import PoolModule from '../modules/pool/PoolModule'

const AppRouters = () => {
  return (   
    <BrowserRouter>
      <Routes>
        <Route element={ <MasterLayout /> }>
          <Route path='/' element={ <MarketModule/> }/>
          <Route path='/borrow' element={ <BorrowModule /> } />
          <Route path='/lending' element={ <LendingModule /> } />
          <Route path='/pool' element={ <PoolModule /> } />
          <Route path='/pledge' element={ <Pledge /> } />
        </Route>     
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouters