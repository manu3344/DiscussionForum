import React from "react";
import { Card, Button} from "react-bootstrap";
import {BsPencilSquare, BsTrashFill} from "react-icons/bs"

export default function Genre_C(props) {

    const genreName = props.name;
    const genreImage = props.image_path; 
    const genreId = props.genreId;
    const onDeleteGenres = props.onDeleteGenres;

    // Funcion que llama la funcion para borrar segun el id solicitado. 
    const handleDeleteClick = () => {
        onDeleteGenres(genreId);
      };

    return (
        <div>
            <div style={{ padding: "5px" }}>
                <Card style={{ width: "14rem", height: "18rem" }}>
                    <Card.Img
                        src={genreImage}
                        alt={genreName}
                        className="img_rounded_circle mb-auto"
                    />
                    <Card.Text className="mb-auto">{genreName}</Card.Text>
                    <div className="row" style={{padding:"0 0 10px"}}>
                        <div className="col">
                            <a href={`genresForm/${genreId}`}>
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
