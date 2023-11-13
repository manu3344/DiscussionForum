import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

export default function GenresForm() {
    const [genreValue, setGenreValue] = useState({ name: "", image_path: "" });
    const navigate = useNavigate();
    const { id } = useParams(); //Obtener el ID del genero de la URL




    
    // Si el evento es de tipo file se actualiza el estado genreValue con el archivo seleccionado, si no con los valores de entrada.
    const onChange = (e) => {
        e.persist();
        if (e.target.type === "file") {
            setGenreValue({ ...genreValue, image_path: e.target.files[0] });
        } else {
            setGenreValue({ ...genreValue, [e.target.name]: e.target.value });
        }
    };

    // Funcion para anadir o editar  datos.
    const handleSubmit = (e) => {
        if (e && e.preventDefault()) e.preventDefault();
        const formData = new FormData();
        formData.append("name", genreValue.name);
        formData.append("image_path", genreValue.image_path);
        //Si no hay un id quiere decir que es la ruta de formulario normal, pero si si hay, entonces se editara un registro.
        if (!id) {
            axios
                .post(
                    "http://localhost/forum/public/api/genresForm",
                    formData,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                            Accept: "application/json",
                        },
                    }
                )
                .then((response) => {
                    console.log("response: ");
                    alert("Genero registrado correctamente");
                    console.log(response);
                    navigate("/forum/public/genres");  
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            axios
                .post(
                    `http://localhost/forum/public/api/genresForm/${id}`,
                    formData,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                            Accept: "application/json",
                        },
                    }
                )
                .then((response) => {
                    console.log("response: ");
                    alert("Genero actualizado correctamente");
                    console.log(response);
                    navigate("/forum/public/genres"); 
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };
    
    return (
        <div>
            <div className="containerBody">
                <h1 className="title">
                    {id ? "Editar Género" : "Agregar Género"}
                </h1>
                <div className="card cardForm">
                    <div className="card-body">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="form-group">
                                <Form.Label htmlFor="name">Nombre: </Form.Label>
                                <Form.Control
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    placeholder="Ingresa el nombre del género"
                                    required
                                    value={genreValue.name}
                                    onChange={onChange}
                                />
                            </Form.Group>
                            <Form.Group className="form-group">
                                <Form.Label htmlFor="image">
                                    Imagen:{" "}
                                </Form.Label>
                                <Form.Control
                                    type="file"
                                    name="image_path"
                                    accept="images/*"
                                    onChange={onChange}
                                />
                            </Form.Group>
                            <Form.Group className="form-group">
                                <div style={{padding: "15px 0px", textAlign: "center"}} >
                                    <div className="row">
                                        <div className="col">
                                            <Link to="#" onClick={()=>window.history.back()}>
                                                <Button variant="danger">
                                                    Cancelar
                                                </Button>
                                            </Link>
                                        </div>
                                        <div className="col">
                                            <Button type="submit" variant="dark" >
                                                {id ? "Guardar Cambios" : "Registrar Género"}
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