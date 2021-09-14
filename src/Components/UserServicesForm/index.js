import React, { useState } from "react";

import { useSelector } from 'react-redux';

import { services, stateServices, listUsers} from '../../redux/selectors';

export default function UserServiceForm({ data, cancel, confirm}) {

  const serviceState = useSelector(services).services;
  const userState = useSelector(listUsers).users;
  const listStates = useSelector(stateServices).states;

  const [userId, setUserId] = useState(data?.userId || userState[0]?.id);
  const [stateServiceId, setStateServiceId] = useState(data?.stateServiceId || listStates[0]?.id)
  const [servicesId, setServicesId] = useState(data?.servicesId || serviceState[0]?.id)
  const [value, setValue] = useState(data?.value || 0.0)
  const [dateService, setDateService] = useState(data?.dateService || new Date().toISOString())
  const [description, setDescription] = useState(data?.description || "");

  //console.log(dateService)

  const handleSubmit = (e) => {
    e.preventDefault();
    let id = data?.id || 0;
    confirm(id,
		userId,
		stateServiceId,
		servicesId,
		value,
		description,
		dateService
		);
    cancel();   
  };

  return (
    <div className="mt-10 sm:mt-0 lg">
      <div className="md:grid  md:gap-6 ">
        <div className="mt-5 md:mt-0 md:col-span-2 ">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Información del servicio de usuario
              </h3>
              <p className="mt-1 text-sm text-gray-600">
               Lorem ipsum laboris tempor officia minim eu consequat nisi ut laborum fugiat.
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-12 gap-2">
                <div className="col-span-6 sm:col-span-6">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Usuario
                    </label>
                    <select
                      id="country"
                      name="country"
                      autoComplete="country"
                      className=" form-select mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      value={userId}
                      onChange={(e)=>setUserId(e.target.value)}
                    >
                    {userState.map((user)=>(<option key={user.username} value={user.id}>{user.id} - {user.username}</option>))}
                    </select>
                  </div>
                  <div className="col-span-6 sm:col-span-6">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Servicio
                    </label>
                    <select
                      id="country"
                      name="country"
                      autoComplete="country"
                      className="form-select mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      value={servicesId}
                      onChange={(e)=>setServicesId(Number(e.target.value))}
                    >
                    {serviceState.map((value)=>(<option key={value.id} value={value.id}>{value.id} - {value.name}</option>))}
                    </select>
                  </div>
                    <div className="col-span-12 sm:col-span-6">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Estado del servicio
                    </label>
                    <select
                      id="country"
                      name="country"
                      autoComplete="country"
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      value = {stateServiceId}
                      onChange = {(e)=>setStateServiceId(e.target.value)}
                    >                    
                    {listStates.map((value)=>(<option key={value.id} value={value.id}>{value.id} - {value.name}</option>))}
                    </select>
                  </div>
                  <div className="col-span-10 sm:col-span-12">
                    <label
                      htmlFor="email-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Valor
                    </label>
                    <input
                      type="number"
                      name="value"
                      id="value"
                      autoComplete="value"
                      className="form-input mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      value={value}
                      onChange={(e)=>setValue(e.target.value)}
                    />
                  </div>

                  <div className="col-span-10 sm:col-span-12">
                    <label
                      htmlFor="email-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Descripción
                    </label>
                    <textarea
                      type="text"
                      name="description"
                      id="description"
                      autoComplete="description"
                      className="form-textarea mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      value={description}
                      onChange={(e)=>setDescription(e.target.value)}
                    />
                  </div>
                  <div className="col-span-10 sm:col-span-12">
                    <label
                      htmlFor="email-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Fecha del servicio
                    </label>
                    <input
                      type="datetime-local"
                      name="dateService"
                      id="dateService"
                      autoComplete="dateService"
                      className="form-input mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      value={dateService}
                      onChange={(e)=>setDateService(e.target.value)}
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
