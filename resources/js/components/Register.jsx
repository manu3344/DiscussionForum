import React from 'react';
import { Button } from 'react-bootstrap';


function Register(){
    return (
        <div>
            <div className="container mt-5">
            <h1 className='title'>Registro</h1>
                    <div className="card">
                        <div className="card-body">
                            <form>
                                <div className='form-group'>
                                    <label for="name">Nombre</label>
                                    <input type="text" name="name" placeholder='Ingresa tu nombre' className='form-control'/>
                                </div>
                                <div className="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" className="form-control" name="email" placeholder='Ingresa tu email'></input>
                                </div>
                                <div className="form-group">
                                    <label for="password">Contraseña</label>
                                    <input type="password" className="form-control" name="password" placeholder='Ingresa tu contraseña'/>
                                </div>
                                <div className="form-group">
                                    <label for="c_password">Confirmar contraseña</label>
                                    <input type="password" className="form-control" name="c_password" placeholder='Ingresa tu contraseña de nuevo'/>
                                </div>
                                <div className='row'>
                                    <div className='col' style={{textAlign:"center"}}>
                                    <Button variant='dark' type='submit'>Registrar</Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
            </div>
        </div>
    )
}


export default Register; 