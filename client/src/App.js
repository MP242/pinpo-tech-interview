import React from 'react';
import Home from './styles/components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Post from './styles/components/Post/Post';
import Edit from './styles/components/Edit/Edit';
import NewPost from './styles/components/NewPost/NewPost';

function PinpoBlog() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:id" element={<Post />}/>
      <Route path="/post/edit/:id" element={<Edit />}/>
      <Route path="/post/new" element={<NewPost />}/>
    </Routes>
  );
}

export default PinpoBlog;
