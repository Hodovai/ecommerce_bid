import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
//import add_product_icon from '../../assets/Product_Cart.svg'
// import list_product_icon from '../../assets/Product_list_icon.svg'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
const Sidebar = () => {
  return (
    <div className='sidebar'>

<Link to={'/header'} style={{textDecoration: "none"}}>
            <div className="sidebar-item">
            <BsGrid1X2Fill className='icon'/>
                {/* <img src={list_product_icon} alt="" /> */}
                <p>Dashboard</p>
            </div>
        </Link>
        <Link
        to={'/addproduct'} 
        style={{textDecoration: "none"}}>
            <div className="sidebar-item">
            <BsFillArchiveFill className='icon'/>
                {/* <img src={add_product_icon} alt="" /> */}
                <p>Product</p>
            </div>
        </Link>
        <Link to={'/listproduct'} style={{textDecoration: "none"}}>
            <div className="sidebar-item">
            <BsFillGrid3X3GapFill className='icon'/> 
                {/* <img src={list_product_icon} alt="" /> */}
                <p>Categories </p>
            </div>
        </Link>
      
    </div>
  )
}

export default Sidebar