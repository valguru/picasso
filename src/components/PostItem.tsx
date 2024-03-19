import {Post} from "../models/model";
import React from "react";
import {Link} from "react-router-dom";
export const PostItem: React.FC<{post: Post}> = ({post}) => {

    return (
        <div className="post">
            <div>
                <h1>{`${post.id}. ${post.title}`}</h1>
                <p>{post.body.length>20?post.body.substring(0,20)+'...':post.body}</p>
            </div>
            <Link to={`post/${post.id}`} className="btn">Просмотр</Link>
        </div>
    )
}