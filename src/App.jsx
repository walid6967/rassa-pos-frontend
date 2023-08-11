import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Facktor from './Page/Facktor'
import Dashbord from './components/Dashbord'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Dashbord/>} />
          <Route path="/fac" element={<Facktor/>}/>
        </Routes>
       </Router>
    </>
  )
}

export default App