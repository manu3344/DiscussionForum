import React, { useEffect, useState } from "react";
import { Spinner, Button } from "react-bootstrap";
import { BsFillPlusCircleFill } from "react-icons/bs";
import axios from "axios";
import Genre_C from "./Genre_C";


export default function Genres(){
    
    const [genresData, setGenresData] = useState([]);

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
                    <div className="col=lg-12">
                        <h1>Géneros</h1>
                    </div>
                    <div className="col-lg-12">
                        <a href="genresForm">
                            <Button type="submit" id="addGenres">
                                <BsFillPlusCircleFill
                                    style={{ fontSize: "1.5rem" }}
                                />
                            </Button>
                        </a>
                    </div>
                </div>
                <div className="card-group">
                    {genresData.map((genre) => (
                        <Genre_C
                            key={genre.id}
                            name={genre.name}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
