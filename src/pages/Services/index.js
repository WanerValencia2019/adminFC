import React, { useState, useEffect} from "react";
import { useSelector } from "react-redux";

import DashBoard from "./../../Components/DashBoard";
import WelcomeBanner from "./../../Components/WelcomeBanner/index";
import Search from "../../Components/Search";


import TableServices from "./TableServices";
import {  services } from './../../redux/selectors';


function Services() {
  const serviceState = useSelector(services);  
  const SERVICES = serviceState.services;
  const [searchData, setSearchData] = useState(serviceState.services);

    const handleSearch = (text) => {
      setSearchData((prev)=>prev.filter((u)=>u.name.toLowerCase().includes(text.toLowerCase())));
    }

  useEffect(() => {
  }, [serviceState])

  return (
    <DashBoard>
      <WelcomeBanner>
        <h1 className="text-2xl md:text-3xl text-gray-800 font-bold mb-1">
          Servicios 
        </h1>
      </WelcomeBanner>
      <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
        <Search placeholder="Buscar por nombre"handleSearch={handleSearch} handleSearch={handleSearch} data = {searchData} setData ={setSearchData} initialData={SERVICES} />
      </div>
      <TableServices  data={searchData} />      
    </DashBoard>
  );
}

export default Services;
