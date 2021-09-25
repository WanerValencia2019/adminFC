/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';

import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { listUsers } from '../../redux/selectors';

export default function UserServiceForm({ data, register, errors }) {
    const userState = useSelector(listUsers).users;

    return (
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
                            defaultValue={data?.userId || userState[0]?.id || 0}
                            {...register('userId', {
                                required: {
                                    value: true,
                                    message: 'Este campo es requerido',
                                },
                            })}
                        >
                            {userState.map((user) => (
                                <option key={user.username} value={user.id}>
                                    {user.id} - {user.username}
                                </option>
                            ))}
                        </select>
                    </div>
                    {errors.userId && (
                        <p className="text-red-700  text-xs -mt-2 col-span-10 sm:col-span-10">
                            {errors.userId.message}
                        </p>
                    )}
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
                            defaultValue={data?.userMatchId || userState[0]?.id || 0}
                            {...register('userMatchId', {
                                required: {
                                    value: true,
                                    message: 'Este campo es requerido',
                                },
                            })}
                        >
                            {userState.map((user) => (
                                <option key={user.username} value={user.id}>
                                    {user.id} - {user.username}
                                </option>
                            ))}
                        </select>
                    </div>
                    {errors.userMatchId && (
                        <p className="text-red-700  text-xs -mt-2 col-span-10 sm:col-span-10">
                            {errors.userMatchId.message}
                        </p>
                    )}

                    <div className="col-span-12 sm:col-span-6 mt-3">
                        <label
                            htmlFor="country"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Emparejado
                        </label>
                        <select
                            id="matched"
                            name="matched"
                            autoComplete="matched"
                            className="mt-1  block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            defaultValue={data?.matched ? 'SI' : 'NO'}
                            {...register('matched', {
                                required: {
                                    value: true,
                                    message: 'Este campo es requerido',
                                },
                            })}
                        >
                            <option value="SI">Si</option>
                            <option value="NO">No</option>
                        </select>
                    </div>
                    {errors.matched && (
                        <p className="text-red-700  text-xs -mt-2 col-span-10 sm:col-span-10">
                            {errors.matched.message}
                        </p>
                    )}
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
                            defaultValue={data?.matchedAt || new Date().toISOString()}
                            {...register('matchedAt', {
                                required: {
                                    value: true,
                                    message: 'Este campo es requerido',
                                },
                            })}
                        />
                    </div>
                    {errors.matchedAt && (
                        <p className="text-red-700  text-xs -mt-2 col-span-10 sm:col-span-10">
                            {errors.matchedAt.message}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
