import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="header navbar navbar-expand-sm navbar-dark fixed-top">
            <Link to="/" className="navbar-brand">Killstreak</Link>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#collapseNavbar"><span className="navbar-toggler-icon" /></button>
            <div className="collapse navbar-collapse" id="collapseNavbar">
                <ul className="nav navbar-nav">
                    <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                    <li className="nav-item"><Link to="/projects" className="nav-link">Projects</Link></li>
                    {/* <li class="nav-item"><Link to="/" class="nav-link">HAHAHA</Link></li> */}
                    <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                    <li className="nav-item"><Link to="/skills" className="nav-link">Skills</Link></li>
                    <li className="nav-item"><Link to="/team" className="nav-link">Team</Link></li>
                </ul >
            </div >
        </nav >
    )
}