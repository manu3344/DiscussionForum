import { Button } from "react-bootstrap";

export default function CategoriesForm() {
    return (
        <div>
            <div className="containerBody">
                <h1 className="title">Agregar Categoria</h1>
                <div className="card cardForm">
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label for="name">Nombre: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    placeholder="Ingresa el nombre de la categoria"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label for="genre_id">Genero</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="genre_id"
                                    placeholder="Selecciona el Genero al que pertenece"
                                />
                            </div>
                        </form>
                    </div>
                </div>
                <div style={{padding:"15px 0px", textAlign:"center"}}>
                <div className="row">
                    <div className="col">
                        <a href="categories">
                            <Button type="submit" variant="danger">
                                Cancelar
                            </Button>
                        </a>
                    </div>
                    <div className="col">
                        <a href="categories">
                            <Button type="submit" variant="dark">
                                Registrar Categoria
                            </Button>
                        </a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}
