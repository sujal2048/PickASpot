import React from 'react';
import Logo from "../../images/logo.png"

function UserHome(props) {
    let handleLoggOut=()=>{
        props.handleLoggedOut(Response);
        console.log("log out2");
       // window.location.reload(true);
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-red navbar-dark">
            <div className="wrapper" > </div>

            <div className="container-fluid all-show"> <img src={Logo} style={{height:"50px",width:"120px"}} alt="logo"/>  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
           
            <button onClick={handleLoggOut}  className="d-flex flex-row sim "  >Logout</button>
           
            </div>

            </nav>  
        </div>
    )
}

export default UserHome