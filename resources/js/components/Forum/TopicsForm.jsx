import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams} from "react-router-dom";
import { Button, Form } from "react-bootstrap";

import { getAuthorization } from 'passport-client'

export default function TopicsForm() {
    const [topicsValue, setTopicsValue] = useState({
        title: "",
        description: "",
        image_path: "",
        categories_id: ""
    });
    const [categoriesData, setCategoriesData] = useState([]);

    const navigate = useNavigate();

    const { id } = useParams(); //Obtener el ID del tema de discusion de la URL


    const onChange = (e) => {
        e.persist();
        if(e.target.type==="file"){
            setTopicsValue({...topicsValue, image_path: e.target.files[0]});
        }else{
            setTopicsValue({ ...topicsValue, [e.target.name]: e.target.value });
        }
    };

    // Funcion para anadir datos.
    const handleSubmit = async (e) => {
        if (e && e.preventDefault()) e.preventDefault();

        const authorization = await getAuthorization()

        const formData = new FormData();
        formData.append("title", topicsValue.title);
        formData.append("description", topicsValue.description);
        formData.append("image_path", topicsValue.image_path)
        formData.append("categories_id", topicsValue.categories_id);

        if(!id){
            axios
            .post("http://localhost/forum/public/api/topicsForm", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Accept: "application/json",
                    ...authorization
                },
            })
            .then((response) => {
                console.log("response: ");
                alert("Tema registrado correctamente");
                console.log(response);
                window.history.back();
            })
            .catch((error) => {
                console.log(error);
            });
        }else{
            axios
            .post(`http://localhost/forum/public/api/topicsForm/${id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Accept: "application/json",
                    ...authorization
                },
            })
            .then((response) => {
                alert("Tema actualizado correctamente");
                console.log("response: ");
                console.log(response);
                window.history.back();
            })
            .catch((error) => {
                console.log(error);
            });
        }

    };

    // Funcion para mostrar las categorias a las que pertenecen los temas en el formulario
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

    return (
        <div>
            <div className="containerBody">
                <h1 className="title">{id?"Editar Tema de Discusión":"Agregar Tema de Discusión"}</h1>
                <div className="card cardForm">
                    <div className="card-body">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="form-group">
                                <Form.Label for="name">Título: </Form.Label>
                                <Form.Control
                                    type="text"
                                    className="form-control"
                                    name="title"
                                    placeholder="Ingresa el título del tema de discusión"
                                    required
                                    value={topicsValue.title}
                                    onChange={onChange}
                                />
                            </Form.Group>
                            <Form.Group className="form-group">
                                <p>Descripción</p>
                                <textarea
                                    name="description"
                                    id="description"
                                    cols="150"
                                    rows="10"
                                    maxLength="250"
                                    placeholder="Describe tu tema!!!"
                                    onResize="none"
                                    required
                                    value={topicsValue.description}
                                    onChange={onChange}
                                    style={{ maxWidth: "100%" }}
                                ></textarea>
                            </Form.Group>
                            <Form.Group className="form-group">
                                <Form.Label htmlFor="image">Imagen: </Form.Label>
                                <Form.Control
                                    type="file"
                                    name="image_path"
                                    accept="images/*"
                                    onChange={onChange}
                                />
                            </Form.Group>
                            <Form.Group className="form-group">
                                <Form.Label for="categories_id">
                                    Categoría
                                </Form.Label>
                                <Form.Control
                                    as="select"
                                    name="categories_id"
                                    value={topicsValue.categories_id}
                                    onChange={onChange}
                                >
                                    <option value="">
                                        Selecciona una categoría
                                    </option>
                                    {categoriesData.map((category) => (
                                        <option
                                            key={category.id}
                                            value={category.id}
                                        >
                                            {category.name}
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
                                            <Link to="#" onClick={()=>window.history.back()}>
                                                <Button variant="danger">
                                                    Cancelar
                                                </Button>
                                            </Link>
                                        </div>
                                        <div className="col">
                                            <Button
                                                type="submit"
                                                variant="dark"
                                            >
                                                {id?"Guardar cambios":"Registrar"}
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
