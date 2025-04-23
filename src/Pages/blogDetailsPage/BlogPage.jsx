import React,{useState,useEffect} from "react";
import { Link,useParams,useLoaderData, useLocation } from 'react-router-dom';
import "./styles/blog.scss";
import axios from "axios";
const BlogPage = () => {
  // const { id } = useParams();
  const location = useLocation();
  const id = location.state?.id;
  // console.log("id2",id)
  const [blogsWithID, setBlogsWithID] = useState(null);
  const [blogs, setBlogs] = useState(null);
  const getBlogsWithID = async (id) => {
    await axios
      .get(`${import.meta.env.VITE_SOME_KEY}/blog/${id}`)
      .then((res) => {
        setBlogsWithID(res.data.blog);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getBlogs = async () => {
    await axios
      .get(`${import.meta.env.VITE_SOME_KEY}/get-blogs`)
      .then((res) => {
        setBlogs(res.data.blogs);
        console.log("added",res.data.blogs)
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    // getBlogsWithID(id);
    getBlogs();
  }, [id]);
  return (
    <div className="blog-container">
      {/* <h2>Outdoor Smart Living Blog</h2> */}
      <div className="blog-header">
        <h2>Outdoor Smart Solutions with Control</h2>
        <p>Create the ultimate outdoor experience with custom smart home features tailored to your needs.</p>
      </div>
      {blogs?.map((post, index) => (
        <div className={`blog-section ${index % 2 === 0 ? "left" : "right"}`} key={index}>
          {index % 2 === 0 ? (
            <>
              <div className="blog-image">
                <img src={post?.images[0]} alt={post?.title} />
              </div>
              <div className="blog-content">
                <h2>{post?.title}</h2>
                <p>{post?.description}</p>
                <ul>
                  {post?.content?.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <p >
                  <Link  to={`/blogdetails/${post?.title.toLowerCase().split(" ").join("-")}`} state={{ id: post._id }}  className="cta">
                   readMore
                  </Link>
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="blog-content">
                <h2>{post?.title}</h2>
                <p>{post?.description}</p>
                <ul>
                  {post?.content?.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <p >
                <Link  to={`/blogdetails/${post.title.toLowerCase().split(" ").join("-")}`} state={{ id: post._id }}  className="cta">
                   readMore
                  </Link>
              
                </p>
              </div>
              <div className="blog-image">
                <img src={post?.images[0]} alt={post?.title} />
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
