import { useNavigate } from "react-router-dom";
const SearchFilter = (props) => {
    let navigate = useNavigate();
    /*get unique counties and keep them ready to be mapped in return*/
    //get all houses
    // console.log(props.allhouses);
    // get all counties
    let countyArrayWithDuplicates = props.allhouses.map( elem => elem.county);
    // console.log(countyArrayWithDuplicates);
    //remove duplicates from an array using set and convert it back to array
    let distinctCountiesArr = Array.from( new Set(countyArrayWithDuplicates))
    // console.log(distinctCountiesArr);

    // event handling , synthetic event e
    let changeCountyHandler = (e) => {
        // // console.log(" county picked/changed");
        // console.log(e.target.value);// from event get target (the HTML Element) and get its value
        let county = e.target.value;
        navigate('searchresults/'+county);
    }
    // // bs5-form-select-custom
    return (
        <div className="row justify-content-center">
            <div className="col-sm-5">    
                <select
                    className="form-select form-select-sm"
                    name=""
                    id=""
                    onChange={changeCountyHandler}
                >
                    <option >Search By County</option>
                    {
                        distinctCountiesArr.map( (elem) => {
                           return <option key= {elem} value={elem}>{elem}</option>
                        })
                    }                    
                </select>
            </div>
           
        </div>
     );
}
 
export default SearchFilter;
