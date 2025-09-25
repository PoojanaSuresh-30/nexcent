import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Images/Logo.svg';
import './Navbar.css';
import Right from '../assets/Images/Right.svg';




function Navbar()
{
    return(
        <section >
            <div className="navbar">
        
            <div className="logo">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="links">
                  <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Features</Link></li>
                    <li><Link to="/">Community</Link></li>
                    <li><Link to="/">Blog</Link></li>
                    <li><Link to="/">Pricing</Link></li>
                    <li>
                        <Link to="/"><button>Register Now<img src={Right} alt="Right Arrow" /> </button></Link>
                    </li>
                </ul>

            </div>

           </div>
            
           
        
              
        
        </section>
    )
}

export default Navbar;
