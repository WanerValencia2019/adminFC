import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import DashBoard from '../../Components/DashBoard';
import WelcomeBanner from '../../Components/WelcomeBanner/index';
import Search from '../../Components/Search';

import DataCRUD from '../../Components/DataCRUD';

import StateServiceForm from '../../Components/StateServiceForm';
import DeleteForm from './DeleteForm';

import { stateServices } from '../../redux/selectors';

import {
    addStateServices,
    updateStateServices,
} from '../../redux/StateServices/stateServices.actions';

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

function StateServices() {
    const stateSV = useSelector(stateServices);
    const STATES = stateSV.states;
    const [searchData, setSearchData] = useState(stateSV.states);
    const dispatch = useDispatch();

    const handleSearch = (text) => {
        setSearchData((prev) =>
            prev.filter((u) => u.name.toLowerCase().includes(text.toLowerCase())),
        );
    };
    const handleAddSubmit = (id = 0, name, description) => {
        dispatch(addStateServices({ id, name, description }));
    };
    const handleEditSubmit = (id, name, description) => {
        dispatch(updateStateServices({ id, name, description }));
    };
    useEffect(() => {
        setSearchData(stateSV.states);
    }, [stateSV.states]);

    return (
        <DashBoard>
            <WelcomeBanner>
                <h1 className="text-2xl md:text-3xl text-gray-800 font-bold mb-1">
                    Estados de servicio
                </h1>
            </WelcomeBanner>
            <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
                <Search
                    placeholder="Buscar por nombre"
                    handleSearch={handleSearch}
                    data={searchData}
                    setData={setSearchData}
                    initialData={STATES}
                />
            </div>
            <DataCRUD
                title="Estados del servicio"
                data={searchData}
                columns={columnsModel}
                form={StateServiceForm}
                removeForm={DeleteForm}
                add={handleAddSubmit}
                update={handleEditSubmit}
            />
        </DashBoard>
    );
}

export default StateServices;
