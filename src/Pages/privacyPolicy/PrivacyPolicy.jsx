import React from "react";
import "../Styles/TermsOfService.scss";

export const PrivacyPolicy = () => {
  return (
    <div className="termsandprivacy d-flex mt-5">
      {/* <Sidebar /> */}
      <MainContent />
    </div>
  );
};

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>Articles in this section</h3>
      <ol>
        <li>1. The Platform.</li>
        <li>2. Use of the Platform.</li>
        <li>3. Fees, Billing, Invoicing, and Payment; Cancellation.</li>
        <li>4. Contests and Promotional Codes.</li>
        <li>5. Public Areas.</li>
        <li>6. Deactivation and Suspension.</li>
        <li>8. User Generated Content; Feedback.</li>
        <li>9. Intellectual Property Rights.</li>
        <li>11. Copyright Complaints and Copyright Agent.</li>
      </ol>
    </div>
  );
};
export const MainContent = () => {
  return (
    <div
      style={{
        padding: "24px",
        marginTop: "25px",
        fontFamily: "sans-serif",
        lineHeight: "1.6",
        color: "#333",
      }}
    >
      <h1
        style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "16px" }}
      >
        Privacy Policy
      </h1>
      <p>
        Welcome to Smart Automator! Your privacy is important to us. This
        Privacy Policy explains how we collect, use, and protect your
        information when you visit our website{" "}
        <a
          href="https://smartautomator.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://smartautomator.com
        </a>
        , contact us, or use our services.
      </p>

      <p>
        By using our website or engaging with our services, you consent to the
        terms of this Privacy Policy.
      </p>

      <h2>1. Information We Collect</h2>
      <h3>A. Personal Information</h3>
      <p>
        When you contact us through forms, request a quote, or communicate with
        us, we may collect:
      </p>
      <ul>
        <li>Your name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Address</li>
        <li>Project details or inquiry messages</li>
      </ul>

      <h3>B. Automatically Collected Information</h3>
      <p>
        We may collect certain information automatically when you visit our
        website, such as:
      </p>
      <ul>
        <li>IP address</li>
        <li>Browser type and version</li>
        <li>Pages you visit</li>
        <li>Time and date of your visit</li>
        <li>Device type</li>
      </ul>
      <p>This helps us improve user experience and website performance.</p>

      <h2>2. How We Use Your Information</h2>
      <p>We use your information to:</p>
      <ul>
        <li>Respond to your inquiries or service requests</li>
        <li>Provide and manage our home improvement services</li>
        <li>Send updates or promotional emails (only if you opt in)</li>
        <li>Improve our website and service offerings</li>
        <li>Ensure website security and prevent fraud</li>
      </ul>

      <h2>3. How We Protect Your Information</h2>
      <p>
        We implement appropriate technical and organizational security measures
        to protect your personal information. While no system can guarantee
        complete security, we work diligently to safeguard your data from
        unauthorized access, misuse, or disclosure.
      </p>

      <h2>4. Sharing Your Information</h2>
      <p>
        We do not sell, rent, or trade your personal information. We may share
        your data with trusted third- party service providers who assist us in
        operating our website or delivering services—only to the extent
        necessary.
      </p>
      <p>
        We may also disclose your information when required by law or to protect
        our rights, property, or safety.
      </p>

      <h2>5. Cookies & Tracking Technologies</h2>
      <p>
        Our website may use cookies to enhance your browsing experience,
        understand visitor behavior, and track usage analytics. You may choose
        to disable cookies through your browser settings, but doing so may
        affect website functionality.
      </p>

      <h2>6. Your Choices and Rights</h2>
      <p>You may:</p>
      <ul>
        <li>Request access to or correction of your personal information</li>
        <li>
          Opt out of marketing emails by clicking “unsubscribe” in our
          communications
        </li>
        <li>
          Request that we delete your personal information (subject to legal
          obligations)
        </li>
      </ul>
      <p>
        To make such requests, please email us at:{" "}
        <strong>[Insert Email Address]</strong>
      </p>

      <h2>7. Third-Party Links</h2>
      <p>
        Our website may contain links to third-party websites. We are not
        responsible for the content or privacy practices of those websites. We
        encourage you to read their privacy policies.
      </p>

      <h2>8. Children’s Privacy</h2>
      <p>
        Our services are not intended for individuals under the age of 18. We do
        not knowingly collect personal information from children. If we learn we
        have inadvertently collected such data, we will delete it promptly.
      </p>

      <h2>9. Updates to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Changes will be
        posted on this page with an updated effective date. We encourage you to
        review this page periodically.
      </p>

      <h2>10. Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy or our data practices,
        please contact us.
      </p>
    </div>
  );
};
