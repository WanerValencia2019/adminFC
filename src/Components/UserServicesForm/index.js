/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import { services, stateServices, listUsers } from '../../redux/selectors';

export default function UserServiceForm({ data, register, errors }) {
    const serviceState = useSelector(services).services;
    const userState = useSelector(listUsers).users;
    const listStates = useSelector(stateServices).states;

    return (
        <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-6 sm:col-span-6">
                        <label htmlFor="user" className="block text-sm font-medium text-gray-700">
                            Usuario
                        </label>
                        <select
                            id="user"
                            name="user"
                            autoComplete="user"
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
                    <div className="col-span-6 sm:col-span-6">
                        <label
                            htmlFor="service"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Servicio
                        </label>
                        <select
                            id="service"
                            name="service"
                            autoComplete="service"
                            className="form-select mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            defaultValue={data?.servicesId || serviceState[0]?.id}
                            {...register('servicesId', {
                                required: {
                                    value: true,
                                    message: 'Este campo es requerido',
                                },
                            })}
                        >
                            {serviceState.map((value) => (
                                <option key={value.id} value={value.id}>
                                    {value.id} - {value.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="col-span-12 sm:col-span-6">
                        <label
                            htmlFor="stateService"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Estado del servicio
                        </label>
                        <select
                            id="stateService"
                            name="stateService"
                            autoComplete="stateService"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            defaultValue={data?.servicesId || serviceState[0]?.id}
                            {...register('stateServiceId', {
                                required: {
                                    value: true,
                                    message: 'Este campo es requerido',
                                },
                            })}
                        >
                            {listStates.map((value) => (
                                <option key={value.id} value={value.id}>
                                    {value.id} - {value.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="col-span-10 sm:col-span-12">
                        <label
                            htmlFor="email-address"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Valor
                        </label>
                        <input
                            type="number"
                            name="value"
                            id="value"
                            autoComplete="value"
                            className="form-input mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            defaultValue={data?.value || 0.0}
                            {...register('value', {
                                required: {
                                    value: true,
                                    message: 'Este campo es requerido',
                                },
                            })}
                        />
                    </div>

                    <div className="col-span-10 sm:col-span-12">
                        <label
                            htmlFor="email-address"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Descripción
                        </label>
                        <textarea
                            type="text"
                            name="description"
                            id="description"
                            autoComplete="description"
                            className="form-textarea mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            defaultValue={data?.description || ''}
                            {...register('description', {
                                required: {
                                    value: true,
                                    message: 'Este campo es requerido',
                                },
                            })}
                        />
                    </div>
                    <div className="col-span-10 sm:col-span-12">
                        <label
                            htmlFor="email-address"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Fecha del servicio
                        </label>
                        <input
                            type="datetime-local"
                            name="dateService"
                            id="dateService"
                            autoComplete="dateService"
                            className="form-input mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            defaultValue={data?.dateService || new Date().toISOString()}
                            {...register('dateService', {
                                required: {
                                    value: true,
                                    message: 'Este campo es requerido',
                                },
                            })}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
