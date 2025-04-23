import "./styles/blogDetails.scss";
import img1 from "../../assets/tab1.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, useLocation } from "react-router-dom";
import { format } from "timeago.js";
import moment from "moment";

export const BlogDetails = () => {
  // const { id } = useParams();
  const location = useLocation();
  const id = location.state?.id;
  // console.log("id", id)
  const [blogsWithID, setBlogsWithID] = useState(null);
  const [blogs, setBlogs] = useState(null);
  const [selectedBlog, setSelectedBlog] = useState(null);

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
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    getBlogsWithID(id);
    getBlogs();
  }, [id]);
  return (
    <div className="blogDetailsPage">
      <div className="blogWrapper">
        <button
          className="backButton"
          onClick={() => window.location.replace("/")}
        >
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

            <div
              style={{ color: "grey" }}
              dangerouslySetInnerHTML={{
                __html: blogsWithID?.shortDescription,
              }}
            ></div>

            <div
              className="blogDescription"
              dangerouslySetInnerHTML={{ __html: blogsWithID?.description }}
            ></div>
          </div>
        </div>

        <div className="relatedBlogs">
          <h3>Related Blogs</h3>
          <div className="relatedBlogList">
            {blogs
              ?.filter((el) => {
                return el._id !== id;
              })
              .slice(0, 3)
              .map((list) => (
                <Link
                  to={`/blogdetails/${list?.title
                    .toLowerCase()
                    .split(" ")
                    .join("-")}`}
                  state={{ id: list._id }} // ✅ Correct way to pass state
                  style={{ textDecoration: "none" }}
                >
                  <div className="blogCard">
                    <img src={list.images[0]} alt="Related Blog" />
                    <h5>{list.title}</h5>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: list.shortDescription + "...",
                      }}
                    ></div>

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
