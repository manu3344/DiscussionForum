import { Button } from "react-bootstrap";

export default function DiscussionForum() {
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <h1>Foro de Discusión</h1>
          <div className="middleContainer">
            <div className="sectionContainer">
              <section className="sectionForum">
                <img
                  src="images/hunter.jpg"
                  alt=""
                  className="imageForum"
                  style={{ maxHeight: "400px", maxWidth: "400px" }}
                />
              </section>
            </div>
            <div className="asideContainer">
              <aside className="asideForum">
                <div>
                  <h4 style={{ margin: "0" }}>Hunter x Hunter</h4>
                  <p style={{color:"grey"}}>Creado por Manuel Alejandro Alvarado Ibarra</p>
                </div>
                <div>
                  <textarea
                    name="discussion"
                    id="discussion"
                    cols="120"
                    rows="10"
                    maxLength="250"
                    placeholder="Inicia la discusion"
                    onResize="none"
                    style={{ maxWidth: "100%" }}
                  ></textarea>
                </div>
                <div>
                  <div>
                    <i class="bi bi-plus-circle-fill custom-icon"></i>
                    <p style={{ textAlign: "center" }}>Agrega un comentario</p>
                  </div>
                </div>
              </aside>
            </div>
          </div>
          <div>
            <section className="sectionComments">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="imageUser">Aqui iria foto?</div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="forumComment">Aranzazu Jimena Messa Sanchez</div>
                </div>
              </div>
              <div>
                  <textarea
                    name="discussion"
                    id="discussion"
                    cols="150"
                    rows="5"
                    maxLength="250"
                    placeholder="Escribe un comentario"
                    onResize="none"
                    style={{ maxWidth: "100%"}}
                  ></textarea>
              </div>
              <div>
              <Button variant='dark' type='submit'>Registrar comentario</Button>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
  