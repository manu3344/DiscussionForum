import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs"



function Register(){

    const [showPasswordR, setShowPasswordR] = useState(false); 
    const [showCPasswordR, setShowCPasswordR] = useState(false); 

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
                            <form>
                                <div className='form-group'>
                                    <label for="name">Nombre</label>
                                    <input type="text" name="name" placeholder='Ingresa tu nombre' className='form-control' required/>
                                </div>
                                <div className="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" className="form-control" name="email" placeholder='Ingresa tu email' required></input>
                                </div>
                                <div className="form-group">
                                    <label for="password">Contraseña</label>
                                    <div className='row'>
                                        <div className='col-9'>
                                        <input type="password" id="passwordRegister" className="form-control" name="password" placeholder='Ingresa tu contraseña' required/>
                                        </div>
                                        <div className='col-3'>
                                            <Button style={{backgroundColor:"#176B87" }} onClick={showOrHide}>
                                            {showPasswordR ? <BsEyeFill />: <BsEyeSlashFill />}
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="c_password">Confirmar contraseña</label>
                                    <div className='row'>
                                        <div className='col-9'>
                                        <input type="password" id="c_passwordRegister" className="form-control" name="password" placeholder='Ingresa tu contraseña de nuevo' required/>
                                        </div>
                                        <div className='col-3'>
                                            <Button style={{backgroundColor:"#176B87" }} onClick={showOrHideC}>
                                            {showCPasswordR ? <BsEyeFill />: <BsEyeSlashFill />}
                                            </Button>
                                        </div>
                                    </div>
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