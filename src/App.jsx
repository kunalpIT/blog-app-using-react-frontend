import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import NavBar from './components/NavBar';
import AddPost from './components/AddPost';
import LandingPage from './components/LandingPage';
import PostDetail from './components/PostDetail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { format } from 'date-fns';

function App() {

  const [searchTxt, setSearchTxt] = useState('');

  const [posts, setPosts] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const [show, setShow] = useState(true);

  const url = `http://localhost:4000/blogData`

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setPosts(response.data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData()
    setShow(true)
  }, [])

  const filteredPosts = posts.filter(post =>
    post.category.toLowerCase().includes(searchTxt.toLowerCase())
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  const [formData, setFormData] = useState({
    title: '',
    image: '',
    category: '',
    author: '',
    content: '',
    published_date: '',
    tags: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const nextId = await getNextId();
      const currentDate = format(new Date(), 'MMMM d, yyyy');
      await axios.post(url, { ...formData, id: nextId, published_date: currentDate });
      setFormData({
        title: '',
        image: '',
        category: '',
        author: '',
        content: '',
        published_date: Date.now().toString(),
        tags: [],
      });
      fetchData();
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  const getNextId = async () => {
    try {
      const response = await axios.get(url);
      const posts = response.data;
      const nextId = posts.length > 0 ? (parseInt(posts[posts.length - 1].id) + 1).toString() : "1";
      return nextId;
    } catch (error) {
      console.error('Error fetching posts:', error);
      return "1";
    }
  }


  return (
    <>
      <NavBar />
      <Helmet>
        <title>Write It</title>
        <meta
          name='description'
          content='find all latest news and trending blogs over the world here'
        />
        <meta
          name='keywords'
          content='Trending News,Social Media,Digital Information'
        />
      </Helmet>
      <Routes>
        <Route path="/" element={<LandingPage searchTxt={searchTxt}
          setSearchTxt={setSearchTxt}
          setCurrentPage={setCurrentPage}
          postsPerPage={postsPerPage}
          currentPage={currentPage}
          paginate={paginate}
          totalPosts={filteredPosts.length}
          currentPosts={currentPosts} />} />
        <Route path="/add" element={<AddPost handleSubmit={handleSubmit} handleChange={handleChange} formData={formData} setFormData={setFormData} />} />
        <Route path="/post/:postId" element={<PostDetail />} />
      </Routes>


    </>
  )
}

export default App
