import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import DashBoard from '../../Components/DashBoard';
import WelcomeBanner from '../../Components/WelcomeBanner/index';
import Search from '../../Components/Search';

import DataCRUD from '../../Components/DataCRUD';

import UserServicesForm from '../../Components/UserServicesForm';
import DeleteForm from './DeleteForm';

import { addUserServices, updateUserServices } from '../../redux/UserServices/userServices.actions';

import { userServices } from '../../redux/selectors';

import { formatValue } from '../../utils/Utils';

const columnsModel = [
    {
        name: 'Usuario',
        selector: (row) => row?.userId,
        sortable: true,
    },
    {
        name: 'Servicio',
        selector: (row) => row?.servicesId,
        sortable: true,
    },
    {
        name: 'Estado',
        selector: (row) => row?.stateServiceId,
        sortable: true,
    },
    {
        name: 'Valor',
        cell: (row) => <td>{formatValue(row?.value)}</td>,
        selector: (row) => row?.value,
        sortable: true,
    },
    {
        name: 'Fecha',
        selector: (row) => row?.dateService,
        sortable: true,
    },
    {
        name: 'Fecha de creación',
        selector: (row) => row?.createdAt,
        sortable: true,
    },
];

function UserServices() {
    const userServiceState = useSelector(userServices);
    const USER_SERVICES = userServiceState.services;
    const [searchData, setSearchData] = useState(userServiceState.services);
    const dispatch = useDispatch();

    const handleSearch = (text) => {
        setSearchData((prev) =>
            prev.filter((u) => u.userId.toLowerCase().includes(text.toLowerCase())),
        );
    };

    useEffect(() => {
        setSearchData(userServiceState.services);
    }, [userServiceState.services]);

    const handleAddSubmit = (
        id,
        userId,
        stateServiceId,
        servicesId,
        value,
        description,
        dateService,
    ) => {
        dispatch(
            addUserServices({
                id,
                userId,
                stateServiceId,
                servicesId,
                value,
                description,
                dateService,
            }),
        );
    };
    const handleEditSubmit = (
        id,
        userId,
        stateServiceId,
        servicesId,
        value,
        description,
        dateService,
    ) => {
        dispatch(
            updateUserServices({
                id,
                userId,
                stateServiceId,
                servicesId,
                value,
                description,
                dateService,
            }),
        );
    };

    return (
        <DashBoard>
            <WelcomeBanner>
                <h1 className="text-2xl md:text-3xl text-gray-800 font-bold mb-1">
                    Servicios de usuarios
                </h1>
            </WelcomeBanner>
            <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
                <Search
                    placeholder="Buscar por usuario"
                    handleSearch={handleSearch}
                    data={searchData}
                    setData={setSearchData}
                    initialData={USER_SERVICES}
                />
            </div>
            <DataCRUD
                url="users"
                title="Servicios de usuarios"
                data={searchData}
                columns={columnsModel}
                form={UserServicesForm}
                removeForm={DeleteForm}
                add={handleAddSubmit}
                update={handleEditSubmit}
            />
        </DashBoard>
    );
}

export default UserServices;
