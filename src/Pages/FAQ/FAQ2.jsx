import React from "react";
import "./styles/faq.scss";

export const FAQ = () => {
  return (
    <div className="faq-container pb-5">
      {/* Hero Section */}
      <div className="faq-hero">
        <h1>Your Questions, Answered</h1>
        <p>We’re here to make your smart outdoor experience effortless and enjoyable.</p>
      </div>

      {/* Popular Queries Carousel */}
      <div id="faqCarousel" className="carousel slide faq-carousel" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="carousel-item-content">
              <h3>How to Install the Software?</h3>
              <p>Visit our "Getting Started" page for detailed installation instructions.</p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-item-content">
              <h3>What are the Payment Methods?</h3>
              <p>We accept Credit Cards, PayPal, and Bank Transfers.</p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-item-content">
              <h3>How to Reset My Password?</h3>
              <p>Click "Forgot Password" on the login page and follow the instructions.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#faqCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#faqCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* FAQ Accordions */}
      {/* <div className="accordion faq-accordion" id="faqAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Installation and Compatibility
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              <p>
                Our software supports Windows, macOS, and Linux. Visit the{" "}
                <a href="#">compatibility page</a> for more details.
              </p>
              <p>
                To install, download the installer from the{" "}
                <a href="#">official website</a> and follow the setup wizard.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Billing and Pricing
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              <ul>
                <li>We offer flexible plans, starting with a free 14-day trial.</li>
                <li>You can upgrade or downgrade your plan anytime via the account settings.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Troubleshooting Tips
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              <p>
                If you encounter issues, restart your device and reinstall the software. For persistent issues, contact{" "}
                <a href="#">support</a>.
              </p>
            </div>
          </div>
        </div>
      </div> */}
       <div className="FAQ-Accordion mt-4">
      <h1 className="my-4">FREQUENTLY ASKED QUESTION </h1>
      <div class="accordion  accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              <h2>Can I hire someone to put furniture together?</h2>
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <p>
                {" "}
                Absolutely! Smart Automator can connect you with handy Taskers
                who are experienced in all kinds of furniture assembly,
                including beds, dressers, tables, IKEA furniture, and outdoor
                patio furniture. Taskers can bring their own tools to assemble
                your furniture and move it just where you need it.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              <h2> How much does it cost to assemble furniture?</h2>
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <p>
                {" "}
                Taskers offer furniture assembly services at rates from $18-28
                per hour. If you need any old furniture removed, ask your Tasker
                if they can bring their vehicle to help you!
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              <h2> How long does it take to assemble furniture?</h2>
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <p>
                Furniture assembly typically takes between 1-4 hours depending
                on the size and complexity of the furniture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

      {/* Quick Links Section */}
      <div className="faq-links py-5">
        <h2>Quick Links</h2>
        <ul>
          <li>
            <i className="bi bi-gear"></i>
            <a href="#">Installation Guide</a>
          </li>
          <li>
            <i className="bi bi-cash"></i>
            <a href="#">Pricing Plans</a>
          </li>
          <li>
            <i className="bi bi-question-circle"></i>
            <a href="#">Troubleshooting Guide</a>
          </li>
          <li>
            <i className="bi bi-envelope"></i>
            <a href="#">Contact Support</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
