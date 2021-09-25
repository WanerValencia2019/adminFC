/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import { services, stateServices, listUsers, paymentTypes } from '../../redux/selectors';

export default function UserServiceForm({ data, register, errors }) {
    const serviceState = useSelector(services).services;
    const userState = useSelector(listUsers).users;
    const listStates = useSelector(stateServices).states;
    const listPaymentTypes = useSelector(paymentTypes).types;

    return (
        <div className="shadow overflow-hidden sm:rounded-md">
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
                            id="user"
                            name="user"
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
                            htmlFor="country"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Servicio
                        </label>
                        <select
                            id="service"
                            name="service"
                            className="form-select mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            defaultValue={data?.serviceId || serviceState[0]?.id}
                            {...register('serviceId', {
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
                    <div className="col-span-6 sm:col-span-6">
                        <label
                            htmlFor="country"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Método de pago
                        </label>
                        <select
                            id="paymentType"
                            name="paymentType"
                            autoComplete="paymentType"
                            className="form-select mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            defaultValue={data?.paymentTypeId || listPaymentTypes[0]?.id}
                            {...register('paymentTypeId', {
                                required: {
                                    value: true,
                                    message: 'Este campo es requerido',
                                },
                            })}
                        >
                            {listPaymentTypes.map((value) => (
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
                            Total
                        </label>
                        <input
                            type="number"
                            name="total"
                            id="total"
                            autoComplete="total"
                            className="form-input mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            defaultValue={data?.total || 0.0}
                            {...register('total', {
                                required: {
                                    value: true,
                                    message: 'Este campo es requerido',
                                },
                            })}
                        />
                    </div>
                    <div className="col-span-6 sm:col-span-6">
                        <label
                            htmlFor="country"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Estado
                        </label>
                        <select
                            id="status"
                            name="status"
                            className="form-select mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            defaultValue={data?.status || 'Activa'}
                            {...register('status', {
                                required: {
                                    value: true,
                                    message: 'Este campo es requerido',
                                },
                            })}
                        >
                            <option value="Activa">Activa</option>
                            <option value="Progreso">Progreso</option>
                            <option value="Finalizada">Finalizada</option>
                            <option value="Cancelada"> Cancelada</option>
                        </select>
                    </div>

                    <div className="col-span-10 sm:col-span-12">
                        <label
                            htmlFor="email-address"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Información del pago
                        </label>
                        <textarea
                            type="text"
                            name="payInfo"
                            id="payInfo"
                            autoComplete="payInfo"
                            className="form-textarea mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            defaultValue={data?.payInfo || ''}
                            {...register('payInfo', {
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
                            Fecha de pago
                        </label>
                        <input
                            type="datetime-local"
                            name="paymentAt"
                            id="paymentAt"
                            autoComplete="paymentAt"
                            className="form-input mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            defaultValue={data?.paymentAt || new Date().toISOString()}
                            {...register('paymentAt', {
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
