/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

export default function UserForm({ data, cancel, confirm }) {
    const [name, setName] = useState(data?.name || '');
    const [description, setDescription] = useState(data?.description || '');

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = data?.id || 0;
        confirm(id, name, description);
        cancel();
    };

    return (
        <div className="mt-10 sm:mt-0 ">
            <div className="md:grid  md:gap-6 ">
                <div className="mt-5 md:mt-0 md:col-span-2">
                    <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">
                                Información del Servicio
                            </h3>
                            <p className="mt-1 text-sm text-gray-600">
                                Lorem ipsum aliqua nisi ut qui sunt culpa ut nisi elit in.
                            </p>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="shadow overflow-hidden sm:rounded-md">
                            <div className="px-4 py-5 bg-white sm:p-6">
                                <div className="grid grid-cols-10 gap-2">
                                    <div className="col-span-10 sm:col-span-10">
                                        <label
                                            htmlFor="first-name"
                                            className="block text-sm font-medium text-gray-700"
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
                                    <div className="col-span-10 sm:col-span-10">
                                        <label
                                            htmlFor="email-address"
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
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <button
                                    type="button"
                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-red-500 hover:bg-red-700  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-2"
                                    onClick={() => cancel()}
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    className="inline-flex justify-center py-2 px-4 border  shadow-sm text-lg font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Guardar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
