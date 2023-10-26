import React from "react";
import Categories from "./Categories/Categories";
import Genres from "./Genres/Genres";
import Nav from "./Nav"; 
import {Routes, Route, Navigate} from "react-router-dom"; 
import Forum from "./Forum/Forum";
import DiscussionForum from "./Posts/DiscussionForum";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";
import GenresForm from "./Genres/GenresForm";
import CategoriesForm from "./Categories/CategoriesForm";
import TopicsForm from "./Forum/TopicsForm";
import PostsForm from "./Posts/PostsForm";
import Home from "./Home";

function Main(){
    return(
        <div>
        <Header />
        <Routes>
            <Route path="/forum/public" element={<Nav />}>
                <Route path="" element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="genres" element={<Genres />} />
                <Route path="categories" element={<Categories />} />
                <Route path="topics" element={<Forum />} />
                <Route path="posts" element={<DiscussionForum />} />
                <Route path="genresForm" element ={<GenresForm />}/>
                <Route path="categoriesForm" element ={<CategoriesForm />}/>
                <Route path="topicsForm" element={<TopicsForm />} />
                <Route path="postsForm" element={<PostsForm />} />
            </Route>
        </Routes>
        <Footer />
        </div>

    )
}

export default Main;