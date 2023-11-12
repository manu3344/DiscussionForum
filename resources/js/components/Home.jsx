import Image from 'react-bootstrap/Image';

export default function Home(){
    return (
        <div>
            <div style={{textAlign:"center"}}>
            <h1>Bienvenido a nuestro foro de discusión</h1>
            <Image src='/forum/public/images/logo.jpeg' style={{width:"70rem"}} fluid/>
            </div>
            <div style={{textAlign:"justify", paddingTop:"10px"}}>
            <h4>Deseamos que los usuarios de esta pagina creen y mantengan una comunidad activa 
                donde pueden encontrar foros de discusión de su serie, pelicula o anime 
                favorito proporcionando asi un espacio informativo y divertido para fomentar la 
                participación entre internautas</h4>
            </div>
        </div>
    )
}