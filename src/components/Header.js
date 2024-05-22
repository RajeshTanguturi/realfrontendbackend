import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Header = () => {
    // let [loggedIn,setLoggedIn] = useState(sessionStorage.getItem("rloggedin"));
     let navigate = useNavigate();


    let logoutHandler = () =>{
        // console.log("logging out");
        sessionStorage.clear();
        navigate('/')        
    }
    let loginHandler = () =>{
        navigate('/login')
    }
    let signupHandler = () => {
        navigate('/signup');
    }

    return (
      <div className = "row bg-warning d-flex align-items-center ">
          <div className="col-sm-4 my-2">
              <Link to="/"><img className="custom-width-20 mx-3" src="/imgs/logo.png" alt="logo.jpg"/></Link>
          </div>
          <div className="col-sm-5 d-flex ">
              <h3 className=""><b >Get your dream house with us!</b></h3>
          </div>
          <div className="col-sm-3 d-flex align-items-center">
              {
                  ( sessionStorage.getItem("rloggedin")=="true")
                  ?
                  <button onClick={logoutHandler} className="btn btn-outline-light mx-1"> Logout </button>
                  :
                  <>
                  <button onClick={loginHandler}  className="btn btn-outline-light mx-1 "> Login </button>
                  <button onClick={signupHandler}  className="btn btn-outline-light mx-1">Signup</button>
                  </>
              }


                        </div>
      </div>
   );
}

export default Header;

