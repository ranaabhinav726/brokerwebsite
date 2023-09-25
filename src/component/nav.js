import React from "react";
import Logo from './images/logo.png';
import LoginImg from './images/login1.png';
import UserIcon from './images/user.png';
import CloseEye from './images/closeEye.png';


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
                                    <a className="nav-link" href="/about">About Us</a>
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
            <div className="modal fade login-type-modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                Welcome to <span className="primary-text">Bokkerspot</span>
                            </h5>
                        </div>
                        <div className="modal-body text-center">
                            <img src={LoginImg} alt="" />
                            <div className="login-btns">
                                <button type="button" className="btn mt-2" data-bs-toggle="modal" data-bs-target="#separateLogin">BUYER/ SELLER</button>
                                <br />
                                <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#separateLogin">BROKER</button>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <p className="small"><span className="red-txt">Note : </span>Lorem ipsum dolor sit amet, consectetur adipscin
                                gelit. Curabitur facilisis nibh tristique luctus posu
                                ere.Duis eget nisl ex. </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* //////////////////////////////////////////SEPARATE LOGIN//////////////////////////// */}
            <div className="modal fade main-login-modal" id="separateLogin" tabindex="-1" aria-labelledby="separateLoginLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title primary-text">
                                Broker Login
                            </h5>
                            <div>
                                <p className="small">Don’t have an Account? <span className="primary-text">Sign Up</span></p>
                            </div>
                        </div>
                        <div className="modal-body">

                            <div className="input-boxes">
                                <div class="input-group mb-3">
                                    <input type="text" class="i-p form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon2" />
                                    <span class="input-group-text" id="basic-addon2"><img src={UserIcon} alt="" /></span>
                                </div>
                                <div class="input-group mb-3">
                                    <input type="text" class="i-p form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon2" />
                                    <span class="input-group-text" id="basic-addon2"><img src={CloseEye} alt="" /></span>
                                </div>
                                <div className="d-flex">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label small" for="flexCheckDefault">
                                        &nbsp;Remember me  </label>
                                </div>
                                <p className="small mb-0">Forgot Password?</p>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                        <button type="button" className="btn">Login</button>
                            <p className="small mt-3"><span className="primary-text">Need more help?</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Nav