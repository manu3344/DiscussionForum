import Image from 'react-bootstrap/Image';

export default function Home(){
    return (
        <div>
            <div style={{textAlign:"center"}}>
            <h1>Bienvenido a nuestro foro de discusión</h1>
            <Image src='images/logo.jpeg' style={{width:"70rem"}} fluid/>
            </div>
        </div>
    )
}