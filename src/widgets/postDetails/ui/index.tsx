import React from "react";
import {Link, useParams} from "react-router-dom";
import {useGetPostByIdQuery} from "../../api/postApi";
import {useDispatch} from "react-redux";
import {setStartPost} from "../../api/postPagination";
import "./postDetails.scss";

export const PostDetails: React.FC = () => {
    const dispatch = useDispatch();
    const {id} = useParams<{ id: string }>();
    const {data: post, isLoading} = useGetPostByIdQuery(Number(id))

    const handleGoBack = () => {
        dispatch(setStartPost(post?.id || 0));
    };

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
            <Link to="/" className="btn" onClick={handleGoBack}>Назад</Link>
        </div>
    )
}