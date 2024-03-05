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
  const [postsToShow, setPostsToShow] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      const query = `
        query {
          publication(host: "visheshraghuvanshi.tech") {
            posts(first: 10) {
              edges {
                node {
                  title
                  brief
                  url
                  coverImage {
                    url
                  }
                  slug
                }
              }
            }
          }
        }
      `;

      const client = new GraphQLClient("https://gql.hashnode.com/");
      const data = await client.request(query);
      const postData = data.publication.posts.edges.map((edge) => edge.node);
      setPosts(postData);
    };

    fetchPosts();
  }, []);

  if (!user) {
    return <Navigate to="/login" />;
  }

  const loadMorePosts = () => {
    setPostsToShow((prevValue) => prevValue + 10);
  };

  return (
    <div className="blog-container">
      <h1 className="blog-heading">Articles</h1>
      <div className="blog-list">
        {posts.slice(0, postsToShow).map((post) => (
          <div key={post.url} className="post">
            <a href={`https://visheshraghuvanshi.tech/${post.slug}`}>
              <h3 className="post-title">{post.title}</h3>
              {post.coverImage && (
                <img
                  src={post.coverImage.url}
                  alt={post.title}
                  className="post-image"
                />
              )}
            </a>
            <p className="post-brief">{post.brief}</p>
          </div>
        ))}
      </div>
      {postsToShow < posts.length && (
        <button className="load-more-btn" onClick={loadMorePosts}>
          Load More
        </button>
      )}
    </div>
  );
}