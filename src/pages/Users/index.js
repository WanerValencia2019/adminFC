import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import DashBoard from '../../Components/DashBoard';
import WelcomeBanner from '../../Components/WelcomeBanner/index';
import Search from '../../Components/Search';

import Table from '../../Components/Table';

import UserForm from '../../Components/UserForm';
import DeleteForm from './DeleteForm';

import { listUsers } from '../../redux/selectors';
import { addUser, updateUser } from '../../redux/Users/users.actions';

function Users() {
    const userState = useSelector(listUsers);
    const tableHeaders = [
        'usuario',
        'nombre',
        'apellidos',
        'correo electrónico',
        'fecha de creación',
    ];
    const { users } = userState;
    const [searchData, setSearchData] = useState(userState.users);
    const dispatch = useDispatch();

    const handleSearch = (text) => {
        setSearchData((prev) =>
            prev.filter((u) => u.username.toLowerCase().includes(text.toLowerCase())),
        );
    };

    const handleAddSubmit = (id = 0, name, lastName, email, description) => {
        dispatch(addUser(id, name, lastName, email, description));
    };

    const handleEditSubmit = (id, name, lastName, email, description) => {
        dispatch(updateUser(id, name, lastName, email, description));
    };

    useEffect(() => {}, [userState]);

    return (
        <DashBoard>
            <WelcomeBanner>
                <h1 className="text-2xl md:text-3xl text-gray-800 font-bold mb-1">Usuarios 👋</h1>
            </WelcomeBanner>
            <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
                <Search
                    placeholder="Buscar por usuario"
                    handleSearch={handleSearch}
                    data={searchData}
                    setData={setSearchData}
                    initialData={users}
                    u
                />
            </div>
            <Table
                headers={tableHeaders}
                data={searchData}
                form={UserForm}
                removeForm={DeleteForm}
                add={handleAddSubmit}
                update={handleEditSubmit}
            />
        </DashBoard>
    );
}

export default Users;
