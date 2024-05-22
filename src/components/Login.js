
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {


    let [lemail,setEmail] = useState('');
    let [lpassword,setPassword] = useState('');
    let navigate = useNavigate();
    let [incorrectDetails,setIncorrectDetails] = useState(false);




// bs5-form-group


    // e - synthetic event
    let emailHandler = (e)=>{
        // console.log(" typing in email");
        // console.log(e);
        console.log(e.target.value);
        setEmail(e.target.value);          
    }


    let passwordHandler = (e) =>{
        console.log(e.target.value);
        setPassword(e.target.value);
    }


    let submitHandler = async (e) => {
        e.preventDefault();
        //get the data from the fields
        //talk to middleware, send the email and password and make a post request
        // using axios
        console.log("clicked submit");
        try{
        let response = await axios.post(process.env.REACT_APP_BACKEND_URL+'/login',{email:lemail,password:lpassword});
        console.log(response.data[0]);
        if(response.data.length>0){
            sessionStorage.setItem("rloggedin","true");
            sessionStorage.setItem("remail",response.data[0].email);
            sessionStorage.setItem("rname",response.data[0].name);
            sessionStorage.setItem("rrole",response.data[0].role);
           
            if(response.data[0].role == "realtor")
                navigate('/enquiries');
            else
                navigate('/');
        }  
        else {
            setIncorrectDetails(true);
            console.log(" could not login , check credentials");
        }  
    }
    catch{
        console.log(" error , in catch");
        setIncorrectDetails(true);
    }
    }




    return (
        <>
         <div class="row justify-content-center mt-4">
        <div class="col-sm-5 mb-3">
             <h3> Login</h3>
            </div>
        </div>  
 
 {
    //  conditional rendering using ternary
    (incorrectDetails)
    ?
        <div class="row justify-content-center mt-1">
            <div class="col-sm-5 mb-3 text-info">
             Sorry, login credentials are incorrect.Please try again.
            </div>
        </div>
    :
    <> </>
 }
                 
             
        <div class="row justify-content-center mt-1">
            <div class="col-sm-5 mb-3">
                <label for="" class="form-label">email</label>
                <input onChange={emailHandler}
                    type="text"
                    name="email"
                    id=""
                    class="form-control"
                    placeholder=""
                    aria-describedby="helpId"
                />
             
            </div>
        </div>
        <div className="row justify-content-center">
            <div class="col-sm-5 mb-3">
                <label for="" class="form-label">Password</label>
                <input onChange={passwordHandler}
                    type="password"
                    class="form-control"
                    name="password"
                    id=""
                    placeholder=""
                />
            </div>
        </div>
       
        <div className="row justify-content-center">
            <div class="col-sm-5 mb-3">
               
                <button onClick={submitHandler}
                    type="submit"
                    class="btn btn-primary"
                >
                    Login
                </button>
               
            </div>
        </div>
        </>
     );
}
 
export default Login;
