import React, { useState, useEffect } from 'react';

import DataTable from 'react-data-table-component';

import { TrashIcon, PencilAltIcon, PlusIcon } from '@heroicons/react/outline';
import { PlusCircleIcon } from '@heroicons/react/solid';

import Modal from '../Modal';

const renderActions = (row, edit, remove) => {
    return (
        <div className="text-lg text-center flex flex-row">
            <PencilAltIcon
                onClick={() => edit(row)}
                className="h-8 w-8 text-blue-500 cursor-pointer"
            />
            <TrashIcon
                onClick={() => remove(row)}
                className="h-8 w-8 text-red-600 cursor-pointer"
            />
        </div>
    );
};

const renderHeader = (title, create) => (
    <div className="px-5 py-4 border-b border-gray-100  ">
        <div className="flex flex-column justify-between">
            <p className="font-semibold text-gray-800 font-sm">{title}</p>
            <button
                type="button"
                onClick={() => create()}
                className="text-blue-500 hover:bg-blue-600 hover:text-white flex justify-center items-center  cursor-pointer p-1 rounded shadow"
            >
                <PlusCircleIcon className="h-10 w-10" />
                <p className="text-sm">Añadir</p>
            </button>
        </div>
    </div>
);

export default function DataCRUD({ title, data, columns, form, removeForm, add, update, remove }) {
    const [showModal, setShowModal] = useState(false);

    const [selectedForm, setSelectedForm] = useState(null);

    const GetForm = form;
    const GetRemoveForm = removeForm;

    const handleDelete = (instance) => {
        setSelectedForm(<GetRemoveForm cancel={() => setShowModal(false)} data={instance} />);
        setShowModal((prev) => !prev);
    };
    const handleEdit = (instance) => {
        setSelectedForm(
            <GetForm cancel={() => setShowModal(false)} data={instance} confirm={update} />,
        );
        setShowModal((prev) => !prev);
    };
    const handleCreate = () => {
        setSelectedForm(<GetForm cancel={() => setShowModal(false)} confirm={add} />);
        setShowModal((prev) => !prev);
    };

    const actions = {
        name: 'Acciones',
        cell: (row) => renderActions(row, handleEdit, handleDelete),
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
    };

    const columnsWithActions = [...columns, actions];

    return (
        <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
            <DataTable
                title={renderHeader(title, handleCreate)}
                customStyles={customStyles}
                columns={columnsWithActions}
                data={data}
                selectableRows
                selectableRowsSingle
                highlightOnHover
                pagination
                paginationComponentOptions={paginationComponentOptions}
                paginationRowsPerPageOptions={[5, 10, 20, 30, 40]}
                noDataComponent={<h4 className="p-4">No hay información disponible</h4>}
                onRowClicked={(row) => handleEdit(row)}
                striped
            />
            <Modal show={showModal} closeModal={() => setShowModal(false)}>
                {selectedForm}
            </Modal>
        </div>
    );
}

const paginationComponentOptions = {
    rowsPerPageText: 'Filas por página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
};

const customStyles = {
    headCells: {
        style: {
            padding: '0.5rem',
            whiteSpace: 'nowrap',
            fontWeight: 600,
            textTransform: 'uppercase',
            color: 'rgba(156, 163, 175, 1)',
            backgroundColor: 'rgba(249, 250, 251, 1)',
        },
    },
    cells: {
        style: {
            padding: '0.5rem',
            whiteSpace: 'nowrap',
            fontSize: '0.875rem',
            fontWeight: 500,
            lineHeight: '1.25rem',
        },
    },
    rows: {
        style: {
            borderWidth: '0.5px',
            borderColor: 'rgba(249, 250, 251, 1)',
        },
    },
};
