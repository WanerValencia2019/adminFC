import React, { useState, useEffect} from "react";
import { useSelector } from "react-redux";

import DashBoard from "./../../Components/DashBoard";
import WelcomeBanner from "./../../Components/WelcomeBanner/index";
import Search from "../../Components/Search";


import TablePaymentTypes from "./TablePaymentTypes";
import {  paymentTypes } from './../../redux/selectors';


export default function PaymentTypes() {
  const paymentTypeState = useSelector(paymentTypes);  
  const PAYMENT_TYPES = paymentTypeState.types;
  const [searchData, setSearchData] = useState(paymentTypeState.types);

  const handleSearch = (text) => {
      setSearchData((prev)=>prev.filter((u)=>u.name.toLowerCase().includes(text.toLowerCase())));
  }

  useEffect(() => {
  }, [paymentTypeState])

  return (
    <DashBoard>
      <WelcomeBanner>
        <h1 className="text-2xl md:text-3xl text-gray-800 font-bold mb-1">
          Metódos de pago 👋
        </h1>
      </WelcomeBanner>
      <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
        <Search placeholder="Buscar por nombre" handleSearch={handleSearch} data = {searchData} setData ={setSearchData} initialData={PAYMENT_TYPES} />
      </div>
      <TablePaymentTypes  data={searchData} />    
    </DashBoard>
  );
}


