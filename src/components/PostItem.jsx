import React from 'react';
import { Link } from 'react-router-dom';
import "./styles/postitem.css";

const PostItem = ({ post }) => {
    return (
        <div className="post-item grid-item">
            <Link to={`/post/${post.id}`} className="post-link">
                <img src={post.image} alt={post.title} />
                {/* <div className="post-content"> */}
                <h4>{post.title}</h4>
                <p>Category: {post.category}</p>
                {/* </div> */}
            </Link>
        </div>
    );
};

export default PostItem;
