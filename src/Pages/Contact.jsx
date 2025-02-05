import { useState } from "react";
import "../Pages/Styles/Contact.scss"

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="contact-us">
      <h2>Let’s Bring Your Smart Home Vision to Life.</h2>

      <div className="contact-content">
        {/* Contact Form */}
        <div className="contact-form">
          <h3>Get in Touch</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Direct Contact Info */}
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p><strong>Phone:</strong> +1 234 567 890</p>
          <p><strong>Email:</strong> info@yourdomain.com</p>

          {/* CTA Buttons */}
          <div className="cta-buttons">
            <button>Schedule Your Free Consultation</button>
            <button>Ask a Question</button>
          </div>
        </div>
      </div>
    </div>
  );
};
