import React, {useEffect, useState} from "react";
import ReactDOM from 'react-dom/client';
import { Spinner} from 'react-bootstrap';
import Forum_C from "./Forum_C";
import axios from "axios";

export default function Forum() {

  const [forumData, setForumData] = useState([]); 

  useEffect(()=>{ 
    const getForums = async () =>{
        await  axios.get("http://localhost/forum/public/api/topic_index")  //"http://localhost:8000/20238/topicosWeb/api/user_index
        .then(function(response){
            //Handle success
            console.log(response.data);
            setForumData(response.data);
        })
        .catch(function(error){
            //Handle Error
            console.log(error);
        })
        .finally(function(){
            //Always Executed
        });        
    };
    getForums();
},[]);

if(!forumData.length){
  return (
  <Spinner animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner>
  )
}


    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <h1>Foro de discusiones actuales</h1>
        </div>
        <div className="card-group">
          {forumData.map(forum=>(
          <Forum_C 
          forum = {forum}
        />
          ))}

        </div>
      </div>
    );
  }
  