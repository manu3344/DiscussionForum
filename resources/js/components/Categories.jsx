import React, { useEffect, useState } from "react";
import { Spinner, Button } from "react-bootstrap";
import { BsFillPlusCircleFill } from "react-icons/bs";
import Category_C from "./Category_C";
import axios from "axios";

export default function Categories() {
    const [categoriesData, setCategoriesData] = useState([]);

    useEffect(() => {
        const getCategories = async () => {
            await axios
                .get("http://localhost/forum/public/api/categories_index") //"http://localhost:8000/20238/topicosWeb/api/user_index
                .then(function (response) {
                    //Handle success
                    console.log(response.data);
                    setCategoriesData(response.data);
                })
                .catch(function (error) {
                    //Handle Error
                    console.log(error);
                })
                .finally(function () {
                    //Always Executed
                });
        };
        getCategories();
    }, []);

    if (!categoriesData.length) {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        );
    }

    return (
        <div>
            <div style={{ textAlign: "center" }}>
                <div className="row">
                    <div className="col=lg-12">
                        <h1>Categorias</h1>
                    </div>
                    <div className="col-lg-12">
                        <a href="categoriesForm">
                            <Button type="submit" id="addCategories">
                                <BsFillPlusCircleFill
                                    style={{ fontSize: "1.5rem" }}
                                />
                            </Button>
                        </a>
                    </div>
                </div>
                <div className="card-group">
                    {categoriesData.map((category) => (
                        <Category_C
                            key={category.id}
                            name={category.name}
                            genre_id={category.genre_id}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
