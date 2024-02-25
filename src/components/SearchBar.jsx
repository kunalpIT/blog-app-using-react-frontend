import React from 'react';
import "./styles/searchbar.css";

const SearchBar = ({ searchTxt, setSearchTxt, setCurrentPage }) => {
    return (
        <div className="container-fluid box">
            <div className="d-flex justify-content-center ">

                <div className="col-12 col-md-6 mt-5">
                    <h2>Get Your Favourite Blog by Categories</h2>
                    <br />
                    <input
                        type="text"
                        value={searchTxt}
                        placeholder="Enter blog category term..."
                        onChange={(event) => {
                            setSearchTxt(event.target.value)
                            setCurrentPage(1);
                        }}
                        className="form-control"
                    />
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
