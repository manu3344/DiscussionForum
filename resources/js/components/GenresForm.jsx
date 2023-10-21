import { Button } from "react-bootstrap";

export default function GenresForm() {
    return (
        <div>
            <div className="containerBody">
                <h1 className="title">Agregar Genero</h1>
                <div className="card cardForm">
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label for="name">Nombre: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    placeholder="Ingresa el nombre del genero"
                                    required
                                />
                            </div>
                        </form>
                    </div>
                </div>
                <div style={{ padding: "15px 0px", textAlign: "center" }}>
                    <div className="row">
                        <div className="col">
                            <a href="genres">
                                <Button type="submit" variant="danger">
                                    Cancelar
                                </Button>
                            </a>
                        </div>
                        <div className="col">
                            <a href="genres">
                                <Button type="submit" variant="dark">
                                    Registrar Genero
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
