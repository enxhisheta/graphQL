import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_POST } from './GetPosts';

const Posts = () => {
    const [postId, setPostId] = useState(1);
    const { loading, error, data } = useQuery(GET_POST, {
        variables: { id: postId },
        skip: !postId,
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const post = data?.post;

    return (
        <div className="posts-container">
            <h2>Post Information</h2>
            <div className="post-controls">
                <label>
                    Post ID:
                    <input
                        type="number"
                        value={postId}
                        onChange={(e) => setPostId(parseInt(e.target.value))}
                        min="1"
                    />
                </label>
            </div>
            {post && (
                <div >
                    <h3>{post.title}</h3>
                    <p className="post-body">{post.body}</p>
                    <p className="post-id">Post ID: {post.id}</p>
                </div>
            )}
        </div>
    );
};

export default Posts;
