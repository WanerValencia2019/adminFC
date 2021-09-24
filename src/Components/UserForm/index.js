/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon, ArrowLeftIcon } from '@heroicons/react/solid';
import { PlusIcon } from '@heroicons/react/outline';
import { useSelector } from 'react-redux';

import CreateRoleForModal from '../RoleForm/createRoleForModal';
import Modal from '../Modal';
import { roles as listRoles } from '../../redux/selectors';

export default function UserForm({ data, register }) {
    const { roles } = useSelector(listRoles);
    const [showModal, setShowModal] = useState(false);

    const [selectedForm, setSelectedForm] = useState(null);

    const showCreateRoles = () => {
        setSelectedForm(<CreateRoleForModal setShow={setShowModal} />);
        setShowModal(true);
    };

    return (
        <div className="shadow overflow-hidden sm:rounded-md">
            <div className="grid grid-cols-6 shadow overflow-hidden bg-white p-3">
                <div className="w-ful col-span-6 ">
                    <div className="w-full  mx-auto bg-white rounded-2xl">
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
                                                    defaultValue={data?.username}
                                                    {...register('username')}
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
                                                            {...register('password')}
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
                                                            {...register('passwordConfirm')}
                                                        />
                                                    </div>
                                                </>
                                            )}
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
                                                    defaultValue={data?.name}
                                                    {...register('name')}
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
                                                    defaultValue={data?.lastName}
                                                    {...register('lastName')}
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
                                                    defaultValue={data?.email}
                                                    {...register('email')}
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
                                                    defaultValue={data?.description}
                                                    {...register('description')}
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
                                                    País
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
                                                    Ciudad
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
                                                    Dirección
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
                                                    defaultValue={data?.status}
                                                    {...register('status')}
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
                                                <div className="flex flex-row items-center">
                                                    <select
                                                        id="roles"
                                                        name="roles"
                                                        autoComplete="roles"
                                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                        defaultValue={data?.roles}
                                                        {...register('roles')}
                                                    >
                                                        {roles.map((rol) => (
                                                            <option value={rol.id}>
                                                                {rol.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    <PlusIcon
                                                        onClick={showCreateRoles}
                                                        className="ml-1 w-6 h-6 text-green-600 cursor-pointer"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    </div>
                </div>
            </div>
            <Modal show={showModal} closeModal={() => setShowModal(false)}>
                {selectedForm}
            </Modal>
        </div>
    );
}
