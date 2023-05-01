import React from 'react';
import Home from './components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Post from './components/Post/Post';
import Edit from './components/Edit/Edit';
import NewPost from './components/NewPost/NewPost';
import Layout from './components/Layout/Layout';

function PinpoBlog() {
  return (
    <Routes>
      <Route path="/" element={<Layout pageTitle="Pinpo Blog" children={<Home />} />} />
      <Route path="/post/:id" element={<Post />}/>
      <Route path="/post/edit/:id" element={<Layout pageTitle="Modifier l'article" children={<Edit />} />} />
      <Route path="/post/new" element={<Layout pageTitle="Nouvel article" children={<NewPost />} />} />
    </Routes>
  );
}

export default PinpoBlog;
