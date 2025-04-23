import React from "react";
import { Row, Col, Card } from "antd";
import "./styles/aboutUs.scss";

export const AboutUs2 = () => {
  return (
    <div className="about-us">
      <div className="about-us-header">
        <h2>About Us</h2>
        <p>Building trust through expertise, quality, and innovation.</p>
      </div>

      <div className="mission">
        <h2>Our Mission</h2>
        <p>
          To empower New Yorkers to live smarter, safer, and more comfortably
          through personalized home improvement solutions that fuse innovation
          with everyday practicality.
        </p>
      </div>

      <div className="values">
        <h2>Our Values</h2>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Card title="Integrity" bordered={false}>
              We uphold honesty and transparency in all aspects of our work.
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Innovation" bordered={false}>
              We embrace technology and creativity to deliver superior results.
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Customer Focus" bordered={false}>
              Your satisfaction is our priority, and we strive to exceed
              expectations.
            </Card>
          </Col>
        </Row>
      </div>

      <div className="team-introduction">
        <h2>Meet Our Team</h2>
        <p>
          Our team of skilled professionals is certified in home automation and
          related services. From experienced technicians to customer support
          specialists, we work together to bring the best to your home.
        </p>
      </div>

      <div className="certifications">
        <h2>Certifications and Expertise</h2>
        <p>
          We are certified by industry leaders like <strong>KNX</strong>,{" "}
          <strong>Crestron</strong>, and <strong>Z-Wave Alliance</strong>. With
          years of experience, we’ve successfully completed hundreds of projects
          in smart home installations and household services.
        </p>
      </div>

      <div className="unique-selling-points">
        <h2>What Sets Us Apart</h2>
        <ul>
          <li>Customized solutions tailored to your needs</li>
          <li>Round-the-clock customer support</li>
          <li>Affordable pricing without compromising on quality</li>
          <li>Commitment to eco-friendly and sustainable practices</li>
        </ul>
      </div>
    </div>
  );
};
