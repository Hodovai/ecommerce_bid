import React from 'react'
import './Admin.css'

import Sidebar from '../../Components/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import AdminDashboard from '../../Components/AdminDashboard/AdminDashboard'
import AddProduct from '../../Components/AddProduct/AddProduct'
import ListProduct from '../../Components/ListProduct/ListProduct'


const Admin = () => {
  
 
  return (

    <div className='admin'>


        <Sidebar/>
        
        <Routes>
          <Route path='/header' element={<Headers />} />
            <Route path='/addproduct' element={<AddProduct/>}/>
            <Route path='/listproduct' element={<ListProduct/>}/>
            

        </Routes>
    </div>
  )
}

export default Admin