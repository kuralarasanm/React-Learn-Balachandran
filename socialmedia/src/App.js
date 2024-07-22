import logo from './logo.svg';
import './App.css';
import About from './About';
import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import Missing from './Missing';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Post from './Post';
import PostLayout from './PostLayout';
import { useEffect, useState } from 'react';
import api from "./api/posts";
import { format } from "date-fns";
import axios from "axios"
import EditPost from './EditPost';
import useWindowSize from "./hooks/useWindowSize"
import useAxiosFetch from './hooks/useAxiosFetch';

function App() {
  const [posts, setPosts] = useState([
    // {
    //   id: 1,
    //   title: "my First post",
    //   datetime: "feb 05,2024 21:21:00 pm",
    //   body: "made a video about reactjs"
    // },
    // {
    //   id: 2,
    //   title: "my second post",
    //   datetime: "feb 05,2024 21:26:00 pm",
    //   body: "made a video about java script"
    // },
    // {
    //   id: 3,
    //   title: "my third post",
    //   datetime: "feb 05,2024 21:27:00 pm",
    //   body: "made a video about Angular"
    // },
    // {
    //   id: 4,
    //   title: "my fourth post",
    //   datetime: "feb 05,2024 21:27:00 pm",
    //   body: "made a video about nodejs"
    // }
  ])
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [editTitle, setEditTitle] = useState('')
  const [editBody, setEditBody] = useState('')
  const navigate = useNavigate()
  const { width } = useWindowSize()//this is hook

  const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3200/posts')// this is hook fetch


  // this i write for seperate api or use this also
  // const api=axios.create({
  //   baseURL:"http://localhost:3500"})

  // useEffect(() => {
  //   const fetchposts = async () => {
  //     try {
  //       const response = await api.get('/posts')
  //       setPosts(response.data)
  //     } catch (error) {
  //       if (error) {
  //         // not in the 200 response
  //         console.log(error.response.data);
  //         console.log(error.response.status);
  //         console.log(error.response.headers);
  //       } else {
  //         console.log(`error:${error.message}`);
  //       }
  //     }
  //   }

  //   fetchposts()
  // }, [])

  useEffect(()=>{ //this is hook fetch
    setPosts(data)
  },[data])

  useEffect(() => {
    const filteredResults = posts.filter((post) =>
      ((post.body).toLowerCase()).includes(search.toLowerCase())
      || ((post.title).toLowerCase()).includes(search.toLowerCase()))

    setSearchResults(filteredResults.reverse())
  }, [posts, search])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp')
    const newPost = { id, title: postTitle, datetime, body: postBody };
    try {
      const response = await api.post('/posts', newPost)
      const allPosts = [...posts, response.data];
      setPosts(allPosts)
      setPostTitle('')
      setPostBody('')
      navigate('/')
    } catch (error) { // this is for optional below line
      if (error) {
        // not in the 200 response
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else {
        console.log(`error:${error.message}`);
      }
    }
  }

  const handleEdit = async (id) => {
    const datetime = format(new Date(), 'MMMM dd, yyyy pp')
    const updatedPost = { id, title: editTitle, datetime, body: editBody };
    try {
      const response = await api.put(`/posts/${id}`, updatedPost)
      setPosts(posts.map(post => post.id === id ? { ...response.data } : post))
      setEditTitle('')
      setEditBody('')
      navigate('/')
    } catch (error) {
      console.log(`error:${error.message}`);
    }
  }

  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`)
      const postsList = posts.filter(post => post.id !== id)
      setPosts(postsList)
      navigate('/')
    } catch (error) {
      console.log(`error:${error.message}`);
    }
  }
  return (
    <div className="App">

      <Header title="social media" width={width} />
      <Nav search={search}
        setSearch={setSearch} />
      <Routes>
        <Route path='/' element={<Home posts={searchResults}
        fetchError={fetchError} isLoading={isLoading} // this is hook fetch
        />} />

        <Route path='post'>
          <Route index element={<NewPost
            handleSubmit={handleSubmit}
            postTitle={postTitle}
            setPostTitle={setPostTitle}
            postBody={postBody}
            setPostBody={setPostBody} />} />

          <Route path=':id' element={<PostPage posts={posts} handleDelete={handleDelete} />} />
        </Route>
        <Route path='/edit/:id' element={<EditPost
          posts={posts}
          handleEdit={handleEdit}
          editBody={editBody}
          setEditBody={setEditBody}
          editTitle={editTitle}
          setEditTitle={setEditTitle} />} />
        <Route path='about' element={<About />} />
        <Route path='*' element={<Missing />} />
      </Routes>

      {/* <PostPage /> */}
      <Footer />
    </div>
  );
}

export default App;
