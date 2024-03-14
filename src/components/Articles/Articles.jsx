import {useState, useEffect} from "react";
import {GraphQLClient} from "graphql-request";
import "./Articles.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import {useAuthState} from "react-firebase-hooks/auth";
import { auth } from '../FirebaseAuth'
import {Navigate} from "react-router-dom";

export default function Articles() {
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
        return <Navigate to="/login"/>;
    }

    const loadMorePosts = () => {
        setPostsToShow((prevValue) => prevValue + 10);
    };

    return (
        <>
            <Navbar/>
            <div className="blog-container">
                <h1 className="blog-heading">Articles</h1>
                <div className="blog-list">
                    {
                    posts.slice(0, postsToShow).map((post) => (
                        <div key={
                                post.url
                            }
                            className="post">
                            <a href={
                                `https://visheshraghuvanshi.tech/${
                                    post.slug
                                }`
                            }>
                                <h3 className="post-title">
                                    {
                                    post.title
                                }</h3>
                                {
                                post.coverImage && (
                                    <img src={
                                            post.coverImage.url
                                        }
                                        alt={
                                            post.title
                                        }
                                        className="post-image"/>
                                )
                            } </a>
                            <p className="post-brief">
                                {
                                post.brief
                            }</p>
                        </div>
                    ))
                } </div>
                {
                postsToShow < posts.length && (
                    <button className="load-more-btn"
                        onClick={loadMorePosts}>
                        Load More
                    </button>
                )
            } </div>
            <Footer/>
        </>
    );
}
