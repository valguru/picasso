import {PostItem} from "./PostItem";
import {useGetPostsPagedQuery} from "../services/postApi";
import {useEffect, useState} from "react";
import {useInView} from "react-intersection-observer";

export const PostList = () => {
    const [postStart, setPostStart] = useState(0);
    const { data: posts} = useGetPostsPagedQuery({
        start: postStart,
    });

    const { ref: firstCard, inView: inViewFirstCard } = useInView({
        threshold: 0.1,
    });

    const { ref: lastCard, inView: inViewLastCard } = useInView({
        threshold: 0.1,
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
                    index === 0 ? (
                        <li key={post.id} ref={firstCard}>
                            <PostItem post={post} />
                        </li>
                    ) : index === arr.length - 1 ? (
                        <li key={post.id} ref={lastCard}>
                            <PostItem post={post} />
                        </li>
                    ) : (
                        <li key={post.id}>
                            <PostItem post={post} />
                        </li>
                    )
                ))}
            </ul>
        </div>
    );
}