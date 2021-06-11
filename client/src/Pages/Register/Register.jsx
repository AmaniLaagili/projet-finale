import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../Redux/actions/user";
import "./Register.css";
const Register = ({ history }) => {
    const [user, setUser] = useState({});

    const dispatch = useDispatch();
    const handleRegister = (e) => {
        e.preventDefault();
        dispatch(register(user, history));
    };

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    return (
        <div>
            <div class="container px-4 py-5 mx-auto">
                <div class="card card0">
                    <div class="d-flex flex-lg-row flex-column-reverse">
                        <div class="card card1">
                            <div class="row justify-content-center my-auto">
                                <div class="col-md-8 col-10 my-5">
                                    <form>
                                        <div class="row justify-content-center px-3 mb-3">
                                            {" "}
                                        </div>

                                        <h6 class="msg-info">
                                            Please Create an account
                                        </h6>

                                        <div class="form-group">
                                            {" "}
                                            <label class="form-control-label text-muted">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                id="text"
                                                name="name"
                                                placeholder="Name"
                                                class="form-control"
                                                required
                                                onChange={handleChange}
                                            />
                                            <label class="form-control-label text-muted">
                                                Email address
                                            </label>{" "}
                                            <input
                                                type="text"
                                                id="email"
                                                name="email"
                                                placeholder="Phone no or email id"
                                                class="form-control"
                                                required
                                                onChange={handleChange}
                                            />{" "}
                                        </div>
                                        <div class="form-group">
                                            {" "}
                                            <label class="form-control-label text-muted">
                                                Password
                                            </label>{" "}
                                            <input
                                                type="password"
                                                id="psw"
                                                name="password"
                                                placeholder="Password"
                                                class="form-control"
                                                required
                                                onChange={handleChange}
                                            />{" "}
                                            <label class="form-control-label text-muted">
                                                Phone Number
                                            </label>
                                            <input
                                                type="number"
                                                id="number"
                                                name="phone"
                                                placeholder="Phone Number"
                                                class="form-control"
                                                required
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div class="row justify-content-center my-3 px-3">
                                            {" "}
                                            <button
                                                class="btn-block btn-color"
                                                onClick={handleRegister}
                                            >
                                                Singn Up
                                            </button>{" "}
                                        </div>
                                        <div class="row justify-content-center my-2">
                                            {" "}
                                            <a href="#">
                                                <small class="text-muted">
                                                    Forgot Password?
                                                </small>
                                            </a>{" "}
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="bottom text-center mb-5">
                                <p href="#" class="sm-text mx-auto mb-3">
                                    Don't have an account?
                                    <button class="btn btn-white ml-2">
                                        Create new
                                    </button>
                                </p>
                            </div>
                        </div>

                        <div class="card card2">
                            <div class="my-auto mx-md-5 px-md-5 right">
                                <h3 class="text-white"></h3>{" "}
                                <small class="text-white"></small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
