import React, { useState } from 'react';
import { Button, Form} from 'react-bootstrap';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs"



function Register(){

    //Para mostrar y ocultar la contrasena.
    const [showPasswordR, setShowPasswordR] = useState(false);
    const [showCPasswordR, setShowCPasswordR] = useState(false);

    //Para agregar datos.
    const [formValue, setFormValue] = useState({
        name: '',
        email: '',
        password: '',
        c_password: ''
    })

    const navigate = useNavigate();

    const onChange = (e) =>{
        e.persist();
        setFormValue({...formValue, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        if(e && e.preventDefault()) e.preventDefault();
        const formData = new FormData();
        formData.append("name", formValue.name)
        formData.append("email", formValue.email)
        formData.append("password", formValue.password)
        formData.append("c_password", formValue.c_password)
        formData.append("role", "user")
        axios.post("http://localhost/forum/public/api/register",
        formData,
        {headers: {'Content-Type': 'multipart/form-data',
        'Accept':'application/json'}}
        ).then(response => {
            console.log('response: ');
            console.log(response);
            alert("Registro exitoso");
            navigate('/forum/public/login');
        }).catch(error => {
            if (error.response) {
                // La solicitud al servidor generó una respuesta de error
                const validationErrors = error.response.data.error;
                // Recorre los errores y muestra alertas diferentes para cada uno
                for (const field in validationErrors) {
                    alert(`Error en el campo ${field}: ${validationErrors[field]}`);
                }
            } else {
                console.log(error);
            }

        });
    };


    function showOrHide(){
        let x = document.getElementById("passwordRegister");
        if(x.type==="password"){
            x.type = "text";
        }else{
            x.type="password"
        }
        setShowPasswordR(!showPasswordR);
    }
    function showOrHideC(){
        let x = document.getElementById("c_passwordRegister");
        if(x.type==="password"){
            x.type = "text";
        }else{
            x.type="password"
        }
        setShowCPasswordR(!showCPasswordR);
    }

    return (
        <div>
            <div className="containerBody mt-5">
            <h1 className='title'>Registro</h1>
                    <div className="card">
                        <div className="card-body">
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className='form-group'>
                                    <Form.Label htmlFor="name">Nombre</Form.Label>
                                    <Form.Control type="text" name="name" placeholder='Ingresa tu nombre' className='form-control' required value={formValue.name} onChange={onChange}/>
                                </Form.Group>
                                <Form.Group className="form-group">
                                    <Form.Label htmlFor="email">Email</Form.Label>
                                    <Form.Control type="email" className="form-control" name="email" placeholder='Ingresa tu email' required value={formValue.email} onChange={onChange} />
                                </Form.Group>
                                <Form.Group className="form-group">
                                    <Form.Label htmlFor="password">Contraseña</Form.Label>
                                    <div className='row'>
                                        <div className='col-9'>
                                        <Form.Control type="password" id="passwordRegister" className="form-control" name="password" placeholder='Ingresa tu contraseña' required value={formValue.password} onChange={onChange}/>
                                        </div>
                                        <div className='col-3'>
                                            <Button style={{backgroundColor:"#176B87" }} onClick={showOrHide}>
                                            {showPasswordR ? <BsEyeFill />: <BsEyeSlashFill />}
                                            </Button>
                                        </div>
                                    </div>
                                </Form.Group>
                                <Form.Group className="form-group">
                                    <Form.Label htmlFor="c_passwordRegister">Confirmar contraseña</Form.Label>
                                    <div className='row'>
                                        <div className='col-9'>
                                        <Form.Control type="password" id="c_passwordRegister" className="form-control" name="c_password" placeholder='Ingresa tu contraseña de nuevo' required value={formValue.c_password} onChange={onChange}/>
                                        </div>
                                        <div className='col-3'>
                                            <Button style={{backgroundColor:"#176B87" }} onClick={showOrHideC}>
                                            {showCPasswordR ? <BsEyeFill />: <BsEyeSlashFill />}
                                            </Button>
                                        </div>
                                    </div>
                                </Form.Group>
                                <div className='row'>
                                    <div className='col' style={{textAlign:"center"}}>
                                    <Button variant='dark' type='submit'>Registrar</Button>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
            </div>
        </div>
    )
}


export default Register;
