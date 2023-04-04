import React,{useState} from 'react'
import '../../Css/header.css'
import Logo from "../../images/logo.png"
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
      setActive(!isActive);
    };
    return (
        <>

          <nav className="navbar navbar-expand-lg navbar-red navbar-dark">
          <div className="wrapper"> </div>
          <div className="container-fluid all-show"> <NavLink to="/" className="navbar-brand"><img src={Logo} style={{height:"50px",width:"120px"}} alt="logo"/> 
          </NavLink> <button  onClick={toggleClass} className={isActive ? "navbar-toggler": "navbar-toggler collapsed"}  type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={isActive ? "true": "false"} aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> 
          </button>
          <div className={isActive ? "navbar-collapse collapse show": "navbar-collapse collapse"}  id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              
                <li className='nav-item active'><NavLink to='/' className='nav-link'>Home</NavLink></li>
                <li className="nav-item"> <a className="nav-link" href="#services">Services</a> </li>
                <li className="nav-item"> <NavLink to="/register" className="nav-link" >REGISTER</NavLink> </li>
                <li className="nav-item"> <a  className="nav-link" href="#contact">contact</a> </li> 
        

            </ul>
            <GoogleLogin
             onSuccess={credentialResponse => {
                const details=jwt_decode(credentialResponse.credential);
                //setIsUserLoggedIn(true);
                props.handleLoggedIn(credentialResponse);
                console.log("login");
                console.log(credentialResponse);
                console.log(details);
              }}
              onError={() => {
                console.log('Login Failed');
              }}
            />
        </div>
    </div>
</nav>  

        </>
    )
}

export default Header
