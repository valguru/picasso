import React from 'react';
import './App.scss';
import {PostList} from "./components/PostList";
import {Route, Routes} from "react-router-dom";
import {PostDetails} from "./components/PostDetails";

function App() {
    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<PostList />}/>
                <Route path="post/:id" element={<PostDetails />}/>
            </Routes>
        </div>
    );
}

export default App;
