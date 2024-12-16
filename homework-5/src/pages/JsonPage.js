import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {jsonFetch} from "../redux/actions";

const JsonPage = () => {
    const posts = useSelector((state) => state.catReducer.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(jsonFetch());
    }, [dispatch]);

    return (
        <div>
            <h1>JSON Posts</h1>
            {posts.length > 0 ? (
                posts.map(post => (
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default JsonPage;
