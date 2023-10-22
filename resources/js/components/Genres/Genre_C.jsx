import React from "react";
import { Card, Button} from "react-bootstrap";
import {BsPencilSquare, BsTrashFill} from "react-icons/bs"

export default function Genre_C(props) {
    const genreName = props.name;

    const onDeleteGenres = props.onDeleteGenres;
    const genreId = props.genreId;

    const handleDeleteClick = () => {
        // Llama a la función de eliminación con el ID del comentario
        onDeleteGenres(genreId);
      };

    return (
        <div>
            <div style={{ padding: "5px" }}>
                <Card style={{ width: "14rem", height: "18rem" }}>
                    <Card.Img
                        src="images/pis.png"
                        alt=""
                        className="img_rounded_circle mb-auto"
                    />
                    <Card.Text className="mb-auto">{genreName}</Card.Text>
                    <div className="row" style={{padding:"0 0 10px"}}>
                        <div className="col">
                            <a href="genresForm">
                            <Button variant="warning"><BsPencilSquare /></Button>
                            </a>
                        </div>
                        <div className="col">
                            <Button variant="danger" onClick={handleDeleteClick}><BsTrashFill /></Button>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}
