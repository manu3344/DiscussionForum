import { Button } from "react-bootstrap";

export default function TopicsForm() {
    return (
        <div>
            <div className="containerBody">
                <h1 className="title">Agregar Tema de Discusion</h1>
                <div className="card cardForm">
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label for="name">Titulo: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="title"
                                    placeholder="Ingresa el titulo del tema de discusion"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <p>Descripcion</p>
                                <textarea
                                    name="description"
                                    id="description"
                                    cols="150"
                                    rows="10"
                                    maxLength="250"
                                    placeholder="Describe tu tema!!!"
                                    onResize="none"
                                    required
                                    style={{ maxWidth: "100%" }}
                                ></textarea>  
                            </div>
                            <div className="form-group">
                                <label for="categories_id">Categoria</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="categories_id"
                                    placeholder="Selecciona la categoria a la que pertenece"
                                />
                            </div>
                        </form>
                    </div>
                </div>
                <div style={{ padding: "15px 0px", textAlign: "center" }}>
                    <div className="row">
                        <div className="col">
                            <a href="topics">
                                <Button type="submit" variant="danger">
                                    Cancelar
                                </Button>
                            </a>
                        </div>
                        <div className="col">
                            <a href="topics">
                                <Button type="submit" variant="dark">
                                    Registrar Tema de Discusion
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
