import React, { useContext } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Button, Form, Card, Row, Col} from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import Comments from "./Comments";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { getAuthorization } from "passport-client";

export default function DiscussionForum() {
    const { user } = useContext(UserContext)
    const [commentData, setCommentData] = useState([]);
    const [textAreaContent, setTextAreaContent] = useState("");
    const [searchText, setSearchText] = useState("");
    const [forumData, setForumData] = useState([]);

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

    const handleDeleteComment = async (commentId) => {
        const updatedComments = commentData.filter((comment) => comment.id !== commentId);
        const authorization = await getAuthorization()

        axios.delete(`http://localhost/forum/public/api/posts_delete/${commentId}`, {
            headers: {
                ...authorization
            }
        })
            .then(function(response){
                setCommentData(updatedComments);
                alert("Comentario eliminado exitosamente");
            }).catch(function(error){
                console.log(error);
            });
    };

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
        };

        getForums();
    }, []);

    const getForumsName = (topicId) => {
        const topic = forumData.find((topic) => topic.id === topicId);
        return topic ? topic.title : "Desconocido";
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
                                    className="mb-2 rounded-pill"
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
                    {commentData.filter((comment =>
                        comment.postContent.toLowerCase().includes(searchText.toLowerCase())
                    ))
                    .map((comment) => (
                        <Comments
                            key={comment.id}
                            postContent={comment.postContent}
                            topicName={getForumsName(comment.topic_id)}
                            updateTextArea={setTextAreaContent}
                            onDeleteComment={handleDeleteComment}
                            commentId={comment.id}
                            isOfTheUser={user?.id === comment.user_id}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
