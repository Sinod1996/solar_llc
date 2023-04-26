import React from 'react';
import '../../assets/styles/Header.css'
import logo from '../../assets/images/solar.jpeg';
import '../../assets/styles/media.css';
import {Link} from 'react-scroll';



function Header(props) {


    return (
        <div className={'header'}   >

                <div className={'logo'}>
                        <img src={logo} alt=""/>
                       
                </div>

                <div className='logo_name'>
                     <h2><sup>SOLAR</sup>TASKS</h2>
                </div>
            <nav >
                <ul>
                    <li className={'active'}>
                        <Link to={'/'} spy={true} smooth={true} offset={-300} duration={500}>Home</Link>
                    </li>
                    <li>
                        <Link to={'about'} spy={true} smooth={true} offset={-150} duration={500}>About</Link>
                    </li>
                   
                    <button>
                        <Link style={{color:"white"}} to={'contact'} spy={true} smooth={true} offset={-100} duration={500}>Contact</Link>
                    </button>
                    
                </ul>
            </nav>
        </div>
    );
}

export default Header;