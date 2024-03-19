import React from "react";
import {useParams} from "react-router-dom";
import {useGetPostByIdQuery} from "../services/postApi";

export const PostDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const {data: post} = useGetPostByIdQuery(Number(id))

    if (!post) {
        return <div>Такого поста не существует</div>;
    }

    return (
        <div className="post_details post">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}