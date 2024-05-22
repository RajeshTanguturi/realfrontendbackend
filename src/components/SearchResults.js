import { useParams } from "react-router-dom";
import SearchResultsRow from "./SearchResultsRow";

const SearchResults = (props) => {
    let paramsObj = useParams();
    // get all houses, filter them by the county and store in array in state
    let filteredHousesArray =  props.allhouses.filter((house) => (house.county === paramsObj.county));
    // console.log(filteredHousesArray);
    return (  
        <div className="row">
            <h5> Search results for {paramsObj.county}</h5>
            {/* <h3> Selected county is {paramsObj.county}</h3> */}
            {/* bs5-table */}
            {/* Higher Order Component as it returns another component */}
            <div
                className="table-responsive"
            >
                <table
                    className="table table-primary"
                >
                    <thead>
                        <tr>
                            <th scope="col">Address</th>
                            <th scope="col">Price</th>
                            <th scope="col">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredHousesArray.map((filteredHouse) => {
                                    return (
                                        <SearchResultsRow key={filteredHouse._id} filteredHouse={filteredHouse}/>
                                    )
                            })
                        }                      
                       
                    </tbody>
                </table>
            </div>




        </div>
    );
}
 
export default SearchResults;
