import React, { useState } from 'react';

export default function Navbar(props) {
   

    return (

        // <!-- NAVBAR  -->
        <>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <div className="container-fluid">
                    <a className="navbar-brand font-italic  border  border-warning border-top-0 border-bottom-0  p-2 text-warning" href="#">{props.heading}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            {/* <!-- LIST ITEMS  --> */}
                            <li className="nav-item">
                                <a className="nav-link  active " aria-current="page" href="#">{props.item1}</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link " href="#">{props.item2}</a>
                            </li>
                            {/* Dropdown  */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    {props.item3Dropdown}
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Indian</a></li>
                                    <li><a className="dropdown-item" href="#">Indo-Chinese</a></li>
                                    <li><a className="dropdown-item" href="#">South Indian</a></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><a className="dropdown-item" href="#">Submit a Recipe</a></li>
                                    <li><a className="dropdown-item bg-light  " href="#">
                                        <button type="button" class="btn btn-success position-relative"> Support Us <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                                            Buy Me A Coffee
                                        </span>
                                        </button>
                                    </a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href=""> {props.item4}</a>
                            </li>
                        </ul>
                        {/* <!-- SEARCH BAR  --> */}
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        {/* <!-- login sign up  --> */}
                        <div className="btn btn-danger mx-2  pb-2  " data-bs-toggle="modal" data-bs-target="#loginmodal">LOGIN</div>
                        <div className="btn btn-danger mx-2 pb-2 " data-bs-toggle="modal" data-bs-target="#signupmodal">SIGN UP</div>
                    </div>
                </div>
            </nav>


            {/* <!-- LOGIN MODAL  --> */}
            <div className="modal fade" id="loginmodal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                aria-labelledby="loginmodal" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="loginmodal">Log In</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {/* <!-- form  --> */}
                            <form>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else,your
                                        data is safe with us.</div>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" for="exampleCheck1">Show password</label>
                                </div>
                                <button type="submit" className="btn btn-primary">LogIn</button>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                        </div>
                    </div>
                </div>
            </div>



            {/* <!-- SIGN UP MODAL  --> */}
            <div className="modal fade" id="signupmodal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                aria-labelledby="signupmodal" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="signupmodal">Sign Up</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {/* <!-- form 
                 --> */}
                            <form>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" placeholder="Enter your email" className="form-control"
                                        id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else,your
                                        data is safe with us.</div>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Setup Password</label>
                                    <input type="password" className="form-control"
                                        placeholder="Password shoud not include @ ,*,& or any special characters"
                                        id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputConfirmPassword1" className="form-label">Confirm Password</label>
                                    <input type="password" placeholder="Enter your password again" className="form-control"

                                        id="exampleInputConfirmPassword1" />
                                </div>

                                <button type="submit" className="btn btn-primary">Create Account</button>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-toggle="modal"
                                data-bs-target="#loginmodal">LogIn</button>

                        </div>
                    </div>
                </div>
            </div>
        </>

    )

}