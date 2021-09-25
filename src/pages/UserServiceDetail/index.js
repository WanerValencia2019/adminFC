import React, { useState, useLayoutEffect } from 'react';
import { useForm } from 'react-hook-form';

import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon, ArrowLeftIcon } from '@heroicons/react/solid';

import DashBoard from '../../Components/DashBoard';
import WelcomeBanner from '../../Components/WelcomeBanner/index';
import UserServicesForm from '../../Components/UserServicesForm';

import { userServices } from '../../redux/selectors';

import {
    addUserServices,
    updateUserServices,
    deleteUserServices,
} from '../../redux/UserServices/userServices.actions';

export default function UserServiceDetail() {
    const params = useParams();
    const history = useHistory();
    const dispatch = useDispatch();

    const [data, setData] = useState(null);
    const { services } = useSelector(userServices);

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    useLayoutEffect(() => {
        setData(services.filter((service) => service.id === Number(params?.id))[0]);
    }, [data]);

    const create = (values) => {
        const { userId, stateServiceId, servicesId, value, description, dateService } = values;
        dispatch(
            addUserServices({
                id: 0,
                userId,
                stateServiceId,
                servicesId,
                value,
                description,
                dateService,
            }),
        );
        history.push('/services-users');
    };

    const edit = (values) => {
        const { userId, stateServiceId, servicesId, value, description, dateService } = values;
        dispatch(
            updateUserServices({
                id: 0,
                userId,
                stateServiceId,
                servicesId,
                value,
                description,
                dateService,
            }),
        );
        history.push('/services-users');
    };

    const remove = () => {
        const id = data?.id;
        dispatch(deleteUserServices(id));
        history.push('/services-users');
    };

    return (
        <DashBoard>
            <WelcomeBanner>
                <h4 className="text-xl md:text-xl text-gray-800 font-bold mb-1">
                    Servicios de usuario - {data ? data.id : 'Nuevo'}
                </h4>
            </WelcomeBanner>
            <div className="grid grid-cols-6 flex flex-row shadow overflow-hidden bg-white p-3">
                <div className="col-span-2 lg:col-span-1 ">
                    <div className="flex flex-row items-center text-blue-500 cursor-pointer">
                        <ArrowLeftIcon
                            onClick={() => history.push('/services-users')}
                            className="h-6 w-6"
                        />
                    </div>
                </div>
                <br />
                <div className="w-full  px-4 pt-3 col-span-6 sm:col-span-6">
                    <form onSubmit={data ? handleSubmit(edit) : handleSubmit(create)}>
                        <div className="grid grid-cols-6 flex flex-row">
                            <div className="col-span-6  sm:col-span-5">
                                <UserServicesForm data={data} register={register} errors={errors} />
                            </div>
                            <div className="col-span-6 sm:col-span-4 md:col-span-4 lg:col-span-1 mt-8 ">
                                <div className=" flex flex-col  text-right sm:px-6 px-6">
                                    {data ? (
                                        <>
                                            <button
                                                type="submit"
                                                className="justify-center py-2 px-4 border  shadow-sm text-lg font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            >
                                                Guardar
                                            </button>
                                            <button
                                                type="button"
                                                className="mt-2 justify-center py-2 px-4 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-red-500 hover:bg-red-700  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                onClick={() => remove()}
                                            >
                                                Eliminar
                                            </button>
                                        </>
                                    ) : (
                                        <button
                                            type="submit"
                                            className="justify-center py-2 px-4 border  shadow-sm text-lg font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Guardar
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </DashBoard>
    );
}
