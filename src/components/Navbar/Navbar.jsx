import React from 'react'
import { useState } from 'react';

//importar CSS do boostrap ANTES do CSS próprio para sobreescrever caso necessário
import 'bootstrap/dist/css/bootstrap.min.css'

import './Navbar.css'
import logo from '/src/media/sweethomefav.png'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar border-bottom">
                <div className="logoContainer d-flex justify-content-center mx-sm-4 mx-auto justify-content-sm-start align-items-center col-sm-5">
                    <a href="/" className="navLogo">
                        <img src={logo} alt="Logo" className="navLogo" />
                    </a>
                </div>
                <div className="navButtonsContainer d-none d-sm-flex align-items-center justify-content-end">
                    <a href="#" className="link fw-bold">
                        Seja um anfitrião
                    </a>
                    <a href="#" className="icon-nav">
                        <i className="mdi mdi-web"></i>
                    </a>
                    <div className="dropdown">
                        <button className="dropdownbtn" href="#" role="button" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                            <i className="position-relative fs-2 mdi mdi-account-circle">
                                <span className="position-absolute start-80 translate-middle badge border border-light rounded-circle bg-danger p-2"><span className="visually-hidden">Mensagens não lidas</span></span>
                            </i>
                            <i className="fs-5 mdi mdi-menu"></i>
                        </button>

                        <ul style={{ borderRadius: '15px' }} className="dropdown-menu dropdown-menu-end mt-2 py-3 shadow border-0">
                            <li><a className="dropdown-item fw-bold" href="/Registro">Cadastre-se</a></li>
                            <li><a className="dropdown-item" href="#">Entrar</a></li>
                            <li> <hr className="dropdown-divider" /> </li>
                            <li><a className="dropdown-item" href="#">Hospede em sua acomodação</a></li>
                            <li><a className="dropdown-item" href="#">Hospede uma experiência</a></li>
                            <li><a className="dropdown-item" href="#">Ajuda</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <nav id="mobileNav" className="navbarmobile border px-4 d-flex d-sm-none align-items-center justify-content-between">
                <div id="1" className='mobilebuttons-container'>
                    <a href="#" className="dropdownmobilebuttons">
                        <i className="mobileicons mdi mdi-compass dropdownmobilebuttons"></i>
                        <span className="mobileicontext"> Localizar </span>
                    </a>
                </div>
                <div className="mobilebuttons-container">
                    <a href="#" id="2" className="dropdownmobilebuttons">
                        <i className="mobileicons mdi mdi-heart dropdownmobilebuttons"></i>
                        <span className="mobileicontext"> Favoritos </span>
                    </a>
                </div>
                <div className='dropup mobilebuttons-container'>
                    <a href="#" id="3" className="dropdownmobilebuttons" href="#" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                        <i className="mobileicons mdi mdi-account-circle"></i>
                        <span className="mobileicontext"> Conta </span>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end dropup mt-2 py-3 shadow border-0">
                        <li><a className="dropdown-item fw-bold" href="/Registro">Cadastre-se</a></li>
                        <li><a className="dropdown-item" href="#">Entrar</a></li>
                        <li> <hr className="dropdown-divider" /> </li>
                        <li><a className="dropdown-item" href="#">Hospede em sua acomodação</a></li>
                        <li><a className="dropdown-item" href="#">Hospede uma experiência</a></li>
                        <li><a className="dropdown-item" href="#">Ajuda</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
