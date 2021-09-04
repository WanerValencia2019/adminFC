import React, { useState } from "react";
import { Dialog } from '@headlessui/react'

import Image01 from "../../images/user-36-05.jpg";
import Image02 from "../../images/user-36-06.jpg";
import Image03 from "../../images/user-36-07.jpg";
import Image04 from "../../images/user-36-08.jpg";
import Image05 from "../../images/user-36-09.jpg";

import Pagination from "../Pagination";
import { TrashIcon, PencilAltIcon } from "@heroicons/react/outline";
import { ExclamationIcon, PlusCircleIcon } from "@heroicons/react/solid";

import Modal from "./../Modal";

import "./styles.css";
import UserForm from "../UserForm";

function TableUsers() {
  const [showModal, setShowModal] = useState(false);

  const [form, setForm] = useState(null);
  const customers = [
    {
      id: "0",
      image: Image01,
      name: "Alex Shatov",
      email: "alexshatov@gmail.com",
      location: "🇺🇸",
      spent: "$2,890.66",
    },
    {
      id: "1",
      image: Image02,
      name: "Philip Harbach",
      email: "philip.h@gmail.com",
      location: "🇩🇪",
      spent: "$2,767.04",
    },
    {
      id: "2",
      image: Image03,
      name: "Mirko Fisuk",
      email: "mirkofisuk@gmail.com",
      location: "🇫🇷",
      spent: "$2,996.00",
    },
    {
      id: "3",
      image: Image04,
      name: "Olga Semklo",
      email: "olga.s@cool.design",
      location: "🇮🇹",
      spent: "$1,220.66",
    },
    {
      id: "4",
      image: Image05,
      name: "Burak Long",
      email: "longburak@gmail.com",
      location: "🇬🇧",
      spent: "$1,890.66",
    },
  ];
  const renderEditModal = (user) => (
    <UserForm data={user} cancel={() => setShowModal(false)} />
  );
  const renderDeleteModal = (data) => (
    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
      <div className="sm:flex sm:items-start">
        <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
          <ExclamationIcon
            className="h-6 w-6 text-red-600"
            aria-hidden="true"
          />
        </div>
        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
          <Dialog.Title
            as="h3"
            className="text-lg leading-6 font-medium text-gray-900"
          >
            Eliminar usuario
          </Dialog.Title>
          <div className="mt-2">
            <p className="text-sm text-gray-500">
             ¿ Estás seguro que deseas eliminar a {data.name}?
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <button
          type="button"
          className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={() => setShowModal(false)}
        >
          Confirm
        </button>
        <button
          type="button"
          className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={() => setShowModal(false)}
        >
          Cancel
        </button>
      </div>
    </div>
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
    setForm(<UserForm />);
    setShowModal((prev) => !prev);
  }

  return (
    <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
      <header className="px-5 py-4 border-b border-gray-100  ">
        <div className="flex flex-column justify-between">
          <h2 className="font-semibold text-gray-800 ">Usuarios</h2>
          <PlusCircleIcon
            onClick={() => handleCreate()}
            class="h-10 w-10 text-blue-500 cursor-pointer"
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
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Usuario</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Nombre</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Apellidos</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">
                    Correo electrónico
                  </div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">
                    Fecha de creación
                  </div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Acciones</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-gray-100">
              {customers.map((customer) => {
                return (
                  <tr key={customer.id}>
                    <td
                      onClick={() => alert("HOLA SR" + customer.name)}
                      className="p-2 user whitespace-nowrap"
                    >
                      <div className="flex items-center">
                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                          <img
                            className="rounded-full"
                            src={customer.image}
                            width="40"
                            height="40"
                            alt={customer.name}
                          />
                        </div>
                        <div className="font-medium  text-green-500">
                          {customer.name}
                        </div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">{customer.name}</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left font-medium ">
                        {customer.name}
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="font-medium text-gray-800">
                        {customer.email}
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="font-medium text-gray-800">
                        {new Date().toDateString()}
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
          <Modal show={showModal} closeModal={() => setShowModal(false)}>
            {form}
          </Modal>
          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default TableUsers;
