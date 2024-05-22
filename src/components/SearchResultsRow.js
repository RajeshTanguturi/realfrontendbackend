import { useNavigate } from "react-router-dom";


const SearchResultsRow = (props) => {


    let navigate = useNavigate();
    let clickHandler = () => {
        // console.log("clicked row ");
        navigate('/searchedhouse',{state:{searchedHouse:props.filteredHouse }});
    }


    return (  
        <tr onClick={clickHandler}  className="" key ={props.filteredHouse._id} >
            <td scope="row">{props.filteredHouse.address}</td>
            <td>{props.filteredHouse.price}</td>
            <td>{props.filteredHouse.description}</td>
        </tr>
    );
}
 
export default SearchResultsRow;