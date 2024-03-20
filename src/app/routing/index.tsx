import React from 'react';
import "../ui/style.scss"
import {Route, Routes} from "react-router-dom";
import {HomePage} from "../../pages/home"
import {PostPage} from "../../pages/post";

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="post/:id" element={<PostPage />}/>
        </Routes>
    );
}
