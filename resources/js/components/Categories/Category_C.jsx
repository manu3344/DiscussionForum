import React from "react";
import { Card, Button } from "react-bootstrap";
import {BsPencilSquare, BsTrashFill} from "react-icons/bs"

export default function Category_C(props) {
    const categoryName = props.name;
    const categoryGenre = props.genre_id;
    return (
        <div style={{padding: "5px"}}>
            <Card style={{ width: "14rem", height:"16rem"}}>
                <Card.Img
                    src="images/rom.png"
                    alt=""
                    className="img_rounded_circle mb-auto"
                />
                <Card.Text className="mb-auto">{categoryName}</Card.Text>
                <Card.Text className="mb-auto">{"Genero: "+categoryGenre}</Card.Text>
                <div className="row" style={{padding:"0 0 10px"}}>
                        <div className="col">
                            <a href="categoriesForm">
                            <Button variant="warning"><BsPencilSquare /></Button>
                            </a>
                        </div>
                        <div className="col">
                            <Button variant="danger"><BsTrashFill /></Button>
                        </div>
                    </div>
            </Card>
        </div>
    );
}
