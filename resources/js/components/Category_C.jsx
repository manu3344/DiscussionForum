import React from "react";
import { Card } from "react-bootstrap";

export default function Category_C(props) {
    const categoryName = props.name;
    const categoryGenre = props.genre_id;
    return (
        <div style={{padding: "0px 5px"}}>
            <Card style={{ width: "14rem", height:"16rem"}}>
                <Card.Img
                    src="images/rom.png"
                    alt=""
                    className="img_rounded_circle"
                />
                <Card.Text>{categoryName}</Card.Text>
                <Card.Text>{"Genero: "+categoryGenre}</Card.Text>

            </Card>
        </div>
    );
}
