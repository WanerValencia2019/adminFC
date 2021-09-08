import React, { useState, useEffect} from "react";
import { useSelector } from "react-redux";

import DashBoard from "./../../Components/DashBoard";
import WelcomeBanner from "./../../Components/WelcomeBanner/index";
import Search from "../../Components/Search";


import TableRoles from "./TableRoles";



import {  roles } from './../../redux/selectors';


function Roles() {
  const roleState = useSelector(roles);  
  const ROLES = roleState.roles;
  const [initial, setInital] = useState(roleState.roles);

  useEffect(() => {
  }, [roleState])

  return (
    <DashBoard>
      <WelcomeBanner>
        <h1 className="text-2xl md:text-3xl text-gray-800 font-bold mb-1">
          Roles 👋
        </h1>
      </WelcomeBanner>
      <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
        <Search placeholder="Buscar por usuario" data = {initial} setData ={setInital} initialData={ROLES} />
      </div>
      <TableRoles  data={initial} />      
    </DashBoard>
  );
}

export default Roles;
