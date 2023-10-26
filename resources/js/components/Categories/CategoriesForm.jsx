import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

export default function CategoriesForm() {
    const [categoriesValue, setCategoriesValue] = useState({
        name: "",
        genre_id: "",
    });
    const [genresData, setGenresData] = useState([]);

    const navigate = useNavigate();

    const onChange = (e) => {
        e.persist();
        setCategoriesValue({
            ...categoriesValue,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        if (e && e.preventDefault()) e.preventDefault();
        const formData = new FormData();
        formData.append("name", categoriesValue.name);
        formData.append("genre_id", categoriesValue.genre_id);
        axios
            .post(
                "http://localhost/forum/public/api/categoriesForm",
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
                console.log(response);
                navigate("/forum/public/categories");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        const getGenres = async () => {
            await axios
                .get("http://localhost/forum/public/api/genres_index") //"http://localhost:8000/20238/topicosWeb/api/user_index
                .then(function (response) {
                    //Handle success
                    console.log(response.data);
                    setGenresData(response.data);
                })
                .catch(function (error) {
                    //Handle Error
                    console.log(error);
                })
                .finally(function () {
                    //Always Executed
                });
        };
        getGenres();
    }, []);

    return (
        <div>
            <div className="containerBody">
                <h1 className="title">Agregar Categoría</h1>
                <div className="card cardForm">
                    <div className="card-body">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="form-group">
                                <Form.Label for="name">Nombre: </Form.Label>
                                <Form.Control
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    placeholder="Ingresa el nombre de la categoría"
                                    required
                                    value={categoriesValue.name}
                                    onChange={onChange}
                                />
                            </Form.Group>
                            <Form.Group className="form-group">
                                <Form.Label for="genre_id">Género</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="genre_id"
                                    value={categoriesValue.genre_id}
                                    onChange={onChange}
                                >
                                    <option value="">
                                        Selecciona un género
                                    </option>
                                    {genresData.map((genre) => (
                                        <option key={genre.id} value={genre.id}>
                                            {genre.name}
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
                                            <a href="categories">
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
                                                Registrar Categoría
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
