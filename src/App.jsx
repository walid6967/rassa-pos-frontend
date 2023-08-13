import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Facktor from './Page/Facktor'
import Dashbord from './components/Dashbord'
import Buy from './components/Buy'
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Dashbord name = {"خرید"} />} />
          <Route path="/fac" element={<Facktor/>}/>
          <Route path='/buy' element={<Buy name={"فروش"} />} />
        </Routes>
       </Router>
    </>
  )
}

export default App