import React from "react";
import Logo from './images/logo.png';


const Nav = () => {

    const removeClass = () => {

    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light px-2">
                <div className="container main-nav">
                    <a className="navbar-brand" href="#"><img src={Logo} className="" alt="logo" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <div className="d-flex ms-auto">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Announcements</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Meeting</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Account</a>
                                </li>
                                <li>
                                    <button className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal">Log in</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <div class="modal fade login-type-modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>Modal body text goes here.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Nav