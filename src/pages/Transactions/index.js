import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import DashBoard from '../../Components/DashBoard';
import WelcomeBanner from '../../Components/WelcomeBanner/index';
import Search from '../../Components/Search';

import DataCRUD from '../../Components/DataCRUD';

import TransactionForm from '../../Components/TransactionForm';
import DeleteForm from './DeleteForm';

import { addTransaction, updateTransaction } from '../../redux/Transactions/transactions.actions';

import { transactions } from '../../redux/selectors';

import { formatValue } from '../../utils/Utils';

const columnsModel = [
    {
        name: 'Usuario',
        selector: (row) => row?.userId,
        sortable: true,
    },
    {
        name: 'Servicio',
        selector: (row) => row?.serviceId,
        sortable: true,
    },
    {
        name: 'Estado',
        selector: (row) => row?.status,
        sortable: true,
    },
    {
        name: 'Total',
        cell: (row) => <p>{formatValue(row?.total)}</p>,
        selector: (row) => row?.total,
        sortable: true,
    },
    {
        name: 'Metódo de pago',
        selector: (row) => row?.paymentTypeId,
        sortable: true,
    },
    {
        name: 'Fecha de creación',
        selector: (row) => row?.createdAt,
        sortable: true,
    },
];

function UserServices() {
    const transactionState = useSelector(transactions);
    const TRANSACTIONS = transactionState.transactions;
    const [searchData, setSearchData] = useState(transactionState.transactions);
    const dispatch = useDispatch();

    const handleSearch = (text) => {
        setSearchData((prev) =>
            prev.filter((u) => u.userId.toLowerCase().includes(text.toLowerCase())),
        );
    };

    useEffect(() => {
        setSearchData(transactionState.transactions);
    }, [transactionState.transactions]);

    const handleAddSubmit = (
        id,
        userId,
        serviceId,
        paymentTypeId,
        payInfo,
        status,
        total,
        paymentAt,
    ) => {
        dispatch(
            addTransaction({
                id,
                userId,
                serviceId,
                paymentTypeId,
                payInfo,
                status,
                total,
                paymentAt,
            }),
        );
    };
    const handleEditSubmit = (
        id,
        userId,
        serviceId,
        paymentTypeId,
        payInfo,
        status,
        total,
        paymentAt,
    ) => {
        dispatch(
            updateTransaction({
                id,
                userId,
                serviceId,
                paymentTypeId,
                payInfo,
                status,
                total,
                paymentAt,
            }),
        );
    };

    return (
        <DashBoard>
            <WelcomeBanner>
                <h1 className="text-2xl md:text-3xl text-gray-800 font-bold mb-1">Transacciones</h1>
            </WelcomeBanner>
            <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
                <Search
                    placeholder="Buscar por usuario"
                    handleSearch={handleSearch}
                    data={searchData}
                    setData={setSearchData}
                    initialData={TRANSACTIONS}
                />
            </div>
            <DataCRUD
                url="transactions"
                title="Transacciones"
                data={searchData}
                columns={columnsModel}
                form={TransactionForm}
                removeForm={DeleteForm}
                add={handleAddSubmit}
                update={handleEditSubmit}
            />
        </DashBoard>
    );
}

export default UserServices;
