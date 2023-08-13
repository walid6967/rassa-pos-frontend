import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Facktor from './Page/Facktor'
import Dashbord from './components/Dashbord'
import Buy from './components/Buy'
import Facktor_buy from './Page/Facktor_buy'
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Dashbord name = {"خرید"} />} />
          <Route path="/fac" element={<Facktor/>}/>
          <Route path='/buy' element={<Buy name={"فروش"} />} />
          <Route path='/buy/fac' element={<Facktor_buy/>} />
        </Routes>
       </Router>
    </>
  )
}

export default App