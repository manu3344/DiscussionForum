import React, { useContext } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Button, Form, Card, Row, Col } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Comments from "../Posts/Comments";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { getAuthorization } from 'passport-client'
import { UserContext } from "../../context/UserContext";

export default function PostsByTopics() {
    const { user } = useContext(UserContext)
    const [commentData, setCommentData] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [forumData, setForumData] = useState([]);

    const { id } = useParams();

        // Funcion para mostrar los temas en los posts
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

    //Funcion para mostrar los datos.
    useEffect(() => {
        const getComments = async () => {
            await axios
                .get(`http://localhost/forum/public/api/postsByTopics/${id}`) //"http://localhost:8000/20238/topicosWeb/api/user_index
                .then(function (response) {
                    //Handle success
                    console.log(response.data);
                    setCommentData(response.data);
                })
                .catch(function (error) {
                    //Handle Error
                    console.log(error);
                })
                .finally(function () {
                    //Always Executed
                });
        };
        getComments();
    }, []);

    //Function para borrar desde el frontend
    const handleDeleteComment = async (commentId) => {
        const updatedComments = commentData.filter(
            (comment) => comment.id !== commentId
        );
        const authorization = await getAuthorization()
        axios
            .delete(
                `http://localhost/forum/public/api/posts_delete/${commentId}`,
                {
                    headers: {
                        ...authorization
                    }
                }
            )
            .then(function (response) {
                setCommentData(updatedComments);
                alert("Comentario eliminado exitosamente");
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    //Funcion para obtener la categoria a la que pertenecen los temas.
    const getForumsName = (topicId) => {
        const topic = forumData.find((topic) => topic.id === topicId);
        return topic ? topic.title : "Desconocido";
    };

    const getForumsImage = (topicId) => {
    const topic = forumData.find((topic) => topic.id === topicId);
    return topic ? topic.image_path : "/forum/public/images/default-image.jpg";
};



    //Spinner
    if (!commentData.length) {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        );
    }

    return (
        <div>
            <div style={{ textAlign: "center" }}>
                <div className="col-lg-12">
                    <Form inline style={{ padding: "0 10px" }}>
                        <Row style={{ textAlign: "center" }}>
                            <Col xs="auto">
                                <Form.Control
                                    type="search"
                                    placeholder="Buscar Comentario"
                                    className=" mr-sm-2"
                                    onChange={(e) =>
                                        setSearchText(e.target.value)
                                    }
                                />
                            </Col>
                        </Row>
                    </Form>
                </div>
                <h1>Foro de Discusión</h1>
                <div className="middleContainer">
                    <Card>
                        <Card.Body>
                          <div>
                          <Card.Img
                          src={getForumsImage(commentData[0].topic_id)}
                          onError={(e) => { e.target.src = `/forum/public/${getForumsImage(commentData[0].topic_id)}`;}}
                          style={{
                                    maxHeight: "400px",
                                    maxWidth: "400px",
                                }}/>
                          </div>
                            <Card.Title>
                            {getForumsName(commentData[0].topic_id)}
                            </Card.Title>
                        </Card.Body>
                    </Card>
                    
                    <div>
                        <div>
                            <Link to={`/forum/public/postsForm/`}>
                                <Button type="submit" id="addCategories" style={{backgroundColor:"#E95793", border:"0.5px solid black"}}>
                                    <BsFillPlusCircleFill
                                        style={{ fontSize: "1.5rem" }}
                                    />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div style={{ textAlign: "center" }}>
                    {commentData
                        .filter((comment) =>
                            comment.postContent
                                .toLowerCase()
                                .includes(searchText.toLowerCase())
                        )
                        .map((comment) => (
                            <Comments
                                key={comment.id}
                                postContent={comment.postContent}
                                topicName={getForumsName(comment.topic_id)}
                                isOfTheUser={user?.id === comment.user_id}
                                onDeleteComment={handleDeleteComment}
                                commentId={comment.id}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
}
