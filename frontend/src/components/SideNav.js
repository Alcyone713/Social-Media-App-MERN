import React from 'react';
import { Link } from 'react-router-dom';
import './sideNav.css'

export default function SideNav() {
    return <div>
        <div className='sidenav'>
            <div className="l-navbar" id="nav-bar">
                <nav className="nav">
                    <div> <a href="#" className="nav_logo">
                        <i className='bx bx-layer nav_logo-icon'></i> <span className="nav_logo-name"></span> </a>
                        <div className="nav_list">
                            <a href="#" className="nav_link"> <i className="fas fa-home" style={{ color: "#fc036b", marginTop:"45px" }}></i> </a>
                            <a href="#" className="nav_link"> <i className="fas fa-comments" style={{ color: "#03b1fc" }}></i></a>
                            <a href="#" className="nav_link"> <i className="fas fa-compass" style={{ color: "#f5ec89" }}></i> </a>
                            <a href="#" className="nav_link"><i className="fas fa-heart" style={{ color: "#ff1c51" }}></i> </a>
                            <a href="#" className="nav_link"> <i className="fas fa-photo-video" style={{ color: "#a04de3" }}></i> </a>
                            <a href="#" className="nav_link"> <i className="fas fa-film" style={{ color: "#cf7d4a" }}></i> </a>
                            <a href="#" className="nav_link"> <i className="fas fa-bookmark" style={{ color: "#cc5295" }}></i></a>
                        </div>
                    </div>
                    <Link to="/" className="nav_link"> <i className="fas fa-sign-out-alt" style={{ color: "black", marginTop:"45px" }}></i></Link>
                </nav>
            </div>
        </div>
    </div>
}
