import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import DashBoard from '../../Components/DashBoard';
import WelcomeBanner from '../../Components/WelcomeBanner/index';
import Search from '../../Components/Search';

import DataCRUD from '../../Components/DataCRUD';
import { interest } from '../../redux/selectors';

import InterestForm from '../../Components/InterestForm';
import DeleteForm from './DeleteForm';

import { addInterest, updateInterest } from '../../redux/Interests/interests.actions';

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
        name: 'Estado',
        selector: (row) => row?.statusText,
        sortable: true,
        conditionalCellStyles: [
            {
                when: (row) => row.status === true,
                classNames: ['text-green-400'],
            },
            {
                when: (row) => row.status === false,
                classNames: ['text-red-500'],
            },
        ],
    },
    {
        name: 'Fecha de creación',
        selector: (row) => row?.createdAt,
        sortable: true,
    },
];

export default function Interest() {
    const interestState = useSelector(interest);
    const INTEREST = interestState.interests;
    const [searchData, setSearchData] = useState(interestState.interests);

    const dispatch = useDispatch();

    const handleAddSubmit = (id = 0, name, description, status) => {
        dispatch(addInterest({ id, name, description, status }));
    };
    const handleEditSubmit = (id, name, description, status) => {
        dispatch(updateInterest({ id, name, description, status }));
    };
    const handleSearch = (text) => {
        setSearchData((prev) =>
            prev.filter((u) => u.name.toLowerCase().includes(text.toLowerCase())),
        );
    };

    useEffect(() => {
        setSearchData(interestState.interests);
    }, [interestState.interests]);

    return (
        <DashBoard>
            <WelcomeBanner>
                <h1 className="text-2xl md:text-3xl text-gray-800 font-bold mb-1">Intereses 👋</h1>
            </WelcomeBanner>
            <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
                <Search
                    placeholder="Buscar por nombre"
                    handleSearch={handleSearch}
                    data={searchData}
                    setData={setSearchData}
                    initialData={INTEREST}
                />
            </div>
            <DataCRUD
                url="interests"
                title="Intereses"
                data={searchData}
                columns={columnsModel}
                form={InterestForm}
                removeForm={DeleteForm}
                add={handleAddSubmit}
                update={handleEditSubmit}
            />
        </DashBoard>
    );
}
