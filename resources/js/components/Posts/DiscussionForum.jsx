import { useState, useEffect} from "react";
import { Button } from "react-bootstrap";
import { Spinner} from 'react-bootstrap';
import Comments from "./Comments"

export default function DiscussionForum() {
  
  const [commentData, setCommentData] = useState([]);
  const [textAreaContent, setTextAreaContent] = useState(""); 

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

//Function para borrar desde el frontend
const handleDeleteComment = (commentId) => {
  const updatedComments = commentData.filter((comment) => comment.id !== commentId);
  setCommentData(updatedComments);
};


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
                </div>
                <div>
                  <textarea
                    name="discussion"
                    id="discussion"
                    cols="120"
                    rows="10"
                    maxLength="250"
                    placeholder="Inicia la discusión"
                    onResize="none"
                    required
                    style={{ maxWidth: "100%" }}
                    defaultValue={textAreaContent}
                  ></textarea>
                </div>
                <div style={{padding: "5px 2rem"}}>
                    <div>
                    <Button variant='dark' type='submit' >Registrar comentario</Button>
                    </div>
                </div>
              </aside>
              </form>

            </div>
          </div>
          <div style={{textAlign:"center"}}>
          {commentData.map(comment=>(
              <Comments 
                key = {comment.id}
                postContent = {comment.postContent}
                topic_id = {comment.topic_id}
                updateTextArea = {setTextAreaContent}
                onDeleteComment={handleDeleteComment}
                commentId = {comment.id}
              />
            ))}
          </div>
            
        </div>
      </div>
    );
  }
  