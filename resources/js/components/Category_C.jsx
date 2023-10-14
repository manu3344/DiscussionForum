import React from "react";
import { Card } from "react-bootstrap";

export default function Category_C(props) {
    const category = props.category;
    return (
        <div>
        <div className="row">
            <div className="col">
            <div className="rounded-circle">
                    <img
                      src="images/rom.png"
                      alt=""
                      className="img_rounded_circle"
                    />
                  </div>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <p>{category.name}</p>
            </div>
        </div>
        </div>
    );
}
