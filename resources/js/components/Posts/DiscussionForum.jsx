import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Button, Form, Card } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Comments from "./Comments";
import { BsFillPlusCircleFill } from "react-icons/bs";

export default function DiscussionForum() {
    const [commentData, setCommentData] = useState([]);
    const [textAreaContent, setTextAreaContent] = useState("");
    const navigate = useNavigate();

    //Funcion para mostrar los datos.
    useEffect(() => {
        const getComments = async () => {
            await axios
                .get("http://localhost/forum/public/api/post_index") //"http://localhost:8000/20238/topicosWeb/api/user_index
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
    const handleDeleteComment = (commentId) => {
        const updatedComments = commentData.filter((comment) => comment.id !== commentId);
        axios.delete(`http://localhost/forum/public/api/posts_delete/${commentId}`)
        .then(function(response){
            setCommentData(updatedComments);
            alert("Comentario eliminado exitosamente");
        }).catch(function(error){
            console.log(error);
        });
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
                <h1>Foro de Discusión</h1>
                <div className="middleContainer">
                    <div className="sectionContainer">
                        <section className="sectionForum">
                            <img
                                src="images/hunter.jpg"
                                alt=""
                                className="imageForum"
                                style={{
                                    maxHeight: "400px",
                                    maxWidth: "400px",
                                }}
                            />
                        </section>
                    </div>

                    <Card
                        style={{
                            height: "400px",
                            maxHeight: "400px",
                            width: "20rem",
                            margin: "0 2rem",
                        }}
                    >
                        <Card.Body>
                            <Card.Title>Aqui ira el titulo del tema</Card.Title>
                            <Card.Text>
                                Aqui ira la descripcion del tema
                            </Card.Text>
                            <Card.Text>
                                Aqui ira a la categoria que pertenece
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <div>
                        <div>
                            <a href="postsForm">
                                <Button type="submit" id="addCategories">
                                    <BsFillPlusCircleFill
                                        style={{ fontSize: "1.5rem" }}
                                    />
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{ textAlign: "center" }}>
                    {commentData.map((comment) => (
                        <Comments
                            key={comment.id}
                            postContent={comment.postContent}
                            topic_id={comment.topic_id}
                            updateTextArea={setTextAreaContent}
                            onDeleteComment={handleDeleteComment}
                            commentId={comment.id}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
