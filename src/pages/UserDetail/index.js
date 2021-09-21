/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable  react/no-unescaped-entities */
import React, { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';

import DashBoard from '../../Components/DashBoard';

import UserForm from '../../Components/UserForm';

// import DeleteForm from './DeleteForm';

export default function UserDetail({ data, cancel, confirm }) {
    const [name, setName] = useState(data?.name || '');
    const [email, setEmail] = useState(data?.email || '');
    const [lastName, setLastName] = useState(data?.lastName || '');
    const [description, setDescription] = useState(data?.description || '');

    const onSubmit = (e) => {
        e.preventDefault();
        const id = data?.id || 0;
        confirm(id, name, lastName, email, description);
        cancel();
    };
    return (
        <DashBoard>
            <div className="grid grid-cols-6 flex flex-row shadow overflow-hidden bg-white p-3">
                <div className="col-span-6 sm:col-span-5">
                    <div className="flex flex-row justify-between">
                        <button
                            className="shadow-sm p-2 text-lg font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            type="button"
                        >
                            Regresar
                        </button>
                        <h4 className="leading-4 text-black">Usuario - Nuevo</h4>
                    </div>
                </div>
                <div className="w-full  px-4 pt-3 col-span-4 sm:col-span-5">
                    <div className="w-full  p-2 mx-auto bg-white rounded-2xl">
                        <Disclosure as="div" className="mt-2">
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-md font-medium leading-4 text-gray-800 bg-gray-300 rounded-lg hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-900 focus-visible:ring-opacity-75 shadow-md">
                                        <span>Credenciales</span>
                                        <ChevronUpIcon
                                            className={`${
                                                open ? 'transform rotate-180' : ''
                                            } w-5 h-5 text-gray-500`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
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
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </div>
                                            <br />
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
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
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
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="mt-2 flex justify-between w-full px-4 py-2 text-md font-medium leading-4 text-gray-800 bg-gray-300 rounded-lg hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-900 focus-visible:ring-opacity-75 shadow-md">
                                        <span>Información personal</span>
                                        <ChevronUpIcon
                                            className={`${
                                                open ? 'transform rotate-180' : ''
                                            } w-5 h-5 text-gray-500`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
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
                                                    autoComplete="given-name"
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
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
                                                    autoComplete="family-name"
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                    value={lastName}
                                                    onChange={(e) => setLastName(e.target.value)}
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
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-6">
                                                <label
                                                    htmlFor="email-address"
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
                                                    value={description}
                                                    onChange={(e) => setDescription(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure as="div" className="mt-2">
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-md font-medium leading-4 text-gray-800 bg-gray-300 rounded-lg hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-900 focus-visible:ring-opacity-75 shadow-md">
                                        <span>Dirección</span>
                                        <ChevronUpIcon
                                            className={`${
                                                open ? 'transform rotate-180' : ''
                                            } w-5 h-5 text-gray-500`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
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
                                                />
                                            </div>
                                        </div>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure as="div" className="mt-2">
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-md font-medium leading-4 text-gray-800 bg-gray-300 rounded-lg hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-900 focus-visible:ring-opacity-75 shadow-md">
                                        <span>Permisos</span>
                                        <ChevronUpIcon
                                            className={`${
                                                open ? 'transform rotate-180' : ''
                                            } w-5 h-5 text-gray-500`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
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
                                                >
                                                    <option className="text-green-700">
                                                        Activo
                                                    </option>
                                                    <option className="text-yellow-500">
                                                        Inactivo
                                                    </option>
                                                    <option className="text-red-700">
                                                        Bloqueado
                                                    </option>
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
                                                >
                                                    <option>Cliente</option>
                                                    <option>Administrador</option>
                                                    <option>Cliente</option>
                                                    <option>Cliente</option>
                                                </select>
                                            </div>
                                        </div>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    </div>
                </div>
                <div className="col-span-1 mt-8 sm:col-span-1">
                    <div className=" flex flex-col bg-gray-50 text-right sm:px-6 ">
                        <button
                            type="submit"
                            className="justify-center py-2 px-4 border  shadow-sm text-lg font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Guardar
                        </button>
                        <button
                            type="button"
                            className="mt-2 justify-center py-2 px-4 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-red-500 hover:bg-red-700  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onClick={() => cancel()}
                        >
                            Eliminar
                        </button>
                    </div>
                </div>
            </div>
        </DashBoard>
    );
}
