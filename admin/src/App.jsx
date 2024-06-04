import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Admin from './Pages/Admin/Admin'
//import './App.css'
import Header from './Pages/Header/Header'
import Footer from './Components/Footer/Footer'
import Login from './Pages/Login/Login'
const App = () => {
  return (
    <div>
       <Navbar/>
      {/* <Header/>  */}
      <Admin/>
      <Footer/>
<Login/>
    </div>
  )
}

export default App