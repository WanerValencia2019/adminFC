import React, {useContext, useState} from "react";

import DashBoard from "./../../Components/DashBoard";
import WelcomeBanner from "./../../Components/WelcomeBanner/index";
import Search from "../../Components/Search";


import TableUsers from "../../Components/TableUsers";

import { UserContext } from "../../context/users/UserContext";
import { useSelector } from "react-redux";


function Users() {
  const users = useContext(UserContext);
  const userState = useSelector((state)=>state.user);
  const [initial, setInital] = useState(userState.users);

  return (
    <DashBoard>
      <WelcomeBanner>
        <h1 className="text-2xl md:text-3xl text-gray-800 font-bold mb-1">
          Usuarios 👋
        </h1>
      </WelcomeBanner>
      <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
        <Search placeholder="Buscar por usuario" data = {initial} setData ={setInital} initialData={userState.users} />
      </div>
      <TableUsers  data={initial} userContext={users} />      
    </DashBoard>
  );
}

export default Users;
