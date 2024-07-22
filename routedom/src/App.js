import logo from './logo.svg';
import './App.css';
import About from './About';
import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PosePage';
import Missing from './Missing';
import { Link, Route, Routes } from 'react-router-dom';
import Post from './Post';
import PostLayout from './PostLayout';
function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          
          <li><Link to="/postpage">PostPage</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/newpost' element={<NewPost />} />
        {/* <Route path='/postpage' element={<PostPage />} />
        <Route path='/postpage/:id' element={<Post />} />
        <Route path='/postpage/newpost' element={<NewPost/>}/> */}
        {/* or */}
        <Route path='/postpage' element={<PostLayout/>}>
        <Route index element={<PostPage />} />
        <Route path=':id' element={<Post />} />
        <Route path='newpost' element={<NewPost/>}/>
        </Route>
        <Route path='*' element={<Missing/>}/>
      </Routes>
      {/* <Header/>
      <Nav/>
      <Home/>
      <NewPost/>
      <PostPage/>
      <About/>
      <Missing/>
      <Footer/> */}
    </div>
  );
}

export default App;
