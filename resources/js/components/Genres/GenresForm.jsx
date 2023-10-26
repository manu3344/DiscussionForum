import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Button, Form } from "react-bootstrap";

export default function GenresForm() {

    const [genreValue, setGenreValue] = useState({name:''}); 
    const navigate = useNavigate(); 

    const onChange = (e)=>{
        e.persist(); 
        setGenreValue({...genreValue, [e.target.name]: e.target.value}); 
    }

    const handleSubmit = (e)=>{
        if(e && e.preventDefault()) e.preventDefault();
        const formData = new FormData(); 
        formData.append("name", genreValue.name)
        axios.post("http://localhost/forum/public/api/genresForm",
        formData,
        {headers: {'Content-Type': 'multipart/form-data',
        'Accept':'application/json'}}
        ).then(response => {
            console.log('response: ');
            console.log(response);
            navigate('/forum/public/genres');
        }).catch(error => {
            console.log(error);
        });
    };
    



    return (
        <div>
            <div className="containerBody">
                <h1 className="title">Agregar Género</h1>
                <div className="card cardForm">
                    <div className="card-body">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="form-group">
                                <Form.Label for="name">Nombre: </Form.Label>
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
                            <div
                                style={{
                                    padding: "15px 0px",
                                    textAlign: "center",
                                }}
                            >
                                <div className="row">
                                    <div className="col">
                                        <a href="genres">
                                            <Button
                                                variant="danger"
                                            >
                                                Cancelar
                                            </Button>
                                        </a>
                                    </div>
                                    <div className="col">
                                            <Button
                                                type="submit"
                                                variant="dark"
                                            >
                                                Registrar Género
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