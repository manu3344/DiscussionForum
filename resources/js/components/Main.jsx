import React from "react";
import Categories from "./Categories";
import Genres from "./Genres";
import Nav from "./Nav"; 
import {Routes, Route, Navigate} from "react-router-dom"; 
import Forum from "./Forum";
import DiscussionForum from "./DiscussionForum";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import Login from "./Login";
import Register from "./Register";
import GenresForm from "./GenresForm";
import CategoriesForm from "./CategoriesForm";
import TopicsForm from "./TopicsForm";
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
            </Route>
        </Routes>
        <Footer />
        </div>

    )
}

export default Main;