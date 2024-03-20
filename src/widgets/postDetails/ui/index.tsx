import React from "react";
import {useParams} from "react-router-dom";
import {useGetPostByIdQuery} from "../../api";
import "./postDetails.scss";

export const PostDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const {data: post, isLoading} = useGetPostByIdQuery(Number(id))

    if(isLoading) {
        return <div className="stub">Загрузка...</div>
    }
    if (!post) {
        return <div className="stub">Такого поста не существует</div>;
    }

    return (
        <div className="post_details">

            <h1>{`${post.id}. ${post.title}`}</h1>
            <p>{post.body}</p>

        </div>
    )
}