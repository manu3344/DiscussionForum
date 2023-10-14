import React from "react";
import { Card } from "react-bootstrap";

export default function Forum_C(props) {
    const forum = props.forum;
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            
          <Card.Img src="images/kaguya.jpg"/>
          <Card.Title>{forum.title}</Card.Title>
          <Card.Text>{forum.description}</Card.Text>
          <Card.Text>{"Categoria: "+forum.categories_id}</Card.Text>
        </Card.Body>
      </Card>
    );
}