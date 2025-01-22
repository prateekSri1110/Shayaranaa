import { useAuth0 } from "@auth0/auth0-react";
import React from 'react';
import { Link } from 'react-router-dom';
import dp from '../images/logo1.png';
import logo from '../images/logo2.png';
import "./all.css";

function Navbar() {
    const { user, isAuthenticated } = useAuth0();

    return (
        <div className="container-fluid p-0 sticky-top" id="home">
            <nav className="navbar navbar-expand-lg nave p-1">
                <div className="container-fluid">
                    {/* Left Section - Logo */}
                    <div className="d-flex align-items-center">
                        <img style={{ width: "140px" }} src={logo} alt="Logo" />
                    </div>

                    {/* Navbar Toggle Button */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Center Section - Navigation */}
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/home" className="nav-link text-white">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/upload" className="nav-link text-white">Upload</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link text-white">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link text-white">Contact</Link>
                            </li>
                        </ul>

                        {/* Right Section - Profile */}
                        <div className=" collapse navbar-collapse d-flex align-items-center justify-content-end">
                            {isAuthenticated && (
                                <p className="text-white m-0 me-2">{user.name}</p>
                            )}
                            <button className="btn p-0">
                                <Link to="/profile" className="nav-link text-white">
                                    <img style={{ width: "50px" }} src={dp} alt="Profile" title="profile" />
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;