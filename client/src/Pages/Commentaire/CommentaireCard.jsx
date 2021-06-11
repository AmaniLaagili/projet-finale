import React from "react";
import { Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
function CommentaireCard() {
    const commentaire = useSelector(
        (state) => state.commentaireReducer.commentaires
    );

    const user = useSelector((state) => state.userReducer.user);
    return (
        <div>
            <Card style={{ width: "18rem" }}>
                <Card.Body>
                    <Card.Text>
                        {/*  {user.name} : {commentaire.text}*/}
                        {commentaire.text}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default CommentaireCard;
