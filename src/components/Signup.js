import { useState } from "react";
import axios from 'axios';


const Signup = () => {


    let [formObj,setFormObj] = useState({name:"",email:"",password:""});
    let [successSignup, setsuccessSignup] = useState(false);
    let [emailInUse,setEmailInUse] = useState(false);


    let changeHandler = (e) => {
            // console.log(e.target.value);
            setFormObj({...formObj,[e.target.name]:e.target.value});
            console.log(formObj);
    }


    let submitHandler = async (e) => {
        e.preventDefault();
        //get the data from the fields
        //talk to middleware, send the details and make a post request
        // using axios
        console.log("clicked signup");
        try{
            let response = await axios.post(process.env.REACT_APP_BACKEND_URL+'signup',{...formObj});
            console.log(response);
            if(response.status==200){
                console.log("registered!");
                setsuccessSignup(true);
            }
            else {
                setEmailInUse(true);
                console.log("could not registered, email already exists in DB!");            
            }
        }
        catch{
            setEmailInUse(true);
        }


    }


    //conditional rendering using if else
    if(successSignup) {
    return (        
        <div className="row justify-content-center mt-4">
            <div className="col-sm-5 mb-3">
             <span className="text-info"> Congratulations! You are now registered with us!! Please Login. </span>
             </div>
        </div>
    )
    }
    else {
        return  (
     
            <>
            <div className="row justify-content-center mt-4">
                <div className="col-sm-5 mb-3">
                 <h3> SignUp</h3>
                </div>
            </div>
           {
            (emailInUse)
            ?
            <div className="row justify-content-center mt-4">
                <div className="col-sm-5 mb-3">
                  <span className="text-info"> Sorry,this email is already registered with us. Please signup with a different email address.</span>
                </div>
            </div>
            :
            <></>
            }
            <div className="row justify-content-center">
            <div className="col-sm-5 mb-3">
                <label for="" className="form-label">Name</label>
                <input
                onChange={changeHandler}
                    type="text"
                    className="form-control"
                    name="name"
                    id="name"
                    aria-describedby="helpId"
                    placeholder=""
                    minlength="4" maxlength="20"
                    required
                />
             </div>
             </div>
            <div className="row justify-content-center mt-1">
                <div className="col-sm-5 mb-3">
                    <label for="" className="form-label">email</label>
                    <input
                        onChange={changeHandler}
                        type="email"
                        name="email"
                        id=""
                        className="form-control"
                        placeholder=""
                        aria-describedby="helpId"
                    />
                 
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-sm-5 mb-3">
                    <label for="" className="form-label">Password</label>
                    <input
                        onChange={changeHandler}
                        type="password"
                        className="form-control"
                        name="password"
                        id=""
                        placeholder=""
                        minlength="4" maxlength="8"
                        required
                    />
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-sm-5 mb-3">
                    <label for="" className="form-label">Phone Number</label>
                    <input
                        onChange={changeHandler}
                        type="number"
                        className="form-control"
                        name="mobile"
                        id=""
                        placeholder=""
                    />
                </div>
            </div>
           
           <div className="row justify-content-center">
                <div className="col-sm-5 mb-3">
                   
                    <button onClick={submitHandler}
                        type="submit"
                        className="btn btn-primary"
                    >
                        SignUp
                    </button>
                   
                </div>
            </div>
            </>
        )
       
    }
}
export default Signup;
