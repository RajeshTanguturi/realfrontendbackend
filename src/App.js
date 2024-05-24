import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import House from "./components/House";
import { Route, Routes } from "react-router-dom";
import SearchFilter from "./components/SearchFilter";
import SearchResults from "./components/SearchResults";
import SearchedHouse from "./components/SearchedHouse";
import Login from "./components/Login";
import Signup from "./components/Signup";
import axios from "axios";
import Enquiries from "./components/Enquires";
import PageNotFound from "./components/PageNotFount";

function App() {
  let [housesData, setHousesData] = useState([]);

  // get the data here, using fetch
  //async await with fetch and get json
  // console.log to check if data is correct

  useEffect(() => {
    let fetchdata = async () => {
      try{
        console.log(process.env.REACT_APP_BACKEND_URL);
        console.log(process.env.BURL);

      //read from backend server
      let response = await axios.get(process.env.REACT_APP_BACKEND_URL);
      let data = response.data;
      setHousesData(data);
      }catch(err){
        console.error("error fetching data:",err);
      }
    };
    fetchdata();
  }, []);

  return (
    <div className="container-fluid bg-secondary text-white">
      <Header />
      <SearchFilter allhouses={housesData} />

      <Routes>
        <Route path="/" element={<House houseInfo={housesData[7]} />} />
        {/* <Route path="/" element={<House/>} />  will display loading... */}
        <Route
          path="searchresults/:county"
          element={<SearchResults allhouses={housesData} />}
        />
        <Route path="searchedhouse" element={<SearchedHouse />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="enquiries" element={<Enquiries />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
