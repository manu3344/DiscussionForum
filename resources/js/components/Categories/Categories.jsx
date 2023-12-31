import React, { useContext, useEffect, useState } from "react";
import { Spinner, Button, Form, Col, Row} from "react-bootstrap";
import { BsFillPlusCircleFill } from "react-icons/bs";
import Category_C from "./Category_C";
import axios from "axios";
import { getAuthorization } from 'passport-client'
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";

export default function Categories() {
    const { user } = useContext(UserContext)
    const [categoriesData, setCategoriesData] = useState([]);
    const [genresData, setGenresData] = useState([]); //Muestra el genero perteneciente.
    const [searchText, setSearchText] = useState(""); //Busqueda.


    // Funcion para mostrar todas las categorias
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

     // Funcion para mostrar el genero al que pertenece la categoria.
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



    //Function para borrar
    const handleDeleteCategories = async (categoryId) => {
        const updatedCategories = categoriesData.filter((category) => category.id !== categoryId);

        const authorization = await getAuthorization();

        axios.delete(`http://localhost/forum/public/api/categories_delete/${categoryId}`, {
            headers: {
                ...authorization
            }
        })
        .then(function(response){
            setCategoriesData(updatedCategories);
            alert("Categoria eliminada exitosamente");
        }).catch(function(error){
            console.log(error);
        });
    };

//   Spinner
  if (!categoriesData.length) {
    return (
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    );
}

//Funcion para obtener el genero al que pertenece la categoria.
const getGenreName = (genreId) => {
    const genre = genresData.find((genre) => genre.id === genreId);
    return genre ? genre.name : "Desconocido";
};


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
                                        placeholder="Buscar Categoría"
                                        className="mb-2 rounded-pill"
                                        onChange={(e) =>setSearchText(e.target.value)}
                                    />
                                </Col>
                            </Row>
                        </Form>
                    </div>
                    <div className="col=lg-12">
                        <h1>Categorías</h1>
                    </div>

                    {user?.role === 'admin' && (
                        <div className="col-lg-12">
                            <Link to="/forum/public/categoriesForm">
                                <Button type="submit" id="addCategories" style={{backgroundColor:"#E95793", border:"0.5px solid black"}}>
                                    <BsFillPlusCircleFill
                                        style={{ fontSize: "1.5rem" }}
                                    />
                                </Button>
                            </Link>
                        </div>
                    )}
                </div>

                <div className="card-group">
                    {categoriesData.filter((category)=>
                        category.name.toLowerCase().includes(searchText.toLowerCase())
                    )
                    .map((category) => (
                        <Category_C
                            key={category.id}
                            categoryId = {category.id}
                            name={category.name}
                            image_path = {category.image_path}
                            genre_id={category.genreId}
                            genreName={getGenreName(category.genre_id)}
                            onDeleteCategories={handleDeleteCategories}
                            isOfTheUser={user?.id === category.user_id}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
