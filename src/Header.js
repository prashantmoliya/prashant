import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {


    return (
        <div>

            <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light site-navbar-target">
                <div class="container">
                    <Link to="/" class="navbar-brand fs-2 fw-bold">React</Link>

                    <button class="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="oi oi-menu"></span> Menu
                    </button>

                    <div class="me-5">
                        <ul class="navbar-nav">
                            <li class="nav-item "><Link to="/" class="nav-link">Home</Link></li>
                            <li class="nav-item "><Link to="/Profile" class="nav-link">Profile</Link></li>
                            <li class="nav-item "><Link to="/Information" class="nav-link">Information</Link></li>
                            <li class="nav-item "><Link to="/About" class="nav-link">About</Link></li>
                            <li class="nav-item "><Link to="/Service" class="nav-link">Service</Link></li>
                            <li class="nav-item "><Link to="/Our_Services" class="nav-link">Our Services</Link></li>
                            <li class="nav-item "><Link to="/Team" class="nav-link">Team</Link></li>
                            <li class="nav-item "><Link to="/Pricing" class="nav-link">Pricing</Link></li>
                            <li class="nav-item "><Link to="/Blog" class="nav-link">Blog</Link></li>
                            <li class="nav-item "><Link to="/Contact" class="nav-link">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
}

export default Header;
