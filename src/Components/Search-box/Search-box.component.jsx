import React from 'react';

export const SearchBox = ({placeholder,handleChange}) => {
    return (
        <input className="Search-box" type="search" placeholder={placeholder}
            onChange={handleChange} />
    )
}