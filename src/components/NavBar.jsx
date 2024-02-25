import React from 'react';
import { Link } from 'react-router-dom';
import "./styles/navbar.css";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-light" id="neubar">
            <div className="container">
                <a className="navbar-brand" to="/">
                    <img src="https://img.freepik.com/free-vector/webinar-concept-illustration_114360-4764.jpg?size=626&ext=jpg&ga=GA1.1.385155905.1698831568&semt=ais" height="70" width="150" alt="Logo" />
                </a>


                <h4 className='brand-name'>Blog-Spot</h4>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>



                <div className=" collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto ">
                        <li className="nav-item">
                            <h2>Write-It </h2>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link mx-2" to="/">Home</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link mx-2" to="/add">Create Post</Link>
                        </li>
                    </ul>
                </div>
            </div>

        </nav >
    )
}

export default NavBar