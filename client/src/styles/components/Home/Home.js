import React,{useEffect, useState} from 'react'
import './_Home.scss'
import { Link } from "react-router-dom";

function Home() {

const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/posts");
        const data = await response.json();
        setPosts(data);
        console.log(data)
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts();
  }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return date.toLocaleDateString('fr-FR', options);
    };

  return (
    <div className='pinpo-blog'>
      <header className='list-header'>
        <h1 className='main-title'>Pinpo Blog</h1>
        <img className='logo' src='./logo.png' alt='Logo Pinpo' />
      </header>
      <section className='instructions'>
      <div>
        <div className='headerPost'>
            <div className='headerTitle'>
                <h2 className='titleOne'>Tous les articles</h2>
                <p className='titleTwo'>par date de publication</p>
            </div>
            <Link to={`/post/new`}>
                <p className='newPost'>Ecrire un nouvel article</p>
            </Link>
        </div>
        {posts.map((post) => (
          <div key={post._id}>
            <div className='titlePost'>
                <Link to={`/post/${post._id}`}>
                    <h2>{post.title}</h2>
                </Link>
                <p>Le {formatDate(post.createdAt)}</p>
            </div>            
            <p>{post.content}</p>
            <p>by {post.author}</p>
            <hr />
          </div>
        ))}

    </div>
        
      </section>
    </div>
    
  )
}

export default Home