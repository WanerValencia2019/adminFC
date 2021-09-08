import React, { useState } from "react";


import { TrashIcon, PencilAltIcon } from "@heroicons/react/outline";
import { PlusCircleIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";

import Pagination from "./../../../Components/Pagination";


import Modal from "./../../../Components/Modal";

import "./styles.css";
import InterestForm from "./../../../Components/InterestForm";
import DeleteForm from './DeleteForm';

import {
  addInterest,
  updateInterest,
} from "./../../../redux/Interests/interests.actions";


function TableUsers({ data }) {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  const [form, setForm] = useState(null);

  const handleAddSubmit = (id = 0, name, description, status) => {
    dispatch(addInterest({id,name, description, status}));
  };
  const handleEditSubmit = (id, name, description, status) => {
    dispatch(updateInterest({id,name, description, status}));
  };

  const renderEditModal = (user) => (
    <InterestForm
      data={user}
      cancel={() => setShowModal(false)}
      confirm={handleEditSubmit}
    />
  );
  const renderDeleteModal = (data) => (
    <DeleteForm cancel={() => setShowModal(false)} data={data}  />
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
    setForm(
      <InterestForm cancel={() => setShowModal(false)} confirm={handleAddSubmit} />
    );
    setShowModal((prev) => !prev);
  };

  return (
    <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
      <header className="px-5 py-4 border-b border-gray-100  ">
        <div className="flex flex-column justify-between">
          <h2 className="font-semibold text-gray-800 ">Intereses</h2>
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
                  <div className="font-semibold text-left">Nombre</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Descripción</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Estado</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">
                    Fecha de creación
                  </div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">
                    Acciones
                  </div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-gray-100">
              {data &&
                data.map((role) => {
                  return (
                    <tr key={role.id}>
                      <td onClick={() => handleEdit(role)} className="p-2 whitespace-nowrap">
                        <p className="text-green-700 text-left role">{role.name}</p>
                      </td>
                      <td className="p-2 max-w-md whitespace-nowrap">
                          <p className="text-left font-medium truncate">{role.description}</p>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="font-medium text-gray-800">
                          {role.status ? <p className="text-green-400">Activo</p>:<p className="text-red-400">Inactivo</p>}
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="font-medium text-gray-800">
                          {role.createdAt}
                        </div>
                      </td>
                      <td className="whitespace-nowrap">
                        <div className="text-lg text-center flex flex-row">
                          <PencilAltIcon
                            onClick={() => handleEdit(role)}
                            className="h-8 w-8 text-blue-500 cursor-pointer"
                          />
                          <TrashIcon
                            onClick={() => handleDelete(role)}
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