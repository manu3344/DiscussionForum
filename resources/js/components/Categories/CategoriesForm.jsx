import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { getAuthorization } from 'passport-client'

export default function CategoriesForm() {
    const [categoriesValue, setCategoriesValue] = useState({
        name: "",
        image_path: "",
        genre_id: "",
    });

    const [genresData, setGenresData] = useState([]);

    const navigate = useNavigate();

    const { id } = useParams(); //Obtener el ID de la categoria de la URL

    // Si el evento es de tipo file se actualiza el estado genreValue con el archivo seleccionado, si no con los valores de entrada.
    const onChange = (e) => {
        e.persist();
        if (e.target.type === "file") {
            setCategoriesValue({
                ...categoriesValue,
                image_path: e.target.files[0],
            });
        } else {
            setCategoriesValue({
                ...categoriesValue,
                [e.target.name]: e.target.value,
            });
        }
    };

    // Funcion para anadir datos
    const handleSubmit = async (e) => {
        if (e && e.preventDefault()) e.preventDefault();

        const authorization = await getAuthorization()

        const formData = new FormData();
        formData.append("name", categoriesValue.name);
        formData.append("image_path", categoriesValue.image_path);
        formData.append("genre_id", categoriesValue.genre_id);

        if (!id) {
            axios
                .post(
                    "http://localhost/forum/public/api/categoriesForm",
                    formData,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                            Accept: "application/json",
                            ...authorization
                        },
                    }
                )
                .then((response) => {
                    alert("Categoria registrada correctamente");
                    console.log("response: ");
                    console.log(response);
                    window.history.back();
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            axios
                .post(
                    `http://localhost/forum/public/api/categoriesForm/${id}`,
                    formData,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                            Accept: "application/json",
                            ...authorization
                        },
                    }
                )
                .then((response) => {
                    alert("Categoria actualizada correctamente");
                    console.log("response: ");
                    console.log(response);
                    window.history.back();
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    // Funcion para mostrar el genero al que pertenece la categoria en el formulario
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
                <h1 className="title">{id?"Editar Categoria":"Agregar Categoría"}</h1>
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
                                                {id?"Guardar cambios":"Registrar Categoría"}
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
