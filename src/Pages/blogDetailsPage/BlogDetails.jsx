import "./styles/blogDetails.scss";
import img1 from "../../assets/tab1.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { format } from "timeago.js";
import moment from "moment";

export const BlogDetails = () => {
  const { id } = useParams();
  const [blogsWithID, setBlogsWithID] = useState(null);
  const [blogs, setBlogs] = useState(null);
  const [selectedBlog, setSelectedBlog] = useState(null)

  const getBlogsWithID = async () => {
    await axios
      .get(`${import.meta.env.VITE_SOME_KEY}/blog/${id}`)
      .then((res) => {
        console.log(res.data.blog);
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
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    getBlogsWithID();
    getBlogs();
  }, [id]);
  return (
    <div className="blogDetailsPage">
      <div className="blogWrapper">
        <button className="backButton" onClick={() => window.location.replace('/')}>
          Go Back
        </button>

        <div className="contentWrapper">
          <div className="imageWrapper">
            <img src={blogsWithID?.images[0]} alt="Blog Image" />
          </div>
          <div className="parawrapper">
            <h2 className="blogTitle">{blogsWithID?.title}</h2>
            <p className="blogDate">
              Published on:{" "}
              {moment(blogsWithID?.createdAt).format("DD/MM/YYYY")}
            </p>

            <p className="" style={{ color: "grey" }}>
              {blogsWithID?.shortDescription}
            </p>

            <p className="blogDescription">{blogsWithID?.description}</p>
          </div>
        </div>

        <div className="relatedBlogs">
          <h3>Related Blogs</h3>
          <div className="relatedBlogList">
            {blogs?.filter((el) => {
              return el._id !== id
            }).map((list) => (
              <Link
                to={`/blogdetails/${list._id}`}
                style={{ textDecoration: "none" }}
              >
                <div className="blogCard">
                  <img src={list.images[0]} alt="Related Blog" />
                  <h5>{list.title}</h5>
                  <p>{list.description}...</p>
                  <button className="readMore">Read More</button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
