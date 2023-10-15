import { useState, useEffect} from "react";
import { Button } from "react-bootstrap";
import { Spinner} from 'react-bootstrap';
import {BsFillPatchPlusFill} from "react-icons/bs";
import Comments from "./Comments"

export default function DiscussionForum() {
  
  const [commentData, setCommentData] = useState([]);

  useEffect(()=>{ 
    const getComments = async () =>{
        await  axios.get("http://localhost/forum/public/api/post_index")  //"http://localhost:8000/20238/topicosWeb/api/user_index
        .then(function(response){
            //Handle success
            console.log(response.data);
            setCommentData(response.data);
        })
        .catch(function(error){
            //Handle Error
            console.log(error);
        })
        .finally(function(){
            //Always Executed
        });        
    };
    getComments();
},[]);

if(!commentData.length){
  return (
  <Spinner animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner>
  )
}


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
              <form>
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
                    required
                    style={{ maxWidth: "100%" }}
                  ></textarea>
                </div>
                <div style={{padding: "0px 2rem"}}>
                    <div style={{padding:"5px"}}>
                    <label htmlFor="commentButton">Agrega un comentario</label>
                    </div>
                    <div>
                    <Button type="submit" id="commentButton" style={{backgroundColor: "#176B87", borderRadius:"2rem"}}>
                      <BsFillPatchPlusFill style={{fontSize:"1.8rem"}}/>
                    </Button>
                    </div>
                </div>
              </aside>
              </form>

            </div>
          </div>
            {commentData.map(comment=>(
              <Comments 
                comment = {comment}
              />
            ))}
          <div>
            <form>
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
                    placeholder="Escribe un comentario"
                    onResize="none"
                    style={{ maxWidth: "100%"}}
                    required
                  ></textarea>
              </div>
              <div>
              <Button variant='dark' type='submit' >Registrar comentario</Button>
              </div>
            </section>
            </form>

          </div>
        </div>
      </div>
    );
  }
  