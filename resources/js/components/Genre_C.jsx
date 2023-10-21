import React from "react";
import { Card } from "react-bootstrap";

export default function Genre_C(props) {
    const genreName = props.name;
    return (
        <div>
            <div style={{ padding: "5px" }}>
                <Card style={{ width: "14rem", height: "16rem" }}>
                    <Card.Img
                        src="images/pis.png"
                        alt=""
                        className="img_rounded_circle"
                    />
                    <Card.Text>{genreName}</Card.Text>
                </Card>
            </div>
        </div>
    );
}
