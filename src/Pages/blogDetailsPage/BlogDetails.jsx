import "./styles/blogDetails.scss";
import img1 from "../../assets/tab1.png";

export const BlogDetails = () => {
  return (
    <div className="blogDetailsPage">
     <div className="blogWrapper">

     <button className="backButton" onClick={() => window.history.back()}>
        Go Back
      </button>
      <div className="contentWrapper">
        <div className="imageWrapper">
          <img src={img1} alt="Blog Image" />
        </div>
        <div className="parawrapper">

        <h2 className="blogTitle">Blog Title</h2>
        <p className="blogDate">Published on: November 25, 2024</p>
        <p className="blogDescription">
          This is the detailed description of the blog post. It can have multiple
          paragraphs explaining the content of the blog. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.
        </p>
        </div>
      </div>
      <div className="relatedBlogs">
        <h3>Related Blogs</h3>
        <div className="relatedBlogList">
          <div className="blogCard">
            <img src={img1} alt="Related Blog" />
            <h5>Related Blog Title</h5>
            <p>
              A brief description of the related blog goes here, max two lines...
            </p>
            <button className="readMore">Read More</button>
          </div>

          <div className="blogCard">
            <img src={img1} alt="Related Blog" />
            <h5>Related Blog Title</h5>
            <p>
              A brief description of the related blog goes here, max two lines...
            </p>
            <button className="readMore">Read More</button>
          </div>
          <div className="blogCard">
            <img src={img1} alt="Related Blog" />
            <h5>Another Blog Title</h5>
            <p>
              Another brief description of the related blog, max two lines...
            </p>
            <button className="readMore">Read More</button>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
};
