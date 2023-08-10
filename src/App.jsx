import React from 'react'
import { BrowserRouter as Router , Routes , Route , Link } from 'react-router-dom'
import Facktor from './Page/Facktor'
import Dashbord from './components/Dashbord'
const App = () => {
  return (
    <Router>
      <Dashbord />
      <Routes>
        <Route path='/facktor' element={<Facktor />} />
      </Routes>
    </Router>
  )
}

export default App