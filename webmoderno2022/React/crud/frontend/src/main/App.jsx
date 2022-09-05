import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'

import { BrowserRouter } from "react-router-dom"
// O 'BrowserRouter' é o responsável por 'cuidar' das Rotas

import Logo from "../components/templates/Logo"
import Nav from "../components/templates/Nav"
import Routes from "./Routes"
import Footer from "../components/templates/Footer"

export default props =>
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>