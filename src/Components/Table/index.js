/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

import { TrashIcon, PencilAltIcon } from '@heroicons/react/outline';
import { PlusCircleIcon } from '@heroicons/react/solid';

import Pagination from '../Pagination';

import Modal from '../Modal';

// import "./styles.css";

// import DeleteForm from './DeleteForm';
// import UserForm from "./../../../Components/UserForm";

function TableUsers({ headers, data, form, removeForm, add, update, remove }) {
    const [showModal, setShowModal] = useState(false);

    const [selectedForm, setSelectedForm] = useState(null);

    const GetForm = form;
    const GetRemoveForm = removeForm;

    const handleDelete = (data) => {
        setSelectedForm(<GetRemoveForm cancel={() => setShowModal(false)} data={data} />);
        setShowModal((prev) => !prev);
    };
    const handleEdit = (data) => {
        setSelectedForm(
            <GetForm cancel={() => setShowModal(false)} data={data} confirm={update} />,
        );
        setShowModal((prev) => !prev);
    };
    const handleCreate = () => {
        setSelectedForm(<GetForm cancel={() => setShowModal(false)} confirm={add} />);
        setShowModal((prev) => !prev);
    };

    return (
        <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100  ">
                <div className="flex flex-column justify-between">
                    <h2 className="font-semibold text-gray-800 ">Usuarios</h2>
                    <PlusCircleIcon
                        onClick={() => handleCreate()}
                        className="h-10 w-10 text-blue-500 cursor-pointer"
                    />
                </div>
            </header>
            <div className="p-3">
                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                        {/* Table header */}
                        <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                {headers.map((value, i) => {
                                    return (
                                        <th key={value} className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">{value}</div>
                                        </th>
                                    );
                                })}
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Acciones</div>
                                </th>
                            </tr>
                        </thead>
                        {/* Table body */}
                        <tbody className="text-sm divide-y divide-gray-100">
                            {data &&
                                data.map((customer) => {
                                    return (
                                        <tr key={customer.id}>
                                            <td
                                                onClick={() => handleEdit(customer)}
                                                className="p-2 user whitespace-nowrap table-link"
                                            >
                                                <div className="flex items-center">
                                                    <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                                        <img
                                                            className="rounded-full"
                                                            src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y&s=128"
                                                            width="40"
                                                            height="40"
                                                            alt={customer.name}
                                                        />
                                                    </div>
                                                    <div className="font-medium text-green-500">
                                                        {customer.username}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-left">{customer.name}</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-left font-medium ">
                                                    {customer.lastName}
                                                </div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-medium text-gray-800">
                                                    {customer.email}
                                                </div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-medium text-gray-800">
                                                    {customer.createdAt}
                                                </div>
                                            </td>
                                            <td className="p-1 whitespace-nowrap">
                                                <div className="text-lg text-center flex flex-row">
                                                    <PencilAltIcon
                                                        onClick={() => handleEdit(customer)}
                                                        className="h-8 w-8 text-blue-500 cursor-pointer"
                                                    />
                                                    <TrashIcon
                                                        onClick={() => handleDelete(customer)}
                                                        className="h-8 w-8 text-red-600 cursor-pointer"
                                                    />
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                    {(!data || !data.length > 0) && (
                        <h4 className="text-center p-3">No hay usuarios disponibles</h4>
                    )}
                    <Modal show={showModal} closeModal={() => setShowModal(false)}>
                        {selectedForm}
                    </Modal>
                    <Pagination />
                </div>
            </div>
        </div>
    );
}

export default TableUsers;
