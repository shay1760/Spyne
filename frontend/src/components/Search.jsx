import React, { useContext, useEffect, useState } from 'react';
import { CarContext } from '../context/carContext';
import { useLocation } from 'react-router-dom';
import { assets } from '../assets/assets';

const Search = () => {
    const { search, setSearch, showSearch, setShowSearch } = useContext(CarContext);
    const location = useLocation();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (location.pathname.includes('list')) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }, [location]);

    return showSearch && visible ? (
        <div className="border-t border-b bg-gray-50 text-center">
            <div className="inline-flex items-center justify-center border border-gray-400 px-5 h-9 my-5 mx-3 rounded-full w-3/8 sm:w-1/2">
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="flex-1 outline-none bg-inherit text-sm"
                    type="text"
                    placeholder="Search by name, category, or price"
                />
                <img className="w-4" src={assets.search} alt="Search Icon" />
            </div>
            <img
                onClick={() => setShowSearch(false)}
                className="inline w-5 cursor-pointer"
                src={assets.close}
                alt="Close Icon"
            />
        </div>
    ) : null;
};

export default Search;
