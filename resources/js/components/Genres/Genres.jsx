import React, { useContext, useEffect, useState } from "react";
import { Spinner, Button, Form, Row, Col } from "react-bootstrap";
import { BsFillPlusCircleFill } from "react-icons/bs";
import axios from "axios";
import Genre_C from "./Genre_C";
import { getAuthorization } from 'passport-client'
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";

export default function Genres() {
    const { user } = useContext(UserContext)
    const [genresData, setGenresData] = useState([]);
    const [searchText, setSearchText] = useState(""); //Estado para buscar

    // Funcion para mostrar todos los generos existentes
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

    // Funcion para borrar los generos
    const handleDeleteGenres = async (genreId) => {
        const updatedGenres = genresData.filter(
            (genre) => genre.id !== genreId
        );

        const authorization = await getAuthorization()

        axios
            .delete(
                `http://localhost/forum/public/api/genres_delete/${genreId}`,
                {
                    headers: {
                        ...authorization
                    }
                }
            )
            .then(function (response) {
                setGenresData(updatedGenres);
                alert("Genero eliminado exitosamente");
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    //  Spinner
    if (!genresData.length) {
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
                    {/* Aqui ira la barra de busqueda */}
                    <div className="col-lg-12">
                        <Form inline style={{ padding: "0 10px" }}>
                            <Row style={{ textAlign: "center" }}>
                                <Col xs="auto">
                                    <Form.Control
                                        type="search"
                                        placeholder="Buscar Género"
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
                        <h1>Géneros</h1>
                    </div>

                    {user?.role === 'admin' && (
                        <div className="col-lg-12">
                            <Link to="/forum/public/genresForm">
                                <Button type="submit" id="addGenres" style={{backgroundColor:"#E95793", border:"0.5px solid black"}}>
                                    <BsFillPlusCircleFill
                                        style={{ fontSize: "1.5rem" }}
                                    />
                                </Button>
                            </Link>
                        </div>
                    )}
                </div>
                <div className="card-group">
                    {/* Aqui estamos filtrando los nombres para la barra de busqueda */}
                    {genresData
                        .filter((genre) =>
                            genre.name
                                .toLowerCase()
                                .includes(searchText.toLowerCase())
                        )
                        .map((genre) => (
                            <Genre_C
                                key={genre.id}
                                name={genre.name}
                                image_path={genre.image_path}
                                onDeleteGenres={handleDeleteGenres}
                                genreId={genre.id}
                                isOfTheUser={user?.id === genre.user_id}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
}
