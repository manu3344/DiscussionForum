import React, {useEffect, useState} from "react";
import ReactDOM from 'react-dom/client';
import { Spinner} from 'react-bootstrap';
import Category_C from "./Category_C";
import axios from "axios";


export default function Categories() {

  const [categoriesData, setCategoriesData] = useState([]); 

  useEffect(()=>{ 
    const getCategories = async () =>{
        await  axios.get("http://localhost/forum/public/api/categories_index")  //"http://localhost:8000/20238/topicosWeb/api/user_index
        .then(function(response){
            //Handle success
            console.log(response.data);
            setCategoriesData(response.data);
        })
        .catch(function(error){
            //Handle Error
            console.log(error);
        })
        .finally(function(){
            //Always Executed
        });        
    };
    getCategories();
},[]);

if(!categoriesData.length){
  return (
  <Spinner animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner>
  )
}

    return (
      
        <div>
          <div style={{ textAlign: "center" }}>
            <h1>Categorias</h1>
            {categoriesData.map(category=>(
              <Category_C 
                category = {category}
              />
            ))}
          </div>
        </div>
    );
  }
  