import React from "react";
import { Link } from 'react-router-dom';
import logo from '../../../assets/img/CAFE AROMA.png';

function NavbarComponent(props) {

    let title = props.title;

    const onSuccess = (res) =>{
        console.log(res)
    }
    const onFail = (res) =>{
        console.log(res)
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light mb-3" style={{backgroundColor: "#EFC3A4"}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{title}</a>
                <img src={logo} alt="" width="125" height="82,18"/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/" className="nav-link active" aria-current="page">Login</Link>
                        <Link to="/ventas" className="nav-link">Ventas</Link>
                        <Link to="/productos" className="nav-link">Productos</Link>
                        <Link to="/usuarios" className="nav-link">Usuarios</Link>
                    </div>
                </div>
                <a className="btn btn-primary" href={"http://localhost:5000/api/users/google"}>
                    Iniciar sesión con google
                </a>
            </div>
        </nav>
    )
}


export default NavbarComponent;
