import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Spinner, Button, Form, Col, Row } from "react-bootstrap";
import { BsFillPlusCircleFill } from "react-icons/bs";
import Forum_C from "./Forum_C";
import axios from "axios";

export default function Forum() {
    const [forumData, setForumData] = useState([]);
    const [categoriesData, setCategoriesData] = useState([]);

    const [searchText, setSearchText] = useState("");

    // Funcion para mostrar los datos
    useEffect(() => {
        const getForums = async () => {
            await axios
                .get("http://localhost/forum/public/api/topic_index") //"http://localhost:8000/20238/topicosWeb/api/user_index
                .then(function (response) {
                    //Handle success
                    console.log(response.data);
                    setForumData(response.data);
                })
                .catch(function (error) {
                    //Handle Error
                    console.log(error);
                })
                .finally(function () {
                    //Always Executed
                });
        };
        getForums();
    }, []);

    //Funcion para mostrar las categorias de los temas. 
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

    //Funcion para obtener la categoria a la que pertenecen los temas.
const getCategoryName = (categoryId) => {
    const category = categoriesData.find((category) => category.id === categoryId);
    return category ? category.name : "Desconocido";
};

    // Funcion para borrar los datos
    const handleDeleteTopics = (topicId) => {
        const updatedTopics = forumData.filter((topic) => topic.id !== topicId);
        axios
            .delete(
                `http://localhost/forum/public/api/topics_delete/${topicId}`
            )
            .then(function (response) {
                setForumData(updatedTopics);
                alert("Tema eliminado exitosamente");
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    // Spinner
    if (!forumData.length) {
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
                    <div className="col-lg-12">
                        <Form inline style={{ padding: "0 10px" }}>
                            <Row style={{ textAlign: "center" }}>
                                <Col xs="auto">
                                    <Form.Control
                                        type="search"
                                        placeholder="Buscar Foro"
                                        className="mb-2 rounded-pill"
                                        onChange={(e) =>
                                            setSearchText(e.target.value)
                                        }
                                    />
                                </Col>
                            </Row>
                        </Form>
                    </div>
                    <div className="col-lg-12">
                        <h1>Foro de discusiones actuales</h1>
                    </div>
                    <div className="col-lg-12">
                        <a href="topicsForm">
                            <Button type="submit" id="addTopics">
                                <BsFillPlusCircleFill
                                    style={{ fontSize: "1.5rem" }}
                                />
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="card-group">
                {forumData
                    .filter((forum) =>
                        forum.title
                            .toLowerCase()
                            .includes(searchText.toLowerCase())
                    )
                    .map((forum) => (
                        <Forum_C
                            key={forum.id}
                            title={forum.title}
                            description={forum.description}
                            image_path={forum.image_path}
                            categories_id={forum.categories_id}
                            categoriesName={getCategoryName(forum.categories_id)}
                            onDeleteTopics={handleDeleteTopics}
                            topicId={forum.id}
                        />
                    ))}
            </div>
        </div>
    );
}
