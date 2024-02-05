import React from 'react';
import {RiFacebookFill} from 'react-icons/ri';
import {AiOutlineInstagram,AiOutlineTwitter,} from 'react-icons/ai';
import {BiLogoYoutube} from 'react-icons/bi';
import './footer.css'



const Footer = () => {
  return (
    <>
    <div className='footer'>
     <div className='container'>
       <div className='about'>
        <div className='logo'>
            <img src='./img/logo.svg' alt='logo'/>
        </div>
        <div className='detail'>
            <p>
                We are a team of designers and developers that create high quality Wordpress
            </p>
            <div className='icon'>
                <li><RiFacebookFill/></li>
                <li><AiOutlineInstagram/></li>
                <li><AiOutlineTwitter/></li>
                <li><BiLogoYoutube/></li>
            </div>
        </div>
       </div>

      <div className='account'>
        <h3>My Account</h3>
        <ul>
            <li>Account</li>
            <li>Order</li>
            <li>Cart</li>
            <li>Shipping</li>
            <li>Return</li>
        </ul>
      </div>

      <div className='page'>
        <h3>
            pages
        </h3>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Terms & Condition</li>
        </ul>
      </div>

     </div>
    </div>
    </>
  )
}

export default Footer;