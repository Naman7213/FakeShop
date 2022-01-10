import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
    const state = useSelector((state)=>state.handleCart)
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow bg-body">
                <div className="container-fluid">
                    <a className="navbar-brand fs-2 fw-bolder" href="www.google.com"><i className="fas fa-shopping-basket"></i> FakeShop</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link fs-5" activeclassame="active_class" aria-current="page" to="/latest" exact>Latest</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link fs-5" activeclassame="active_class" to="/cart" exact>Cart</NavLink>
                            </li>
                        </ul>
                        <button className="btn btn-outline-dark me-2"><i className="fas fa-sign-in-alt"></i> Login</button>
                        <button className="btn btn-outline-dark me-2"><i className="fas fa-user-plus"></i> SignUp</button>
                        <button className="btn btn-outline-dark me-2"><i className="fas fa-shopping-cart"></i> Cart ({state.length})</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;