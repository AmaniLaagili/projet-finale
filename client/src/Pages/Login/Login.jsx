import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Errors from "../../Components/Errors/Errors";
import { videErrors } from "../../Redux/actions/user";

import { login } from "../../Redux/actions/user";
import "./Login.css";
const Login = ({ history }) => {
    const [user, setUser] = useState({});
    const errors = useSelector((state) => state.userReducer.errors);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(login(user, history));
    };
    useEffect(() => {
        return () => {
            dispatch(videErrors());
        };
    }, []);
    return (
        <div>
            <div class="container px-4 py-5 mx-auto">
                <div class="card card0">
                    <div class="d-flex flex-lg-row flex-column-reverse">
                        <div class="card card1">
                            <div class="row justify-content-center my-auto">
                                <div class="col-md-8 col-10 my-5">
                                    <div class="row justify-content-center px-3 mb-3">
                                        {errors.length > 0
                                            ? errors.map((el) => (
                                                  <Errors error={el} />
                                              ))
                                            : null}{" "}
                                    </div>
                                    <h3 class="mb-5 text-center heading"></h3>
                                    <h6 class="msg-info">
                                        Please login to your account
                                    </h6>
                                    <div class="form-group">
                                        {" "}
                                        <label class="form-control-label text-muted">
                                            Username
                                        </label>{" "}
                                        <input
                                            type="text"
                                            id="email"
                                            name="email"
                                            placeholder="Phone no or email id"
                                            class="form-control"
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
                                            onChange={handleChange}
                                        />{" "}
                                    </div>
                                    <div class="row justify-content-center my-3 px-3">
                                        {" "}
                                        <button
                                            class="btn-block btn-color"
                                            onClick={handleLogin}
                                        >
                                            Login
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

export default Login;
