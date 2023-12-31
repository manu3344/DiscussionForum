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
import NotFound from "./NotFound";
import CategoriesByGenre from "./DataBy/CategoriesByGenre";
import TopicsByCategories from "./DataBy/TopicsByCategories";
import PostsByTopics from "./DataBy/PostsByTopics";

function Main() {
    return (
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
                    <Route path="genresForm/:id" element={<GenresForm />}/>
                    <Route path="categoriesForm" element ={<CategoriesForm />}/>
                    <Route path="categoriesForm/:id" element ={<CategoriesForm />}/>
                    <Route path="topicsForm" element={<TopicsForm />} />
                    <Route path="topicsForm/:id" element={<TopicsForm />} />
                    <Route path="postsForm" element={<PostsForm />} />
                    <Route path="postsForm/:id" element={<PostsForm />} />
                    <Route path="categoriesByGenres/:id" element={<CategoriesByGenre />} />
                    <Route path="topicsByCategories/:id" element={<TopicsByCategories />} />
                    <Route path="postsByTopics/:id" element={<PostsByTopics />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
            <Footer />
        </div>
    )
}

export default Main;
