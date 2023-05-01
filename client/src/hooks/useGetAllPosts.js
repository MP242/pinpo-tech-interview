import { useState,useCallback } from 'react';

export function useGetAllPosts() {
    const [allPosts, setAllPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getAllPosts = useCallback(
      (number,callback) => {
        if (!Number.isInteger(number)) {
          console.error("Invalid number provided");
          return;
        }
        setLoading(true);
        return fetch(`http://localhost:8080/api/posts/home/${number}`)
          .then((response) => response.json())
          .then((data) => {
            if (callback) {
              setAllPosts(callback(data));
            } else {
              setAllPosts(data);
            }
            setLoading(false);
          })
          .catch((error) => {
            console.error(error);
            setError(error);
            setLoading(false);
          });
      },
      []
    );
    
    return { allPosts, loading, error, getAllPosts };
}
