import React from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import "./Profile.css";
import { current } from "../../Redux/actions/user";

const Profile = () => {
    const user = useSelector((state) => state.userReducer.user);
    const dispatch = useDispatch();
    return (
        <div className="profile">
            <div className="row">
                <div className="col-lg-7 mx-auto text-white text-center pt-5"></div>
            </div>
            {/* End */}
            <div className="row">
                <div className="col-xl-8 col-md-6 col-sm-10 mx-auto">
                    {/* Profile widget */}
                    <div className="bg-white shadow rounded overflow-hidden">
                        <div className="px-4 pt-0 pb-4 bg-dark">
                            <div className="media align-items-end profile-header">
                                <div className="profile mr-3">
                                    <img
                                        src="https://d19m59y37dris4.cloudfront.net/university/1-1-1/img/teacher-4.jpg"
                                        alt="..."
                                        width={130}
                                        className="rounded mb-2 img-thumbnail"
                                    />
                                    <a
                                        href="#"
                                        className="btn btn-dark btn-sm btn-block"
                                    >
                                        <Link to="/editprofil">
                                            <button>Edit profile</button>
                                        </Link>
                                    </a>
                                    <Link to={`/order/${user._id}`}>
                                        {/*  <Link to={"/order"}>*/}
                                        <button
                                            onClick={() => dispatch(current())}
                                        >
                                            Voir Commande
                                        </button>
                                    </Link>
                                </div>

                                <div className="media-body mb-5 text-white">
                                    <h3 className="mt-0 mb-0">{user.name}</h3>
                                    <h4 className="small mb-4">
                                        {" "}
                                        <i className="fa fa-map-marker mr-2" />
                                        {user.email}
                                    </h4>{" "}
                                    <h4 className="small mb-4">
                                        {" "}
                                        <i class="fas fa-phone"></i>
                                        {user.phone}
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="bg-light p-4 d-flex justify-content-end text-center">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item">
                                    <h5 className="font-weight-bold mb-0 d-block"></h5>
                                    <small className="text-muted">
                                        {" "}
                                        <i className="fa fa-picture-o mr-1" />
                                    </small>
                                </li>
                                <li className="list-inline-item">
                                    <h5 className="font-weight-bold mb-0 d-block"></h5>
                                    <small className="text-muted">
                                        {" "}
                                        <i className="fa fa-user-circle-o mr-1" />
                                    </small>
                                </li>
                            </ul>
                        </div>
                        <div className="py-4 px-4">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <a
                                    href="#"
                                    className="btn btn-link text-muted"
                                ></a>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 mb-2 pr-lg-1">
                                    <img
                                        src="https://res.cloudinary.com/mhmd/image/upload/v1556294928/nicole-honeywill-546848-unsplash_ymprvp.jpg"
                                        alt=""
                                        className="img-fluid rounded shadow-sm"
                                    />
                                </div>
                                <div className="col-lg-6 mb-2 pl-lg-1">
                                    <img
                                        src="https://res.cloudinary.com/mhmd/image/upload/v1556294927/dose-juice-1184444-unsplash_bmbutn.jpg"
                                        alt=""
                                        className="img-fluid rounded shadow-sm"
                                    />
                                </div>
                                <div className="col-lg-6 pr-lg-1 mb-2">
                                    <img
                                        src="https://res.cloudinary.com/mhmd/image/upload/v1556294926/cody-davis-253925-unsplash_hsetv7.jpg"
                                        alt=""
                                        className="img-fluid rounded shadow-sm"
                                    />
                                </div>
                                <div className="col-lg-6 pl-lg-1">
                                    <img
                                        src="https://res.cloudinary.com/mhmd/image/upload/v1556294928/tim-foster-734470-unsplash_xqde00.jpg"
                                        alt=""
                                        className="img-fluid rounded shadow-sm"
                                    />
                                </div>
                            </div>
                            <div className="py-4">
                                <div className="p-4 bg-light rounded shadow-sm">
                                    <ul className="list-inline small text-muted mt-3 mb-0">
                                        <li className="list-inline-item">
                                            <i className="fa fa-comment-o mr-2" />
                                        </li>
                                        <li className="list-inline-item">
                                            <i className="fa fa-heart-o mr-2" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End profile widget */}
                </div>
            </div>
        </div>
    );
};

export default Profile;
