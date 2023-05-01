import React,{useEffect,useState} from 'react'
import './_Home.scss'
import { Link } from "react-router-dom";
import { useGetAllPosts } from '../../hooks/useGetAllPosts';

function Home() {

  const { allPosts, loading, error, getAllPosts } = useGetAllPosts();
  const [offset, setOffset] = useState(20);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    getAllPosts(offset);
  }, [offset,getAllPosts]);

  useEffect(() => {
    window.onscroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop
        === document.documentElement.offsetHeight
      ) {
        setScrollPosition(window.pageYOffset);
        setOffset(offset + 20);
      }
    };
  }, [offset]);

  useEffect(() => {
    window.scrollTo(0, scrollPosition);
  }, [scrollPosition, allPosts]);

  const formatDate = (dateString) => {
      const date = new Date(dateString);
      const options = { day: 'numeric', month: 'long', year: 'numeric' };
      return date.toLocaleDateString('fr-FR', options);
  };

  if (loading && allPosts.length === 0) {
    return (
      <div className="loading-dots">
        <p>Loading</p>
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </div>)
  };

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
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
          {allPosts.map((post) => (
            <div key={post._id} data-testid="post">
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
  )
}

export default Home