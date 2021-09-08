import React, {useState, useEffect} from "react";

import DashBoard from "./../../Components/DashBoard";
import WelcomeBanner from "./../../Components/WelcomeBanner/index";
import Search from "../../Components/Search";


import TableUsers from "../../Components/TableUsers";


import { useSelector } from "react-redux";

import { listUsers } from './../../redux/selectors';


function Users() {
  const userState = useSelector(listUsers);  
  const users = userState.users;
  const [initial, setInital] = useState(userState.users);

  useEffect(() => {
  }, [userState])

  return (
    <DashBoard>
      <WelcomeBanner>
        <h1 className="text-2xl md:text-3xl text-gray-800 font-bold mb-1">
          Usuarios 👋
        </h1>
      </WelcomeBanner>
      <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
        <Search placeholder="Buscar por usuario" data = {initial} setData ={setInital} initialData={users} />
      </div>
      <TableUsers  data={initial} userContext={users} />      
    </DashBoard>
  );
}

export default Users;
