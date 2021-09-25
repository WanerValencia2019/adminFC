/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function PaymentTypeForm({ data, register, errors }) {
    return (
        <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-10 gap-2">
                    <div className="col-span-10 sm:col-span-10">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Nombre
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="first-name"
                            autoComplete="name"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            defaultValue={data?.name || ''}
                            {...register('name', {
                                required: {
                                    value: true,
                                    message: 'Este campo es requerido',
                                },
                                minLength: {
                                    value: 3,
                                    message: 'El nombre debe tener minimo 3 valores',
                                },
                            })}
                        />
                    </div>
                    {errors.name && (
                        <p className="text-red-700  text-xs -mt-2 col-span-10 sm:col-span-10">
                            {errors.name.message}
                        </p>
                    )}
                    <div className="col-span-10 sm:col-span-10">
                        <label
                            htmlFor="description"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Description
                        </label>
                        <textarea
                            type="text"
                            name="description"
                            id="description"
                            autoComplete="description"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            defaultValue={data?.description || ''}
                            {...register('description', {
                                required: {
                                    value: true,
                                    message: 'Este campo es requerido',
                                },
                                minLength: {
                                    value: 3,
                                    message: 'El nombre debe tener minimo 3 valores',
                                },
                            })}
                        />
                    </div>
                    {errors.description && (
                        <p className="text-red-700  text-xs -mt-2 col-span-10 sm:col-span-10">
                            {errors.description.message}
                        </p>
                    )}
                    <div className="col-span-5 sm:col-span-5">
                        <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                            Estado
                        </label>
                        <select
                            id="status"
                            name="status"
                            autoComplete="status"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            {...register('status', {
                                required: {
                                    value: true,
                                    message: 'Este campo es requerido',
                                },
                            })}
                        >
                            <option value="active">Activo</option>
                            <option value="inactive">Inactivo</option>
                        </select>
                    </div>
                    {errors.status && (
                        <p className="text-red-700  text-xs -mt-2 col-span-10 sm:col-span-10">
                            {errors.status.message}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
