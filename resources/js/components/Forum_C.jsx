import React from "react";
import { Card } from "react-bootstrap";

export default function Forum_C(props) {
    const forum = props.forum;
    return (
      <div>
        <Card style={{ width: "16rem", height:"28rem" }}>
            <Card.Body>
                <Card.Img
                    src="images/kaguya.jpg"
                    style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Title style={{ height: "50px", marginBottom:"2.5rem"}}>
                    {forum.title}
                </Card.Title>
                <Card.Text style={{ height: "100px" }}>
                    {forum.description}
                </Card.Text>
                <Card.Text>{"Categoria: " + forum.categories_id}</Card.Text>
            </Card.Body>
        </Card>
      </div>

    );
}
