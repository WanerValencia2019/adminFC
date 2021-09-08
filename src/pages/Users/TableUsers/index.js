import React, { useState } from "react";

import { TrashIcon, PencilAltIcon } from "@heroicons/react/outline";
import { PlusCircleIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";

import Pagination from "./../../../Components/Pagination";


import Modal from "./../../../Components/Modal";

import "./styles.css";

import DeleteForm from './DeleteForm';
import UserForm from "./../../../Components/UserForm";

import {
  addUser,
  updateUser,
} from "./../../../redux/Users/users.actions";



function TableUsers({ data }) {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  const [form, setForm] = useState(null);

  const handleAddSubmit = (id = 0, name, lastName, email, description) => {
    dispatch(addUser(id, name, lastName, email, description));
  };
  const handleEditSubmit = (id, name, lastName, email, description) => {
    dispatch(updateUser(id, name, lastName, email, description));
  };

  const renderEditModal = (user) => (
    <UserForm
      data={user}
      cancel={() => setShowModal(false)}
      confirm={handleEditSubmit}
    />
  );
  const renderDeleteModal = (data) => (<DeleteForm cancel={() => setShowModal(false)} data={data}  />);

  const handleEdit = (data) => {
    setForm(renderEditModal(data));
    setShowModal((prev) => !prev);
  };
  const handleDelete = (data) => {
    setForm(renderDeleteModal(data));
    setShowModal((prev) => !prev);
  };
  const handleCreate = () => {
    setForm(
      <UserForm cancel={() => setShowModal(false)} confirm={handleAddSubmit} />
    );
    setShowModal((prev) => !prev);
  };

  return (
    <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
      <header className="px-5 py-4 border-b border-gray-100  ">
        <div className="flex flex-column justify-between">
          <h2 className="font-semibold text-gray-800 ">Usuarios</h2>
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
              {data &&
                data.map((customer) => {
                  return (
                    <tr key={customer.id}>
                      <td
                        onClick={() => handleEdit(customer)}
                        className="p-2 user whitespace-nowrap"
                      >
                        <div className="flex items-center">
                          <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                            <img
                              className="rounded-full"
                              src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y&s=128"
                              width="40"
                              height="40"
                              alt={customer.name}
                            />
                          </div>
                          <div className="font-medium  text-green-500">
                            {customer.username}
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{customer.name}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium ">
                          {customer.lastName}
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="font-medium text-gray-800">
                          {customer.email}
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="font-medium text-gray-800">
                          {customer.createdAt}
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

export default TableUsers;
