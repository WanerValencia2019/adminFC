/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import { listUsers } from '../../redux/selectors';

export default function UserServiceForm({ data, cancel, confirm }) {
    const userState = useSelector(listUsers).users;
    const [userId, setUserId] = useState(data?.userId || 0);
    const [userMatchId, setUserMatchId] = useState(data?.userMatchId || 0);
    const [matchedAt, setMatchedAt] = useState(data?.matchedAt || new Date().toISOString());
    const [matched, setMatched] = useState(data?.matched || false);

    // console.log(dateService)

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = data?.id || 0;
        confirm(id, userId, userMatchId, matched, matchedAt);
        cancel();
    };

    return (
        <div className="mt-10 sm:mt-0 lg">
            <div className="md:grid  md:gap-6 ">
                <div className="mt-5 md:mt-0 md:col-span-2 ">
                    <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">
                                Información de la coincidencia
                            </h3>
                            <p className="mt-1 text-sm text-gray-600">
                                Lorem ipsum laboris tempor officia minim eu consequat nisi ut
                                laborum fugiat.
                            </p>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="shadow overflow-hidden sm:rounded-md  p-3">
                            <div className="px-4 py-5 bg-white sm:p-6">
                                <div className="grid grid-cols-12 gap-2">
                                    <div className="col-span-6 sm:col-span-6">
                                        <label
                                            htmlFor="country"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Usuario
                                        </label>
                                        <select
                                            id="country"
                                            name="country"
                                            autoComplete="country"
                                            className=" form-select mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            value={userId}
                                            onChange={(e) => setUserId(e.target.value)}
                                        >
                                            {userState.map((user) => (
                                                <option key={user.username} value={user.id}>
                                                    {user.id} - {user.username}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col-span-6 sm:col-span-6 ">
                                        <label
                                            htmlFor="country"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Usuario emparejado
                                        </label>
                                        <select
                                            id="country"
                                            name="country"
                                            autoComplete="country"
                                            className="form-select mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            value={userMatchId}
                                            onChange={(e) => setUserMatchId(e.target.value)}
                                        >
                                            {userState.map((user) => (
                                                <option key={user.username} value={user.id}>
                                                    {user.id} - {user.username}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col-span-12 sm:col-span-6 mt-3">
                                        <label
                                            htmlFor="country"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Emparejado
                                        </label>
                                        <select
                                            id="country"
                                            name="country"
                                            autoComplete="country"
                                            className="mt-1  block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            value={matched}
                                            onChange={(e) => setMatched(Boolean(e.target.value))}
                                        >
                                            <option value>Si</option>
                                            <option value={false}>No</option>
                                        </select>
                                    </div>
                                    <div className="col-span-10 sm:col-span-12 mt-3">
                                        <label
                                            htmlFor="email-address"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Fecha del emparejamiento
                                        </label>
                                        <input
                                            type="datetime-local"
                                            name="dateService"
                                            id="dateService"
                                            autoComplete="dateService"
                                            className="form-input mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            value={matchedAt}
                                            onChange={(e) => setMatchedAt(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <button
                                    type="button"
                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-red-500 hover:bg-red-700  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-2"
                                    onClick={() => cancel()}
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    className="inline-flex justify-center py-2 px-4 border  shadow-sm text-lg font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Guardar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
