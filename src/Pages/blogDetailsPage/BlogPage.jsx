import React from "react";
import { Link } from 'react-router-dom';
import "./styles/blog.scss";

const BlogPage = () => {
  const blogs = [
    {
      title: "5 Ways Control4 Enhances Your Backyard Experience",
      headline: "Transform Your Backyard into a Smart Oasis",
      image: "https://urbancitations.s3.eu-north-1.amazonaws.com/cider-michigan.jpg",
      intro:
        "Discover how Control4 brings convenience, luxury, and innovation to your outdoor spaces. Here are five ways this smart home technology enhances your backyard experience:",
      content: [
        "Seamless Lighting Control: Adjust lights for any mood or occasion, from cozy evenings to lively gatherings, with a single tap.",
        "Weatherproof Sound Systems: Enjoy crystal-clear music outdoors with durable speakers built to withstand the elements.",
        "Outdoor TV Entertainment: Host movie nights under the stars with weatherproof TVs and seamless streaming.",
        "Smart Pool and Spa Automation: Control water temperature, lighting, and jets from your phone or tablet.",
        "Enhanced Security Features: Protect your outdoor spaces with motion-activated lights and integrated cameras.",
      ],
      cta: "Ready to upgrade your backyard? Contact us today!",
    },
    {
      title: "Smart Lighting Tips to Transform Your Outdoor Space",
      headline: "Light Up Your Backyard Like a Pro",
      image: "https://urbancitations.s3.eu-north-1.amazonaws.com/outside-view-restaurant-cottage-night-time.jpg",
      intro:
        "Smart lighting does more than illuminate your outdoor space—it creates ambiance, boosts security, and enhances usability. Here’s how to make the most of your lighting setup:",
      content: [
        "Layer Your Lighting: Use pathway lights, string lights, and uplighting for a balanced and inviting look.",
        "Automate Your Scenes: Program lighting scenes for specific occasions, such as 'Dinner Party' or 'Relaxation.'",
        "Use Motion Sensors: Increase safety and save energy with lights that activate only when needed.",
        "Highlight Landscaping: Draw attention to trees, water features, or garden beds with smart accent lighting.",
      ],
      cta: "Explore our outdoor lighting solutions today!",
    },
    {
      title: "The Future of Outdoor Living: Top Smart Trends in 2025",
      headline: "Stay Ahead with the Latest Outdoor Tech",
      image: "https://urbancitations.s3.eu-north-1.amazonaws.com/luxury-living-room-with-city-skyline-view-generative-ai.jpg",
      intro:
        "From AI-driven automation to eco-friendly smart solutions, 2025 is shaping up to be the year of innovation for outdoor living. Here are the top trends:",
      content: [
        "AI-Powered Customization: Smart systems that learn your preferences and adapt automatically.",
        "Eco-Friendly Solutions: Solar-powered lighting and energy-efficient devices for sustainable living.",
        "Integrated Voice Control: Use voice assistants to manage your outdoor spaces effortlessly.",
        "Advanced Security Systems: AI-enhanced cameras and smart locks designed for outdoor use.",
      ],
      cta: "Discover how these trends can transform your outdoor space today.",
    },
    {
      title: "How to Secure Your Outdoor Space with Control4",
      headline: "Keep Your Outdoor Spaces Safe and Smart",
      image: "https://urbancitations.s3.eu-north-1.amazonaws.com/back-view-deliverer-ringing-intercom-gate-customer-s-house-while-delivering-packages.jpg",
      intro:
        "Control4 doesn’t just enhance your outdoor lifestyle—it also provides peace of mind. Here’s how it secures your backyard and beyond:",
      content: [
        "Motion-Activated Lighting: Illuminate dark areas when movement is detected.",
        "Smart Cameras: Monitor your property in real time from anywhere in the world.",
        "Remote Access Control: Lock gates and access points using your phone or tablet.",
        "Custom Alerts: Receive notifications for unusual activity around your outdoor space.",
      ],
      cta: "Talk to us about enhancing your outdoor security today.",
    },
    {
      title: "7 Benefits of Outdoor Automation for Entertaining",
      headline: "Create the Ultimate Outdoor Entertainment Space",
      image: "https://urbancitations.s3.eu-north-1.amazonaws.com/stylish-young-woman-with-gift-boxes-christmas-shopping-concept-buying-gifts-family-friends.jpg",
      intro:
        "Hosting a gathering? Smart automation makes entertaining easier and more enjoyable. Here’s how:",
      content: [
        "Streamlined Entertainment: Control music, lights, and TVs from one device.",
        "Mood Lighting: Set the perfect ambiance with pre-programmed lighting scenes.",
        "Hands-Free Convenience: Use voice commands to adjust settings while entertaining.",
        "Enhanced Guest Experience: Impress guests with seamless automation and a luxury vibe.",
      ],
      cta: "Upgrade your space for effortless entertaining. Contact us today!",
    },
  ];

  return (
    <div className="blog-container">
      {/* <h2>Outdoor Smart Living Blog</h2> */}
      <div className="blog-header">
        <h2>Outdoor Smart Solutions with Control4</h2>
        <p>Create the ultimate outdoor experience with custom smart home features tailored to your needs.</p>
      </div>
      {blogs.map((post, index) => (
        <div className={`blog-section ${index % 2 === 0 ? "left" : "right"}`} key={index}>
          {index % 2 === 0 ? (
            <>
              <div className="blog-image">
                <img src={post?.image} alt={post?.title} />
              </div>
              <div className="blog-content">
                <h2>{post?.title}</h2>
                <p>{post?.intro}</p>
                <ul>
                  {post?.content?.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <p >
                  <Link to="/contact" className="cta">
                    {post?.cta}
                  </Link>
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="blog-content">
                <h2>{post?.title}</h2>
                <p>{post?.intro}</p>
                <ul>
                  {post?.content?.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <p >
                  <Link to="/contact" className="cta">
                    {post?.cta}
                  </Link>
                </p>
              </div>
              <div className="blog-image">
                <img src={post?.image} alt={post?.title} />
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
