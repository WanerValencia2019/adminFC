/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-shadow */
import React, { useState } from 'react';

import { TrashIcon, PencilAltIcon } from '@heroicons/react/outline';
import { PlusCircleIcon } from '@heroicons/react/solid';
import { useDispatch } from 'react-redux';

import Pagination from '../../../Components/Pagination';

import Modal from '../../../Components/Modal';

import MatchForm from '../../../Components/MatchForm';

import DeleteForm from './DeleteForm';

import { addMatch, updateMatch } from '../../../redux/Matchs/matchs.actions';

export default function TableMatchs({ data }) {
    const [showModal, setShowModal] = useState(false);

    const dispatch = useDispatch();

    const [form, setForm] = useState(null);

    const handleAddSubmit = (id, userId, userMatchId, matched, matchedAt) => {
        dispatch(addMatch({ id, userId, userMatchId, matched, matchedAt }));
    };
    const handleEditSubmit = (id, userId, userMatchId, matched, matchedAt) => {
        dispatch(updateMatch({ id, userId, userMatchId, matched, matchedAt }));
    };

    const renderEditModal = (user) => (
        <MatchForm data={user} cancel={() => setShowModal(false)} confirm={handleEditSubmit} />
    );
    const renderDeleteModal = (data) => (
        <DeleteForm cancel={() => setShowModal(false)} data={data} />
    );

    const handleEdit = (data) => {
        setForm(renderEditModal(data));
        setShowModal((prev) => !prev);
    };
    const handleDelete = (data) => {
        setForm(renderDeleteModal(data));
        setShowModal((prev) => !prev);
    };
    const handleCreate = () => {
        setForm(<MatchForm cancel={() => setShowModal(false)} confirm={handleAddSubmit} />);
        setShowModal((prev) => !prev);
    };

    return (
        <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100  ">
                <div className="flex flex-column justify-between">
                    <h2 className="font-semibold text-gray-800 ">Coincidencias</h2>
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
                        <thead className="text-xs text-center font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold ">Usuario</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold ">Usuario emparejado</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold ">Coincidencia</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold ">Fecha de emparejamiento</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold ">Fecha de creación</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold ">Acciones</div>
                                </th>
                            </tr>
                        </thead>
                        {/* Table body */}
                        <tbody className="text-sm divide-y divide-gray-100">
                            {data &&
                                data.map((match) => {
                                    return (
                                        <tr key={match.id} className="text-center">
                                            <td
                                                onClick={() => handleEdit(match)}
                                                className="p-2 whitespace-nowrap"
                                            >
                                                <p className="text-green-700 text-center table-link">
                                                    {match.userId}
                                                </p>
                                            </td>
                                            <td className="p-2 max-w-md whitespace-nowrap">
                                                <p className="font-medium truncate">
                                                    {match.userMatchId}
                                                </p>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-medium text-gray-800">
                                                    {match.matched ? (
                                                        <p className="text-green-400">SI</p>
                                                    ) : (
                                                        <p className="text-red-400">NO</p>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-medium text-gray-800">
                                                    {match.matchedAt}
                                                </div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="font-medium text-gray-800">
                                                    {match.createdAt}
                                                </div>
                                            </td>
                                            <td className="whitespace-nowrap">
                                                <div className="text-lg  flex flex-row justify-center">
                                                    <PencilAltIcon
                                                        onClick={() => handleEdit(match)}
                                                        className="h-8 w-8 text-blue-500 cursor-pointer"
                                                    />
                                                    <TrashIcon
                                                        onClick={() => handleDelete(match)}
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
                        {form}
                    </Modal>
                    <Pagination />
                </div>
            </div>
        </div>
    );
}
