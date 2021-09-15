/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';

export default function Search({ initialData, handleSearch, setData, placeholder }) {
    const [search, setSearch] = useState('');

    const filterData = async (text) => {
        setSearch(text);
        handleSearch(text);
    };
    useEffect(() => {
        if (search.length === 0) setData(initialData);
    }, [initialData, search, setData]);

    return (
        <div>
            <div className="relative">
                <label htmlFor="modal-search" className="sr-only">
                    Search
                </label>
                <input
                    id="modal-search"
                    className="w-full border-0 focus:ring-transparent placeholder-gray-400 appearance-none py-3 pl-10 pr-4"
                    type="search"
                    placeholder={placeholder || 'Buscar'}
                    value={search}
                    onChange={(e) => filterData(e.target.value)}
                />
                <button
                    className="absolute inset-0 right-auto group"
                    type="submit"
                    aria-label="Search"
                >
                    <svg
                        className="w-4 h-4 flex-shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-4 mr-2"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                        <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
