import React from "react";
import {PostList} from "../../widgets/postList/ui";

export const HomePage: React.FC = () => {
    return (
        <div className="container">
            <PostList />
        </div>
    )
}