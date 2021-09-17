import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import DashBoard from '../../Components/DashBoard';
import WelcomeBanner from '../../Components/WelcomeBanner/index';
import Search from '../../Components/Search';

import DataCRUD from '../../Components/DataCRUD';
import { matchs } from '../../redux/selectors';

import MatchForm from '../../Components/MatchForm';

import DeleteForm from './DeleteForm';

import { addMatch, updateMatch } from '../../redux/Matchs/matchs.actions';

const columnsModel = [
    {
        name: 'Usuario',
        selector: (row) => row?.userId,
        sortable: true,
    },
    {
        name: 'Usuario emparejado',
        selector: (row) => row?.userMatchId,
        sortable: true,
    },
    {
        name: 'Coincidencia',
        selector: (row) => row?.matchedText,
        sortable: true,
        conditionalCellStyles: [
            {
                when: (row) => row.matched === true,
                classNames: ['text-green-400'],
            },
            {
                when: (row) => row.matched === false,
                classNames: ['text-red-500'],
            },
        ],
    },
    {
        name: 'Fecha de emparejamiento',
        selector: (row) => row?.matchedAt,
        sortable: true,
    },
    {
        name: 'Fecha de creación',
        selector: (row) => row?.createdAt,
        sortable: true,
    },
];

export default function Matchs() {
    const matchState = useSelector(matchs);
    const MATCHS = matchState.matchs;
    const [searchData, setSearchData] = useState(matchState.matchs);
    const dispatch = useDispatch();

    const handleSearch = () => (text) => {
        setSearchData((prev) => prev.filter((u) => u.userId === text));
    };

    const handleAddSubmit = (id, userId, userMatchId, matched, matchedAt) => {
        dispatch(addMatch({ id, userId, userMatchId, matched, matchedAt }));
    };
    const handleEditSubmit = (id, userId, userMatchId, matched, matchedAt) => {
        dispatch(updateMatch({ id, userId, userMatchId, matched, matchedAt }));
    };

    useEffect(() => {
        setSearchData(matchState.matchs);
    }, [matchState.matchs]);

    return (
        <DashBoard>
            <WelcomeBanner>
                <h1 className="text-2xl md:text-3xl text-gray-800 font-bold mb-1">Coincidencias</h1>
            </WelcomeBanner>
            <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
                <Search
                    placeholder="Buscar por usuario"
                    handleSearch={handleSearch}
                    data={searchData}
                    setData={setSearchData}
                    initialData={MATCHS}
                />
            </div>
            <DataCRUD
                title="Metódos de pago"
                data={searchData}
                columns={columnsModel}
                form={MatchForm}
                removeForm={DeleteForm}
                add={handleAddSubmit}
                update={handleEditSubmit}
            />
        </DashBoard>
    );
}
