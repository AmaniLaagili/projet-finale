import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { postCommende } from "../../Redux/actions/commendeAction";
import { current } from "../../Redux/actions/user";

function ModaleValidation({ BigTotal }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const user = useSelector((state) => state.userReducer.user);
    const cart = useSelector((state) => state.userReducer.user.cart);
    var randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    var uniqid = randLetter + Date.now();
    const dispatch = useDispatch();
    var order = {
        title: cart.title,
        posterUrl: cart.posterUrl,
        description: cart.description,
        prix: cart.prix,
        prixPromotion: cart.prixPromotion,
        type: cart.type,
        quantity: cart.quantity,
    };
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Valider Votre Commande{" "}
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation de commande</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Vous allez recevoir votre commande dans quelques jours..
                </Modal.Body>
                <Modal.Body>Numéro de commande : {uniqid} </Modal.Body>
                <Modal.Body>Total : {BigTotal} </Modal.Body>
                <Modal.Footer>
                    {/* {() => {
                        dispatch(postCommende(user._id, cart));
                    }} */}
                    <Button
                        variant="secondary"
                        onClick={() => {
                            dispatch(postCommende(user._id, order));
                            // dispatch(current());
                            handleClose();
                        }}
                    >
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModaleValidation;
