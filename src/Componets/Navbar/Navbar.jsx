import React from 'react'
import './Navbar.css'
import log from '../Asset/log.png'
import { IoMdHome } from "react-icons/io";
import { GiBookPile } from "react-icons/gi";
import { FaPlus } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { MdLiveHelp } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { FaDeleteLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { eventWrapper } from '@testing-library/user-event/dist/utils';

const Navbar = () => {
  return (
    <div className='navbar home'>
        <div className="top">
            <div className="top--left">
                <img src={log} alt="" />
                <h1>Kikili Book Store</h1>
            </div>
            <div className="top--right">
                <a href="#">Delever to: 
                    <br />Ugx
                </a>
                <a href="#">
                    English-UGX
                </a>
                <Link to='/signup'><button>Sign Up</button></Link>
                <Link to='/login'><button>Login</button></Link>
            </div>
        </div>
        <div className="mid">
            <div>
                <FaDeleteLeft className='close'/>
            </div>
            <div className="main--nav">
                <Link style={{textDecoration: 'none'}} to='/'><IoMdHome className='ico-nav'/></Link>
                <Link style={{textDecoration: 'none'}} to='/books'><GiBookPile className='ico-nav'/></Link>
                <Link style={{textDecoration: 'none'}} to='/more'><FaPlus className='ico-nav'/></Link>
                <Link style={{textDecoration: 'none'}} to='/user'><FaUser className='ico-nav'/></Link>
                <Link style={{textDecoration: 'none'}} to='/cart'><FaCartArrowDown className='ico-nav'/></Link>
            </div>
            <div className="min--nav">
                <Link to='/notification'><IoIosNotifications className='ico-nav'/></Link>
                <Link to='/help'><MdLiveHelp className='ico-nav'/></Link>
                <Link to='/settings'><IoMdSettings className='ico-nav'/></Link>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar;