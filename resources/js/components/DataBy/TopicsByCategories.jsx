import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Spinner, Button, Form, Col, Row } from "react-bootstrap";
import { BsFillPlusCircleFill } from "react-icons/bs";
import Forum_C from "../Forum/Forum_C";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { getAuthorization } from 'passport-client'
import { UserContext } from "../../context/UserContext";

export default function TopicsByCategories() {
    const { user } = useContext(UserContext)
    const [forumData, setForumData] = useState([]);
    const [categoriesData, setCategoriesData] = useState([]);

    const [searchText, setSearchText] = useState("");

    const {id} = useParams();

    // Funcion para mostrar los datos
    useEffect(() => {
        const getForums = async () => {
            await axios
                .get(`http://localhost/forum/public/api/topicsByCategories/${id}`) //"http://localhost:8000/20238/topicosWeb/api/user_index
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
    const handleDeleteTopics = async (topicId) => {
        const updatedTopics = forumData.filter((topic) => topic.id !== topicId);
        const authorization = await getAuthorization()
        axios
            .delete(
                `http://localhost/forum/public/api/topics_delete/${topicId}`,
                {
                    headers: {
                        ...authorization
                    }
                }
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
                                        className=" mr-sm-2"
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
                        <Link to="/forum/public/topicsForm">
                            <Button type="submit" id="addTopics" style={{backgroundColor:"#E95793", border:"0.5px solid black"}}>
                                <BsFillPlusCircleFill
                                    style={{ fontSize: "1.5rem" }}
                                />
                            </Button>
                        </Link>
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
                            isOfTheUser={user?.id === forum.user_id}
                        />
                    ))}
            </div>
        </div>
    );
}
