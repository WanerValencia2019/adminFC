import React, { useState, useEffect} from "react";
import { useSelector } from "react-redux";

import DashBoard from "./../../Components/DashBoard";
import WelcomeBanner from "./../../Components/WelcomeBanner/index";
import Search from "../../Components/Search";


import TableUserServices from "./TableUserServices";
import {  userServices } from './../../redux/selectors';


function UserServices() {
  const userServiceState = useSelector(userServices);  
  const USER_SERVICES = userServiceState.services;
  const [initial, setInital] = useState(userServiceState.services);


  useEffect(() => {
  }, [userServiceState])

  return (
    <DashBoard>
      <WelcomeBanner>
        <h1 className="text-2xl md:text-3xl text-gray-800 font-bold mb-1">
          Servicios de usuarios
        </h1>
      </WelcomeBanner>
      <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
        <Search placeholder="Buscar por nombre" data = {initial} setData ={setInital} initialData={USER_SERVICES} />
      </div>
      <TableUserServices  data={initial} />      
    </DashBoard>
  );
}

export default UserServices;