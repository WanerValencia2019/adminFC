import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import DashBoard from '../../Components/DashBoard';
import WelcomeBanner from '../../Components/WelcomeBanner/index';
import Search from '../../Components/Search';

import { services } from '../../redux/selectors';

import DataCRUD from '../../Components/DataCRUD';
import ServicesForm from '../../Components/ServicesForm';

import DeleteForm from './DeleteForm';

import { addServices, updateServices } from '../../redux/Services/services.actions';

const columnsModel = [
    {
        name: 'Nombre',
        selector: (row) => row?.name,
        sortable: true,
    },
    {
        name: 'Descripción',
        selector: (row) => row?.description,
        sortable: true,
    },
    {
        name: 'Fecha de creación',
        selector: (row) => row?.createdAt,
        sortable: true,
    },
];

function Services() {
    const serviceState = useSelector(services);
    const SERVICES = serviceState.services;
    const [searchData, setSearchData] = useState(serviceState.services);
    const dispatch = useDispatch();

    const handleSearch = useMemo(
        () => (text) => {
            setSearchData((prev) =>
                prev.filter((u) => u.name.toLowerCase().includes(text.toLowerCase())),
            );
        },
        [searchData],
    );
    const handleAddSubmit = (id = 0, name, description) => {
        dispatch(addServices({ id, name, description }));
    };
    const handleEditSubmit = (id, name, description) => {
        dispatch(updateServices({ id, name, description }));
    };

    useEffect(() => {
        setSearchData(serviceState.services);
    }, [serviceState.services]);

    return (
        <DashBoard>
            <WelcomeBanner>
                <h1 className="text-2xl md:text-3xl text-gray-800 font-bold mb-1">Servicios</h1>
            </WelcomeBanner>
            <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
                <Search
                    placeholder="Buscar por nombre"
                    handleSearch={handleSearch}
                    data={searchData}
                    setData={setSearchData}
                    initialData={SERVICES}
                />
            </div>
            <DataCRUD
                title="Servicios"
                data={searchData}
                columns={columnsModel}
                form={ServicesForm}
                removeForm={DeleteForm}
                add={handleAddSubmit}
                update={handleEditSubmit}
            />
        </DashBoard>
    );
}

export default Services;
