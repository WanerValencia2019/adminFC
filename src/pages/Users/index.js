import React, {useContext, useState} from "react";

import DashBoard from "./../../Components/DashBoard";
import WelcomeBanner from "./../../Components/WelcomeBanner/index";
import Search from "../../Components/Search";


import TableUsers from "../../Components/TableUsers";

import { UserContext } from "../../context/users/UserContext";

function Users() {
  
  const users = useContext(UserContext);
  const [initial, setInital] = useState(users.users);



  return (
    <DashBoard>
      <WelcomeBanner>
        <h1 className="text-2xl md:text-3xl text-gray-800 font-bold mb-1">
          Usuarios 👋
        </h1>
      </WelcomeBanner>
      <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
        <Search placeholder="Buscar por usuario" data = {initial} setData ={setInital} initialData={users.users} />
      </div>
      <TableUsers  data={initial} userContext={users} />      
    </DashBoard>
  );
}

export default Users;
