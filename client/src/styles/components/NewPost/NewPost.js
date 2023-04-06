import React, { useState } from 'react';
import './_NewPost.scss';
import { Link } from "react-router-dom";

function NewPost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Title:', title);
    console.log('Content:', content);
    console.log('Author:', author);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "title": title,
      "content": content,
      "author": author
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:8080/api/posts", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        handleCancel();
        setSuccess(true);
      })
      .catch(error => console.log('error', error));
  }

  const handleCancel = () => {
    setTitle('');
    setContent('');
    setAuthor('');
  }

  return (
    <div className='pinpo-blog'>
      <header className='list-header'>
        <h1 className='main-title'>Nouvel article</h1>
        <Link to={`/`}>
          <img className='logo' src='../../../logo.png' alt='Logo Pinpo' />
        </Link>        
      </header>
      <section className='instructions'>
        <form onSubmit={handleSubmit}>
          <div className='titleInput'>
            <label htmlFor="title">Titre </label>
            <input 
              type="text" 
              id="title" 
              value={title} 
              onChange={(event) => setTitle(event.target.value)}
              required
              placeholder = "Choisissez un titre pour cet article"
            />
          </div>
          <div className='titleInput'>
            <label htmlFor="content">Contenu :</label>
            <textarea 
              id="content" 
              value={content} 
              onChange={(event) => setContent(event.target.value)}
              required
              placeholder="John Doe"
            ></textarea>
          </div>
          <div className='titleInput'>
            <label htmlFor="author">Auteur :</label>
            <input 
              type="text" 
              id="author" 
              value={author} 
              onChange={(event) => setAuthor(event.target.value)}
              required
              placeholder="Le contenu de l'article ici..."
            />
          </div>
          <div className="formButtons">
            <button type="button" onClick={handleCancel}>Annuler</button>
            <button type="submit">Publier</button>            
          </div>
        </form>
        {success && <p>Success !</p>}
      </section>
    </div>
  )
}

export default NewPost