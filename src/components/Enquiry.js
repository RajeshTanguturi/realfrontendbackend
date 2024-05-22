import axios from "axios";
import { useState } from "react";


const Enquiry = (props) => {


    let [submittedEnq,setSubmittedEnq] = useState(false);
    let [couldNotSubmit,setCouldNotSubmit] = useState(false);


    // Form Handling
        // onChangeHandler -set the form object in state
        // submitHandler -
                    // e.preventDefault ,
                    // get the state object,
                    // send it to backend to store
                    // display message on storing the enquiry


    let [enqObj, setEnqObj] = useState({ename:"",email:"",remarks:"",eaddress:props.eaddress});
    let changeHandler = (e) => {
        setEnqObj({...enqObj,[e.target.name]:e.target.value,});        
        console.log(enqObj);
    }
       
    let submitHandler= async (e) =>{
        e.preventDefault();
        try{
            let response = await axios.post(process.env.REACT_APP_BACKEND_URL+'register',{...enqObj})
            if(response.status == 200) {
                // console.log(response);
                setSubmittedEnq(true)
            }
            else {
                console.log("in else");
                setCouldNotSubmit(true);
               // setCouldNotSubmitMsg(" Sorry, we could not submit your enquiry, please try later.");
            }
        }
        catch{
            console.log("in else");
            setCouldNotSubmit(true);   }      


    }


    if( submittedEnq) {
    return (
    <div className="mb-3 mt-3">
                <h6 className="text-info"> Thanks for enquiring about the house! Our realtor will get back to you soon!</h6>
    </div>
    )
    }
    else  {
        return (
        <div>
            <h3> Enquiry!</h3>    
            {
            (couldNotSubmit)
            ?
            <div className="mb-3 mt-3">
                <h6 className="text-danger"> Sorry, we could not submit your enquiry, please try after some time.</h6>
            </div>
            :
            <></>
            }
            <div className="mb-3">
                <label for="" className="form-label">Name</label>
                <input
                    onChange={changeHandler}
                    type="text"
                    className="form-control"
                    name="ename"
                    id=""
                    aria-describedby="helpId"
                    placeholder=""
                />
                   </div>
           
            <div className="mb-3">
                <label for="" className="form-label">Email</label>
                <input
                    onChange={changeHandler}
                    type="email"
                    className="form-control"
                    name="email"
                    id=""
                    aria-describedby="emailHelpId"
                    placeholder="abc@mail.com"
                />
         
            </div>
           
            <div className="mb-3">
                <label for="" className="form-label">Remarks</label>
                <input
                    onChange={changeHandler}
                    type="text"
                    className="form-control"
                    name="remarks"
                    id=""
                    aria-describedby="helpId"
                    placeholder=""
                />
            </div>
           
            <button onClick={submitHandler}
                type="submit"
                className="btn btn-primary"
            >
                Submit
            </button>
           








        </div>
     );
    }
}
 
export default Enquiry;
