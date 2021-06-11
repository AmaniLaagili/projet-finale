import React from "react";
import {
    Nav,
    Form,
    FormControl,
    Button,
    Navbar,
    NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { current, logout } from "../../Redux/actions/user";
import "./MyNavbar.css";
function MyNavbar() {
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.userReducer.isAuth);
    const user = useSelector((state) => state.userReducer.user);

    return (
        <div className="navuser">
            <Navbar bg="white" variant="" className="navbar">
                <Navbar.Brand href="#home" style={{ color: "red" }}>
                    <Link to="/" style={{ color: "black", fontWeight: "bold" }}>
                        EasyLunettes
                    </Link>
                </Navbar.Brand>
                <Navbar.Brand>
                    <Link
                        to="/home"
                        style={{ color: "black", fontWeight: "bold" }}
                    >
                        ACCUEIL
                    </Link>
                </Navbar.Brand>
                <Navbar.Brand>
                    <Link
                        to="/lunettesoleil"
                        style={{ color: "black", fontWeight: "bold" }}
                    >
                        LUNETTES DE SOLEIL
                    </Link>
                </Navbar.Brand>
                <Navbar.Brand>
                    <Link
                        to="/lunettesvue"
                        style={{ color: "black", fontWeight: "bold" }}
                    >
                        LUNETTES DE VUE
                    </Link>
                </Navbar.Brand>
                <Navbar.Brand>
                    <Link
                        to="/lentilles"
                        style={{ color: "black", fontWeight: "bold" }}
                    >
                        LENTILLES
                    </Link>
                </Navbar.Brand>
                <Navbar.Brand>
                    <Link
                        to="/promotion"
                        style={{ color: "black", fontWeight: "bold" }}
                    >
                        PROMOTION
                    </Link>
                </Navbar.Brand>
                <Navbar.Brand>
                    <Link
                        to="/profile"
                        style={{ color: "black", fontWeight: "bold" }}
                    >
                        PROFILE
                    </Link>
                </Navbar.Brand>

                {/*hhhhhhhhhhhhhhhhhhhhhhhhhhhh */}

                {/*hhhhhhhhhhhhhhhhhhhhhhhhhhhh */}
                <Nav className="mr-auto">
                    {/*} <Nav.Link href="#home">
                        <Link to="/lunettesoleil">LUNETTES DE SOLEIL</Link>
    </Nav.Link>*/}
                    {/*}  <Nav.Link href="#features">
                        <Link to="/lunettesvue">LUNETTES DE VUE</Link>
</Nav.Link>*/}
                    {/*}  <Nav.Link href="#pricing">
                        <Link to="/lentilles">LENTILLES</Link>
</Nav.Link>*/}
                    {/*}   <Nav.Link href="#pricing">
                        <Link to="/promotion">PROMOTION</Link>
</Nav.Link>*/}
                    {/*}  <Nav.Link href="#pricing">
                        <Link to="/profile">PROFILE</Link>
</Nav.Link>*/}

                    {isAuth ? (
                        <ul>
                            <Navbar.Brand>
                                <Link
                                    to="/"
                                    style={{
                                        color: "black",
                                        fontWeight: "bold",
                                    }}
                                >
                                    <li onClick={() => dispatch(logout())}>
                                        LOGOUT
                                    </li>
                                </Link>
                            </Navbar.Brand>
                            {/*}  <Nav.Link href="#pricing">
                                <Link to="/order">
                                    <span onClick={() => dispatch(current())}>
                                        Order
                                    </span>
                                </Link>
                    </Nav.Link>*/}
                        </ul>
                    ) : (
                        <div>
                            <Navbar.Brand>
                                <Link
                                    to="/register"
                                    style={{
                                        color: "black",
                                        fontWeight: "bold",
                                    }}
                                >
                                    REGISTER
                                </Link>
                            </Navbar.Brand>
                            <Navbar.Brand>
                                <Link
                                    to="/login"
                                    style={{
                                        color: "black",
                                        fontWeight: "bold",
                                    }}
                                >
                                    LOGIN
                                </Link>
                            </Navbar.Brand>
                            {/* {isAuth && user.isAdmin ? ( */}

                            {/* ) : null} */}
                        </div>
                    )}
                </Nav>
            </Navbar>
        </div>
    );
}

export default MyNavbar;
