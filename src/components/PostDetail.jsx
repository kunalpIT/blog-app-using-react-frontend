import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./styles/postdetail.css"

const PostDetail = () => {
    const { postId } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const apiUrl = `http://localhost:4000/blogData/${postId}`;
        axios.get(apiUrl)
            .then(response => {
                setPost(response.data);
            })
            .catch(error => {
                console.error('Error fetching post details:', error);
            });
    }, [postId]);

    return (
        <div className="post-detail-container">
            {post ? (
                <div className="post-content">
                    <img src={post.image} alt={post.title} className="post-image" />
                    <div className="post-details">
                        <h2 className="post-title">{post.title}</h2>
                        <div className="post-meta">
                            <p className="meta-item">Category: {post.category}</p>
                            <p className="meta-item">Author: {post.author}</p>
                            <p className="meta-item">Published Date: {post.published_date}</p>
                            <p className="meta-item">Reading Time: {post.reading_time}</p>
                        </div>
                        <p className="post-content">{post.content}</p>
                        <div className="tags">
                            <p>Tags:</p>
                            <ul>
                                {post.tags.map((tag, index) => (
                                    <li key={index} className="tag-item">{tag}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default PostDetail;
