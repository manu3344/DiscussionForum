import React from "react";
import { Card, Button} from "react-bootstrap";
import {BsPencilSquare, BsTrashFill} from "react-icons/bs"
import { Link } from "react-router-dom";

export default function Genre_C(props) {

    //Props
    const genreName = props.name;
    const genreImage = props.image_path;
    const genreId = props.genreId;
    const isOfTheUser = props.isOfTheUser;
    const onDeleteGenres = props.onDeleteGenres;

    // Funcion para borrar segun el ID solicitado.
    const handleDeleteClick = () => {
        onDeleteGenres(genreId);
      };

    return (
        <div>
            <div style={{ padding: "5px" }}>
                <Card style={{ width: "14rem", height: "18rem" }}>
                    <Link to={`/forum/public/categoriesByGenres/${genreId}`}>
                    <Card.Img
                        src={genreImage}
                        alt={genreName}
                        className="img_rounded_circle mb-auto"
                    />
                    </Link>

                    <Card.Text className="mb-auto">{genreName}</Card.Text>
                    
                    {isOfTheUser && (
                        <div className="row" style={{padding:"0 0 10px"}}>
                            <div className="col">
                                <Link to={`/forum/public/genresForm/${genreId}`}>
                                <Button variant="warning"><BsPencilSquare /></Button>
                                </Link>
                            </div>
                            <div className="col">
                                <Button variant="danger" onClick={handleDeleteClick}><BsTrashFill /></Button>
                            </div>
                        </div>
                    )}
                </Card>
            </div>
        </div>
    );
}
