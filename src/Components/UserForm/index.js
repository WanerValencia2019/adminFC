/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function UserForm({ data, cancel, confirm }) {
    const defaultValues = {
        name: data?.name || '',
        email: data?.email || '',
        lastName: data?.lastName || '',
        firstName: data?.firstName || '',
        password: '',
        passwordConfirm: '',
        description: data?.description || '',
    };
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({ defaultValues });

    const showStatus = {
        active: true,
        inactive: false,
    };

    const onSubmit = (values) => {
        const { name, lastName, email, description } = values;
        const id = data?.id || 0;
        confirm(id, name, lastName, email, description);
        cancel();
    };

    return (
        <div className="mt-10 sm:mt-0 ">
            <div className="md:grid  md:gap-6 ">
                <div className="mt-5 md:mt-0 md:col-span-2">
                    <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                            <h2 className="text-lg font-medium leading-6 text-gray-900">Usuario</h2>
                            <p className="mt-1 text-sm text-gray-600">
                                Use a permanent address where you can receive mail.
                            </p>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="shadow overflow-hidden sm:rounded-md">
                            <div className="px-4 py-5 bg-white sm:p-6">
                                <h5 className="text-md font-medium leading-4 text-gray-800">
                                    Información personal
                                </h5>
                                <div className="grid grid-cols-6 gap-6 p-3">
                                    <div className="col-span-6 sm:col-span-3">
                                        <label
                                            htmlFor="first-name"
                                            className="block text-sm font-medium text-gray-600"
                                        >
                                            Nombre
                                        </label>
                                        <input
                                            type="text"
                                            name="first-name"
                                            id="first-name"
                                            autoComplete="first-name"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            {...register('firstName', {
                                                required: {
                                                    value: true,
                                                    message: 'Este campo es requerido',
                                                },
                                            })}
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label
                                            htmlFor="last-name"
                                            className="block text-sm font-medium text-gray-600"
                                        >
                                            Apellidos
                                        </label>
                                        <input
                                            type="text"
                                            name="last-name"
                                            id="last-name"
                                            autoComplete="last-name"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            {...register('lastName', {
                                                required: {
                                                    value: true,
                                                    message: 'Este campo es requerido',
                                                },
                                            })}
                                        />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <label
                                            htmlFor="email-address"
                                            className="block text-sm font-medium text-gray-600"
                                        >
                                            Correo electrónico
                                        </label>
                                        <input
                                            type="email"
                                            name="email-address"
                                            id="email-address"
                                            autoComplete="email"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            {...register('email', {
                                                required: {
                                                    value: true,
                                                    message: 'Este campo es requerido',
                                                },
                                            })}
                                        />
                                    </div>
                                    <div className="col-span-6 sm:col-span-6">
                                        <label
                                            htmlFor="description"
                                            className="block text-sm font-medium text-gray-600"
                                        >
                                            Descripción
                                        </label>
                                        <textarea
                                            type="text"
                                            name="description"
                                            id="description"
                                            autoComplete="description"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            {...register('description', {
                                                required: {
                                                    value: true,
                                                    message: 'Este campo es requerido',
                                                },
                                            })}
                                        />
                                    </div>
                                </div>
                                <h5 className="text-md font-medium leading-4 text-gray-800">
                                    Credenciales
                                </h5>
                                <div className="grid grid-cols-6 gap-6 p-3">
                                    <div className="col-span-6 sm:col-span-3">
                                        <label
                                            htmlFor="email-address"
                                            className="block text-sm font-medium text-gray-600"
                                        >
                                            Nombre de usuario
                                        </label>
                                        <input
                                            type="text"
                                            name="username"
                                            id="username"
                                            autoComplete="username"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            {...register('name', {
                                                required: {
                                                    value: true,
                                                    message: 'Este campo es requerido',
                                                },
                                            })}
                                        />
                                    </div>
                                    <br />
                                    {!data && (
                                        <>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label
                                                    htmlFor="email-address"
                                                    className="block text-sm font-medium text-gray-600"
                                                >
                                                    Contraseña
                                                </label>
                                                <input
                                                    type="password"
                                                    name="password"
                                                    id="password"
                                                    autoComplete="password"
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                    {...register('password', {
                                                        required: {
                                                            value: true,
                                                            message: 'Este campo es requerido',
                                                        },
                                                    })}
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label
                                                    htmlFor="email-address"
                                                    className="block text-sm font-medium text-gray-600"
                                                >
                                                    Confirmar contraseña
                                                </label>
                                                <input
                                                    type="password"
                                                    name="password-confirm"
                                                    id="password-confirm"
                                                    autoComplete="password-confirm"
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                    {...register('passwordConfirm', {
                                                        required: {
                                                            value: true,
                                                            message: 'Este campo es requerido',
                                                        },
                                                    })}
                                                />
                                            </div>
                                        </>
                                    )}
                                </div>
                                <h5 className="text-md font-medium leading-4 text-gray-800">
                                    Dirección
                                </h5>
                                <div className="grid grid-cols-6 gap-6 p-3">
                                    <div className="col-span-6 sm:col-span-3">
                                        <label
                                            htmlFor="country"
                                            className="block text-sm font-medium text-gray-600"
                                        >
                                            Country / Region
                                        </label>
                                        <select
                                            id="country"
                                            name="country"
                                            autoComplete="country"
                                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            {...register('country', {
                                                required: {
                                                    value: true,
                                                    message: 'Este campo es requerido',
                                                },
                                            })}
                                        >
                                            <option>Chile</option>
                                            <option>United States</option>
                                            <option>Canada</option>
                                            <option>Mexico</option>
                                        </select>
                                    </div>
                                    <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                                        <label
                                            htmlFor="city"
                                            className="block text-sm font-medium text-gray-600"
                                        >
                                            City
                                        </label>
                                        <input
                                            type="text"
                                            name="city"
                                            id="city"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>
                                    <div className="col-span-6">
                                        <label
                                            htmlFor="street-address"
                                            className="block text-sm font-medium text-gray-600"
                                        >
                                            Street address
                                        </label>
                                        <input
                                            type="text"
                                            name="street-address"
                                            id="street-address"
                                            autoComplete="street-address"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            {...register('streetAddress', {
                                                required: {
                                                    value: true,
                                                    message: 'Este campo es requerido',
                                                },
                                            })}
                                        />
                                    </div>
                                </div>
                                <h5 className="text-md font-medium leading-4 text-gray-800">
                                    Permisos
                                </h5>
                                <div className="grid grid-cols-6 gap-6 p-3">
                                    <div className="col-span-6 sm:col-span-3">
                                        <label
                                            htmlFor="active"
                                            className="text-sm font-medium text-gray-600"
                                        >
                                            Estado
                                        </label>
                                        <select
                                            id="active"
                                            name="active"
                                            autoComplete="active"
                                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            {...register('status', {
                                                required: {
                                                    value: true,
                                                    message: 'Este campo es requerido',
                                                },
                                            })}
                                        >
                                            <option className="text-green-700">Activo</option>
                                            <option className="text-yellow-500">Inactivo</option>
                                            <option className="text-red-700">Bloqueado</option>
                                        </select>
                                    </div>
                                    <br />
                                    <div className="col-span-6 sm:col-span-3">
                                        <label
                                            htmlFor="roles"
                                            className="block text-sm font-medium text-gray-600"
                                        >
                                            Roles
                                        </label>
                                        <select
                                            id="roles"
                                            name="roles"
                                            autoComplete="roles"
                                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            {...register('roles', {
                                                required: {
                                                    value: true,
                                                    message: 'Este campo es requerido',
                                                },
                                            })}
                                        >
                                            <option>Cliente</option>
                                            <option>Administrador</option>
                                            <option>Cliente</option>
                                            <option>Cliente</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <button
                                    type="button"
                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-red-500 hover:bg-red-700  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-2"
                                    onClick={() => cancel()}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="inline-flex justify-center py-2 px-4 border  shadow-sm text-lg font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
