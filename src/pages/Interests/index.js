import React, { useState, useEffect} from "react";
import { useSelector } from "react-redux";

import DashBoard from "./../../Components/DashBoard";
import WelcomeBanner from "./../../Components/WelcomeBanner/index";
import Search from "../../Components/Search";


import TableInterests from "./TableInterests";
import {  interest } from './../../redux/selectors';


function Roles() {
  const interestState = useSelector(interest);  
  const INTEREST = interestState.interests;
  const [initial, setInital] = useState(interestState.interests);

  useEffect(() => {
  }, [interestState])

  return (
    <DashBoard>
      <WelcomeBanner>
        <h1 className="text-2xl md:text-3xl text-gray-800 font-bold mb-1">
          Intereses 👋
        </h1>
      </WelcomeBanner>
      <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
        <Search placeholder="Buscar por nombre" data = {initial} setData ={setInital} initialData={INTEREST} />
      </div>
      <TableInterests  data={initial} />      
    </DashBoard>
  );
}

export default Roles;
