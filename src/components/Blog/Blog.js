import { useState, useEffect } from "react";
import { GraphQLClient } from "graphql-request";
import "./Blog.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { Navigate } from "react-router-dom";

export default function Blogs() {
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const [user] = useAuthState(auth);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const query = `
        {
          user(username: "visheshraghuvanshi") {
            publication {
              posts(page: 0) {   
                title
                brief
                coverImage
                slug
              }
            }
          }
        }
      `;

      const client = new GraphQLClient("https://api.hashnode.com/");
      const data = await client.request(query);
      setPosts(data.user.publication.posts);
    };

    fetchPosts();
  }, []);
  
  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="blog-list">
      {posts.map((post) => (
        <div key={post.title} className="post">
          <a href={"https://visheshraghuvanshi.tech/" + post.slug}>
            <h3>{post.title}</h3>
            <img src={post.coverImage} alt="" />
          </a>
          <p>{post.brief}</p>
        </div>
      ))}
    </div>
  );
}