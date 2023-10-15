import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs"


function Login(){
    const [showPassword, setShowPassword] = useState(false);

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
            <div className="container mt-5">
            <h1 className='title'>Inicio de sesión</h1>
                    <div className="card">
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" className="form-control" name="email" placeholder='Ingresa tu email' required></input>
                                </div>
                                <div className="form-group">
                                    <label for="password">Contraseña</label>
                                    <div className='row'>
                                        <div className='col-9'>
                                        <input type="password" id="password" className="form-control" name="password" placeholder='Ingresa tu contraseña' required/>
                                        </div>
                                        <div className='col-3'>
                                        <Button style={{backgroundColor:"#176B87" }} onClick={showOrHide}>
                                            {showPassword ? <BsEyeFill />: <BsEyeSlashFill />}
                                        </Button>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-lg-6 col-md-12 col-sm-12' style={{textAlign:"center"}}>
                                    <Button variant='dark' type='submit'>Iniciar sesion</Button>
                                    </div>
                                    <div className='col-lg-6 col-md-12 col-sm-12' style={{textAlign:"center",padding:"5px"}}>
                                        <a href="/register">No tienes cuenta, puedes crear aqui una</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
            </div>
        </div>
    )
}


export default Login; 