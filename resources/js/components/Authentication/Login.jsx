import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Button, Form} from 'react-bootstrap';
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs"


function Login(){
    const [showPassword, setShowPassword] = useState(false);

    //Iniciar sesion. 
    const [formValue,setFormValue] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate();

    const onChange = (e) =>{
        e.persist();
        setFormValue({...formValue, [e.target.name]: e.target.value});
    }
    const handleSubmit = (e) => {
        if(e && e.preventDefault()) e.preventDefault();
        const formData = new FormData();
        formData.append("email", formValue.email)
        formData.append("password", formValue.password)
        axios.post("http://localhost/forum/public/api/login",
        formData,
        {headers: {'Content-Type': 'multipart/form-data',
        'Accept':'application/json'}}
        ).then(response => {
            alert("Bienvenido!!!");
            console.log('response: ');
            console.log(response);
            navigate('/forum/public/');
        }).catch(error => {
            alert("No se ha encontrado tu email ni contrasena"); 
            console.log(error);
        });
    };



    //Mostrar y ocultar contrasena. 
    function showOrHide(){
        let x = document.getElementById("password"); 
        if(x.type==="password"){
            x.type = "text";
        }else{
            x.type="password"
        }
        setShowPassword(!showPassword);
    }


    return (
        <div>
            <div className="containerBody mt-5">
            <h1 className='title'>Inicio de sesión</h1>
                    <div className="card">
                        <div className="card-body">
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="form-group">
                                    <Form.Label htmlFor="email">Email</Form.Label>
                                    <Form.Control type="email" className="form-control" name="email" placeholder='Ingresa tu email' required value={formValue.email} onChange={onChange}></Form.Control>
                                </Form.Group>
                                <Form.Group className="form-group">
                                    <Form.Label htmlFor="password">Contraseña</Form.Label>
                                    <div className='row'>
                                        <div className='col-9'>
                                        <Form.Control type="password" id="password" className="form-control" name="password" placeholder='Ingresa tu contraseña' required value={formValue.password} onChange={onChange}/>
                                        </div>
                                        <div className='col-3'>
                                        <Button type='button'  style={{backgroundColor:"#176B87" }} onClick={showOrHide}>
                                            {showPassword ? <BsEyeFill />: <BsEyeSlashFill />}
                                        </Button>
                                        </div>
                                    </div>
                                </Form.Group>
                                <div className='row'>
                                    <div className='col-lg-6 col-md-12 col-sm-12' style={{textAlign:"center"}}>
                                    <Button variant='dark' type='submit'>Iniciar sesión</Button>
                                    </div>
                                    <div className='col-lg-6 col-md-12 col-sm-12' style={{textAlign:"center",padding:"5px"}}>
                                        <a href="register" style={{ textDecoration:"none"}}>¿No tienes cuenta, puedes crear aqui una?</a>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
            </div>
        </div>
    )
}


export default Login; 