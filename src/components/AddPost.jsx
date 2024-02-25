import React from 'react';
import { useNavigate } from 'react-router';

const AddPost = ({ handleSubmit, handleChange, formData, setFormData }) => {
    const navigate = useNavigate();
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            await handleSubmit(e);
            navigate('/');
        } catch (error) {
            console.error('Error adding post:', error);
        }
    };

    const handleTagsChange = (e) => {
        const tags = e.target.value.split(',').map(tag => tag.trim());
        setFormData({ ...formData, tags });
    };
    return (
        <div className="container-fluid  bg-success">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8">
                    <form onSubmit={handleFormSubmit} className="p-4 border rounded mt-5 mb-5">
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                name="title"
                                value={formData.title}
                                placeholder="Enter title"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="image">Image URL</label>
                            <input
                                type="text"
                                className="form-control"
                                id="image"
                                name="image"
                                value={formData.image}
                                placeholder="Enter image URL"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="category">Category</label>
                            <input
                                type="text"
                                className="form-control"
                                id="category"
                                name="category"
                                value={formData.category}
                                placeholder="Enter category"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="author">Author</label>
                            <input
                                type="text"
                                className="form-control"
                                id="author"
                                name="author"
                                value={formData.author}
                                placeholder="Enter author"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="content">Content</label>
                            <textarea
                                className="form-control"
                                id="content"
                                name="content"
                                value={formData.content}
                                placeholder="Enter content"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="tags">Tags</label>
                            <input
                                type="text"
                                className="form-control"
                                id="tags"
                                name="tags"
                                value={formData.tags.join(', ')}
                                placeholder="Enter tags separated by commas"
                                onChange={handleTagsChange}
                            />
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary mt-5">Add Post</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddPost;
