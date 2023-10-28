import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

export default function PostsForm() {

    const [forumData, setForumData] = useState([]); 

    const [postsValue, setPostsValue] = useState({
        postContent: "",
        topic_id: "",
    });
    const navigate = useNavigate();

    const onChange = (e) => {
        e.persist();
        setPostsValue({ ...postsValue, [e.target.name]: e.target.value });
    };

    // Funcion para anadir datos. 
    const handleSubmit = (e) => {
        if (e && e.preventDefault()) e.preventDefault();
        const formData = new FormData();
        formData.append("postContent", postsValue.postContent);
        formData.append("topic_id", postsValue.topic_id);
        axios
            .post("http://localhost/forum/public/api/postsForm", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Accept: "application/json",
                },
            })
            .then((response) => {
                console.log("response: ");
                console.log(response);
                navigate("/forum/public/posts");
            })
            .catch((error) => {
                console.log(error);
            });
    };



    // Funcion para mostrar los temas a los que pertenecen los comentarios en el formulario
    useEffect(()=>{ 
      const getForums = async () =>{
          await  axios.get("http://localhost/forum/public/api/topic_index")  //"http://localhost:8000/20238/topicosWeb/api/user_index
          .then(function(response){
              //Handle success
              console.log(response.data);
              setForumData(response.data);
          })
          .catch(function(error){
              //Handle Error
              console.log(error);
          })
          .finally(function(){
              //Always Executed
          });        
      };
      getForums();
  },[]);

    return (
        <div>
            <div className="containerBody">
                <h1 className="title">Agregar Comentario</h1>
                <div className="card cardForm">
                    <div className="card-body">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="form-group">
                                <Form.Label for="postContent">
                                    Comentario:{" "}
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    className="form-control"
                                    name="postContent"
                                    placeholder="Ingresa un comentario"
                                    required
                                    value={postsValue.postContent}
                                    onChange={onChange}
                                />
                            </Form.Group>
                            <Form.Group className="form-group">
                                <Form.Label for="topic_id">Tema</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="topic_id"
                                    value={postsValue.topic_id}
                                    onChange={onChange}
                                >
                                    <option value="">Selecciona un tema</option>
                                    {forumData.map((topic) => (
                                        <option key={topic.id} value={topic.id}>
                                            {topic.title}
                                        </option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <div
                                    style={{
                                        padding: "15px 0px",
                                        textAlign: "center",
                                    }}
                                >
                                    <div className="row">
                                        <div className="col">
                                            <a href="posts">
                                                <Button variant="danger">
                                                    Cancelar
                                                </Button>
                                            </a>
                                        </div>
                                        <div className="col">
                                            <Button
                                                type="submit"
                                                variant="dark"
                                            >
                                                Registrar
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Form.Group>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}
