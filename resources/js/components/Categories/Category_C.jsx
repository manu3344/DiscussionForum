import React from "react";
import { Card, Button } from "react-bootstrap";
import {BsPencilSquare, BsTrashFill} from "react-icons/bs"
import { Link } from "react-router-dom";

export default function Category_C(props) {
    
    const categoryName = props.name;
    const categoryImage = props.image_path; 
    const genreName = props.genreName;
    const categoryId = props.categoryId;
    const onDeleteCategories = props.onDeleteCategories;

    // Llama a la función de eliminación con el ID de la categoria. 
    const handleDeleteClick = () => {
        onDeleteCategories(categoryId);
      };

    return (
        <div style={{padding: "5px"}}>
            <Card style={{ width: "14rem", height:"16rem"}}>
                <Link to={`/forum/public/topicsByCategories/${categoryId}`}>
                <Card.Img
                    src={categoryImage}
                    alt={categoryName}
                    className="img_rounded_circle mb-auto"
                />
                </Link>

                <Card.Text className="mb-auto">{categoryName}</Card.Text>
                <Card.Text className="mb-auto">{"Genero: "+genreName}</Card.Text>
                
                <div className="row" style={{padding:"0 0 10px"}}>
                        <div className="col">
                            <Link to={`/forum/public/categoriesForm/${categoryId}`}>
                            <Button variant="warning"><BsPencilSquare /></Button>
                            </Link>
                        </div>
                        <div className="col">
                            <Button variant="danger" onClick={handleDeleteClick}><BsTrashFill /></Button>
                        </div>
                    </div>
            </Card>
        </div>
    );
}
