import {PostItem} from "../../../entities/post/ui";
import {useGetPostsPagedQuery} from "../../api/postApi";
import {useEffect, useState} from "react";
import {useInView} from "react-intersection-observer";
import {useSelector} from "react-redux";
import {RootState} from "../../../app/store";
import "./postList.scss"

export const PostList = () => {
    const startPost = useSelector((state: RootState) => state.postPagination.start);
    const [postStart, setPostStart] = useState(startPost);
    const {data: posts} = useGetPostsPagedQuery({
        start: postStart,
    });

    const {ref: firstItem, inView: inViewFirstCard} = useInView({
        threshold: 0.2,
    });

    const {ref: lastItem, inView: inViewLastCard} = useInView({
        threshold: 0.2,
    });

    useEffect(() => {
        if (inViewFirstCard) {
            setPostStart((prev) => prev > 0 ? prev - 1 : prev);
        }
    }, [inViewFirstCard]);

    useEffect(() => {
        if (inViewLastCard) {
            setPostStart((prev) => prev + 1);
        }
    }, [inViewLastCard]);

    return (
        <div>
            <ul className="post_list">
                {posts?.map((post, index, arr) => (
                    index === 0 ?
                        (
                            <li key={post.id} ref={firstItem}>
                                <PostItem post={post}/>
                            </li>
                        ) :
                        index === arr.length - 1 ?
                            (
                                <li key={post.id} ref={lastItem}>
                                    <PostItem post={post}/>
                                </li>
                            ) :
                            (
                                <li key={post.id}>
                                    <PostItem post={post}/>
                                </li>
                            )
                ))}
            </ul>
        </div>
    );
}