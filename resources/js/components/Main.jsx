import React from "react";
import Categories from "./Categories";
import Nav from "./Nav"; 
import {Routes, Route, Navigate} from "react-router-dom"; 
import Forum from "./Forum";
import DiscussionForum from "./DiscussionForum";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import Login from "./Login";
import Register from "./Register";

function Main(){
    return(
        <div>
        <Header />
        <Routes>
            <Route path="/forum/public" element={<Nav />}>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="categories" element={<Categories />} />
                <Route path="topics" element={<Forum />} />
                <Route path="posts" element={<DiscussionForum />} />
            </Route>
        </Routes>
        <Footer />
        </div>

    )
}

export default Main;