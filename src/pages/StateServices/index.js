import React, { useState, useEffect} from "react";
import { useSelector } from "react-redux";

import DashBoard from "./../../Components/DashBoard";
import WelcomeBanner from "./../../Components/WelcomeBanner/index";
import Search from "../../Components/Search";


import TableStateServices from "./TableStateServices";
import {  stateServices } from './../../redux/selectors';


function StateServices() {
  const stateSV = useSelector(stateServices);  
  const STATES = stateSV.states;
   const [searchData, setSearchData] = useState(stateSV.states);

    const handleSearch = (text) => {
      setSearchData((prev)=>prev.filter((u)=>u.name.toLowerCase().includes(text.toLowerCase())));
    }



  useEffect(() => {
  }, [stateSV])

  return (
    <DashBoard>
      <WelcomeBanner>
        <h1 className="text-2xl md:text-3xl text-gray-800 font-bold mb-1">
          Estados de servicio
        </h1>
      </WelcomeBanner>
      <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
        <Search placeholder="Buscar por nombre" handleSearch={handleSearch} data = {searchData} setData ={setSearchData} initialData={STATES} />
      </div>
      <TableStateServices  data={searchData} />      
    </DashBoard>
  );
}

export default StateServices;
