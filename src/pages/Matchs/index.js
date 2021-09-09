import React, { useState, useEffect} from "react";
import { useSelector } from "react-redux";

import DashBoard from "./../../Components/DashBoard";
import WelcomeBanner from "./../../Components/WelcomeBanner/index";
import Search from "../../Components/Search";


import TableMatchs from "./TableMatchs";
import {  matchs } from './../../redux/selectors';


export default function Matchs() {
  const matchState = useSelector(matchs);  
  const MATCHS = matchState.matchs;
  const [searchData, setSearchData] = useState(matchState.matchs);

  const handleSearch = (text) => {
      setSearchData((prev)=>prev.filter((u)=>u.userId.toLowerCase().includes(text.toLowerCase())));
  }

  useEffect(() => {
  }, [matchState])

  return (
    <DashBoard>
      <WelcomeBanner>
        <h1 className="text-2xl md:text-3xl text-gray-800 font-bold mb-1">
          Coincidencias
        </h1>
      </WelcomeBanner>
      <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
        <Search placeholder="Buscar por usuario" handleSearch={handleSearch} data = {searchData} setData ={setSearchData} initialData={MATCHS} />
      </div>
      <TableMatchs  data={searchData} />      
    </DashBoard>
  );
}


