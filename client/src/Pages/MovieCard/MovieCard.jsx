import React from "react";
import { Card, Button } from "react-bootstrap";
function MovieCard({ produitData }) {
    return (
        <div>
            <Card style={{ width: "18rem" }}>
                <Card.Img
                    variant="top"
                    src={produitData.posterUrl}
                    height="60%"
                />
                <Card.Body>
                    <Card.Title>{produitData.title}</Card.Title>

                    <Card.Text>{produitData.description}</Card.Text>
                    <Card.Text>{produitData.prix}</Card.Text>
                    <Card.Text>{produitData.type}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="primary" width="100%">
                        View
                    </Button>
                </Card.Footer>
            </Card>
        </div>
    );
}

export default MovieCard;
