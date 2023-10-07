import React from 'react';
import { Button } from 'react-bootstrap';


function Login(){
    return (
        <div>
            <div className="container mt-5">
            <h1 className='title'>Inicio de sesión</h1>
                    <div className="card">
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" className="form-control" name="email" placeholder='Ingresa tu email'></input>
                                </div>
                                <div className="form-group">
                                    <label for="password">Contraseña</label>
                                    <input type="password" className="form-control" name="password" placeholder='Ingresa tu contraseña'/>
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