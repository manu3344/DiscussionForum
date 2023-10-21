import React from "react";
import { Card } from "react-bootstrap";

export default function Forum_C(props) {
    const forumTitle = props.title;
    const forumDescription = props.description; 
    const forumCategory = props.categories_id;
    return (
      <div style={{padding:"5px"}}>
        <Card style={{ width: "16rem", height:"28rem" }}>
            <Card.Body>
                <Card.Img
                    src="images/kaguya.jpg"
                    style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Title style={{ height: "50px", marginBottom:"2.5rem"}}>
                    {forumTitle}
                </Card.Title>
                <Card.Text style={{ height: "100px" }}>
                    {forumDescription}
                </Card.Text>
                <Card.Text>{"Categoria: " + forumCategory}</Card.Text>
            </Card.Body>
        </Card>
      </div>

    );
}
