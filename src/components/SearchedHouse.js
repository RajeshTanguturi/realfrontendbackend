import { useLocation } from "react-router-dom";
import House from "./House";


const SearchedHouse = () => {
    //supposed to display a house based on an id


    let loca = useLocation();
    // console.log(loca.state.searchedHouse);


    return (
        <>
        <h4> Searched House!</h4>
        <House showEnquiry={(sessionStorage.getItem("rloggedin")=="true") ? true : false}  houseInfo={loca.state.searchedHouse} />
        </>
     );
}
 
export default SearchedHouse;