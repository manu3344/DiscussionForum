export default function NotFound() {
    return (
        <div style={{ textAlign: "center" }}>
            <h1 style={{ fontSize: "4rem", color:"#D80032", textShadow: "2px 2px 4px rgba(0, 0, 0, 1)"}}>404 - Página no encontrada</h1>
            <h2>¿Qué estás haciendo aquí?...</h2>
            <img
                src="images/deadpool.png"
                alt="Error 404"
                style={{
                    maxWidth: "100%",
                    width: "auto",
                    height: "auto",
                }}
            />
            <h2>La página que estás buscando no existe, no andes haciendo travesuras.</h2>
        </div>
    );
}
