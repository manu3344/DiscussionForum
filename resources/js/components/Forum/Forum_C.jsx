import React from "react";
import { Card, Button } from "react-bootstrap";
import {BsPencilSquare, BsTrashFill} from "react-icons/bs"
import { Link } from "react-router-dom";


export default function Forum_C(props) {
    const forumTitle = props.title;
    const forumDescription = props.description; 
    const topicImage = props.image_path;
    const forumCategory = props.categoriesName;

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
                <Link to={`/forum/public/postsByTopics/${topicId}`}>
                <Card.Img
                    src={topicImage}
                    onError={(e) => { e.target.src = `/forum/public/${topicImage}`;}}
                    alt={forumTitle}
                    style={{ height: "200px", objectFit: "cover" }}
                    className="mb-auto"
                />
                </Link>

                <Card.Title className="mb-auto">
                    {forumTitle}
                </Card.Title>
                <Card.Text className="mb-auto" >
                    {forumDescription}
                </Card.Text>
                <Card.Text className="mb-auto">{"Categoria: " + forumCategory}</Card.Text>
                <div className="row" style={{padding:"0 0 10px"}}>
                        <div className="col">
                            <Link to={`/forum/public/topicsForm/${topicId}`}>
                            <Button variant="warning"><BsPencilSquare /></Button>
                            </Link>
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
