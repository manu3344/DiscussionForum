import React from "react";
import { Card } from "react-bootstrap";

export default function Category_C(props) {
    const category = props.category;
    return (
        <div style={{padding: "0px 5px"}}>
            <Card style={{ width: "14rem", height:"14rem"}}>
                <Card.Img
                    src="images/rom.png"
                    alt=""
                    className="img_rounded_circle"
                />
                <Card.Text><p>{category.name}</p></Card.Text>
            </Card>
        </div>
    );
}
