import "./styles/blogDetails.scss";
import img1 from "../../assets/tab1.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {format} from "timeago.js"
export const BlogDetails = () => {
  const { id } = useParams()
  const [blogsWithID, setBlogsWithID] = useState(null)
  const [blogs, setBlogs] = useState(null)

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
      .get(`${import.meta.env.VITE_SOME_KEY}/blog`)
      .then((res) => {
        console.log("blogssss", res.data.blog);
        setBlogs(res.data.blog);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    window.scrollTo(0, 0)
    getBlogsWithID()
    getBlogs()
  }, [])
  return (
    <div className="blogDetailsPage">
      <div className="blogWrapper">

        <button className="backButton" onClick={() => window.history.back()}>
          Go Back
        </button>

        <div className="contentWrapper">
          <div className="imageWrapper">
            <img src={blogsWithID?.images[0]} alt="Blog Image" />
          </div>
          <div className="parawrapper">

            <h2 className="blogTitle">{blogsWithID?.title}</h2>
            <p className="blogDate" >Published on:{blogsWithID?.createdAt}</p>

            <p className="" style={{ color: "grey" }}>{blogsWithID?.shortDescription}</p>

            <p className="blogDescription">
              {blogsWithID?.description}
            </p>
          </div>
        </div>

        <div className="relatedBlogs">
          <h3>Related Blogs</h3>
          <div className="relatedBlogList">
            {blogs?.slice(0, 3).map((list) => (

              <div className="blogCard">
                <img src={list.images[0]} alt="Related Blog" />
                <h5>{list.title}</h5>
                <p>
                  {list.description}...
                </p>
                <button className="readMore">Read More</button>
              </div>
            ))}


          </div>
        </div>
      </div>
    </div>
  );
};
