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
  const [initial, setInital] = useState(serviceState.services);


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
        <Search placeholder="Buscar por nombre" data = {initial} setData ={setInital} initialData={SERVICES} />
      </div>
      <TableServices  data={initial} />      
    </DashBoard>
  );
}

export default Services;
