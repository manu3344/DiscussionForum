import React from "react";
import { Card, Button } from "react-bootstrap";
import {BsPencilSquare, BsTrashFill} from "react-icons/bs"


export default function Forum_C(props) {
    const forumTitle = props.title;
    const forumDescription = props.description; 
    const forumCategory = props.categories_id;

    const onDeleteTopics = props.onDeleteTopics;
    const topicId = props.topicId;

    const handleDeleteClick = () => {
        // Llama a la función de eliminación con el ID del comentario
        onDeleteTopics(topicId);
      };

    return (
      <div style={{padding:"5px"}}>
        <Card style={{ width: "16rem", height:"28rem" }}>
            <Card.Body className="d-flex flex-column">
                <Card.Img
                    src="images/kaguya.jpg"
                    style={{ height: "200px", objectFit: "cover" }}
                    className="mb-auto"
                />
                <Card.Title className="mb-auto">
                    {forumTitle}
                </Card.Title>
                <Card.Text className="mb-auto" >
                    {forumDescription}
                </Card.Text>
                <Card.Text className="mb-auto">{"Categoria: " + forumCategory}</Card.Text>
                <div className="row" style={{padding:"0 0 10px"}}>
                        <div className="col">
                            <a href="topicsForm">
                            <Button variant="warning"><BsPencilSquare /></Button>
                            </a>
                        </div>
                        <div className="col">
                            <Button variant="danger" onClick={handleDeleteClick}><BsTrashFill /></Button>
                        </div>
                    </div>
            </Card.Body>
        </Card>
      </div>

    );
}
