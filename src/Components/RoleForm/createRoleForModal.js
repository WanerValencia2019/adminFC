import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import RoleForm from './index';
import { addRol } from '../../redux/Roles/roles.actions';

export default function CreateRolesForModal({ setShow }) {
    const dispatch = useDispatch();
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const showStatus = {
        active: true,
        inactive: false,
    };

    const create = (values) => {
        const { name, description, status } = values;
        const st = showStatus[status];
        dispatch(addRol({ id: 0, name, description, status: st }));
        setShow(false);
    };
    const cancel = () => setShow(false);

    return (
        <div className="p-5 w-full">
            <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Información del rol</h3>
                <p className="mt-1 text-sm text-gray-600">
                    Lorem ipsum laboris tempor officia minim eu consequat nisi ut laborum fugiat.
                </p>
            </div>
            <div>
                <RoleForm register={register} errors={errors} />
                <div className="col-span-6 sm:col-span-4 md:col-span-4 lg:col-span-1">
                    <div className="px-4 bg-gray-50 text-right sm:px-6">
                        <button
                            type="button"
                            className=" py-2 px-4 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-red-500 hover:bg-red-700  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-2"
                            onClick={() => cancel()}
                        >
                            Cancelar
                        </button>
                        <button
                            type="button"
                            onClick={handleSubmit(create)}
                            className="py-2 px-4 border  shadow-sm text-lg font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Guardar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
