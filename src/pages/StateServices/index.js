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
  const [initial, setInital] = useState(stateSV.states);


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
        <Search placeholder="Buscar por nombre" data = {initial} setData ={setInital} initialData={STATES} />
      </div>
      <TableStateServices  data={initial} />      
    </DashBoard>
  );
}

export default StateServices;
