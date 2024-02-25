import React from 'react';
import PostItem from './PostItem';
import "./styles/posts.css";

const Posts = ({ posts }) => {
    return (
        <div className='posts-container mt-5'>
            {posts.map((post) => (
                <PostItem post={post} key={post.id} />
            ))}
        </div>
    );
};

export default Posts;
