import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../src/components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import BlogContextProvider from './context/BlogContext';
import Contact from './pages/Contact';
import PostList from './components/PostList/PostList';


// import PostItem frnom './components/PostItem/PostItem';
///import PostList from './pages/postList/postList';
////import PostDetails from './pages/PostDetails';



function App() {
  return (
    <div>
    <Header />
    <BlogContextProvider>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/courses" element={<Courses/>} />
      <Route path="/blogs"  element={<PostList />} />
      {/* <Route path="/posts/:slug" element={<PostDetails />} /> */}
      <Route path="/contact" element={<Contact/>} />
    </Routes>
    </BlogContextProvider>
    <Footer />
    </div>
  )
}

export default App
