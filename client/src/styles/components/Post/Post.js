import React,{useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './_Post.scss';


function Post() {

    const { id } = useParams()

    const [post,setPost] = useState([])
  
    useEffect(() => {
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
  
      const url = `http://127.0.0.1:8080/api/posts/${id}`
      console.log(url)
      
      fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => setPost(data))
        .catch(error => console.log('error', error));
    }, [id]);

    const formatDate = (dateString) => {
      const date = new Date(dateString);
      const options = { day: 'numeric', month: 'long', year: 'numeric' };
      return date.toLocaleDateString('fr-FR', options);
  };

  return (
    <div className='pinpo-blog'>
      <header className='list-header'>
        <h1 className='main-title'>{post.title}</h1>
        <Link to={`/`}>
          <img className='logo' src='../../../logo.png' alt='Logo Pinpo' />
        </Link>        
      </header>
      <section className='instructions'>
        <div className='headerArticle'>
          <p>Le {formatDate(post.createdAt)}, par {post.author}</p>
          <div className='editSection'>
            <Link to={`/post/edit/${post._id}`}>
              <p id="edit">Editer</p>
            </Link>
            
            <p id='archive'>Archiver</p>
          </div>
        </div>
        <p>{post.content}</p>
        <Link to={`/`}>
          <button>Retour à la liste des articles</button>
        </Link>
        
      </section>
    </div>
  )
}

export default Post