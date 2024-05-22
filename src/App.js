
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import House from './components/House';
import { Route, Routes } from 'react-router-dom';
import SearchFilter from './components/SearchFilter';
import SearchResults from './components/SearchResults';
import SearchedHouse from './components/SearchedHouse';
import Login from "./components/Login";
import Signup from "./components/Signup";
import axios from 'axios';
import Enquiries from './components/Enquires';
import PageNotFound from './components/PageNotFount';
function App() {


  let [housesData,setHousesData] = useState([]);


  // get the data here, using fetch
  //async await with fetch and get json
  // console.log to check if data is correct


  useEffect( ()=>{
    let fetchdata = async () =>{
      //read from houses.json from public folder
        // let response = await fetch("/houses.json");
       // let data = await response.json();


      //read from backend server
      let response = await axios.get("http://localhost:5000/api/");
      let data = response.data;//backend return object,so not response.json()


      // console.log(data);
      setHousesData(data);
    }
    fetchdata();
  },[]);

  return (
    <div className="container-fluid bg-secondary text-white">
        <Header/>
        <SearchFilter allhouses={housesData} />


        <Routes>
          <Route path="/" element={<House houseInfo={housesData[7]} />} />
          {/* <Route path="/" element={<House/>} />  will display loading... */}
          <Route path="searchresults/:county" element= {<SearchResults allhouses={housesData} />} />
          <Route path="searchedhouse" element= {<SearchedHouse/>} />
          <Route path="login" element= {<Login/>} />
          <Route path="signup" element= {<Signup/>} />
          <Route path="enquiries" element= {<Enquiries/>} />
          <Route path="*" element= {<PageNotFound/>} />
         </Routes>        
        <Footer/>
    </div>
  );
}


export default App;

