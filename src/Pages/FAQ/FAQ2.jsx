import React from "react";
import "./styles/faq.scss";

export const FAQ = () => {
  const faqData = [
    {
      question: "What is Control4, and how does it work?",
      answer: "Control4 is a smart home automation system that brings all your devices together into one easy-to-use platform. Whether it’s outdoor lighting, music, TVs, or security cameras, you can control everything from your smartphone, tablet, or a sleek touchscreen panel.",
    },
    {
      question: "Can Control4 be integrated with my existing devices?",
      answer: "Absolutely! Control4 is designed to work with thousands of smart devices. If you already have smart lighting, speakers, or cameras, we can integrate them into your new Control4 system.",
    },
    {
      question: "What outdoor spaces can be automated?",
      answer: "Control4 can transform nearly every aspect of your outdoor living area. You can automate patios, pool and spa areas, outdoor kitchens, gardens, and pathways to create the perfect ambiance.",
    },
    {
      question: "How much does an outdoor automation setup cost?",
      answer: "The cost depends on your needs, space size, and desired features. We offer free consultations, transparent pricing, and scalable solutions that grow with you.",
    },
    {
      question: "Do you offer ongoing support after installation?",
      answer: "Yes! We provide personalized training, ongoing support, and future upgrades to ensure your system always meets your needs.",
    },
  ];

  return (
    <div className="faq-container pb-5">
      {/* Hero Section */}
      <div className="faq-hero">
        <h2>Your Questions, Answered</h2>
        <p>
          We’re here to make your outdoor smart home experience effortless and
          enjoyable. Discover how we can help you create the perfect outdoor oasis.
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className="faq-accordion mt-5">
        <h2 className="my-4 text-center">Frequently Asked Questions</h2>
        <div className="accordion accordion-flush" id="faqAccordion">
          {faqData.map((item, index) => (
            <div className="accordion-item mt-2" key={index}>
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded="false"
                  aria-controls={`collapse${index}`}
                >
                  {item.question}
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading${index}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">{item.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="faq-cta text-center mt-5">
        <p>Still have questions? Contact us today and let’s bring your smart outdoor vision to life!</p>
        <button className="btn btn-primary">Ask Us a Question</button>
      </div>
    </div>
  );
};
