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
          <Route path='/sell' element={<Dashbord name = {"خرید"} />} />
          <Route path="/sell/fac" element={<Facktor/>}/>
          <Route path='/buy' element={<Buy name={"فروش"} />} />
          <Route path='/buy/fac' element={<Facktor_buy/>} />
          <Route path='*' element={<h1 className={`text-center text-6xl`}>Page Not Found</h1>} />
        </Routes>
       </Router>
    </>
  )
}

export default App