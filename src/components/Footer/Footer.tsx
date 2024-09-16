import { Button, Col, Collapse, Input, Row, Space } from "antd";
import "./footer.css";
import { Link } from "react-router-dom";
import { Typography } from "antd";
import { useMediaQuery } from "react-responsive";

const { Title, Paragraph } = Typography;
const { Panel } = Collapse;

export default function MainFooter() {
  const isMobile = useMediaQuery({ query: "(max-width: 575px)" });
  return (
    <section id="footer">
      <div className="footer_container">
        <Row gutter={16}>
          <Col xs={24} sm={12} md={8} lg={6} xl={6}>
            <Space direction="vertical" size="middle">
              <div className="logo">
                <Link to={"/"}>
                  <img src="/src/assets/main/logo-retina_140x.png" alt="" />
                </Link>
              </div>
              <div className="address">
                <Paragraph>
                  Calista Wise 7292 Dictum Av. Antonio, Italy.
                </Paragraph>
              </div>
              <div className="phone_number">
                <Paragraph>(+01)-800-3456-88</Paragraph>
              </div>
              <div className="mail">
                <Paragraph>
                  <a href="mailto:contact@company.com" target="_blank">contact@company.com</a>
                </Paragraph>
              </div>
              <div className="social_links">
                <a href="#">
                  {" "}
                  <img
                    src="/src/assets/icons/facebook-alt-svgrepo-com.svg"
                    alt=""
                  />
                </a>
                <a href="#">
                  {" "}
                  <img src="/src/assets/icons/twitter-svgrepo-com.svg" alt="" />
                </a>
                <a href="#">
                  {" "}
                  <img
                    src="/src/assets/icons/instagram-outline-svgrepo-com.svg"
                    alt=""
                  />
                </a>
                <a href="#">
                  {" "}
                  <img
                    src="/src/assets/icons/pinterest-svgrepo-com.svg"
                    alt=""
                  />
                </a>
              </div>
            </Space>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6} xl={6}>
            {isMobile ? (
              <Collapse>
                <Panel header="Useful links" key="1">
                  <Space direction="vertical" size="middle">
                    <Title level={3}>Useful links</Title>
                    <Paragraph>Delivery Information</Paragraph>
                    <Paragraph>Terms &amp; Condition</Paragraph>
                    <Paragraph>Customer Service</Paragraph>
                    <Paragraph>Privacy Policy</Paragraph>
                    <Paragraph>Search Terms</Paragraph>
                  </Space>
                </Panel>
              </Collapse>
            ) : (
              <Space direction="vertical" size="middle">
                <Title level={3}>Useful links</Title>
                <Paragraph>Delivery Information</Paragraph>
                <Paragraph>Terms &amp; Condition</Paragraph>
                <Paragraph>Customer Service</Paragraph>
                <Paragraph>Privacy Policy</Paragraph>
                <Paragraph>Search Terms</Paragraph>
              </Space>
            )}
          </Col>
          <Col xs={24} sm={12} md={8} lg={6} xl={6}>
            {isMobile ? (
              <Collapse>
                <Panel header="Get in touch" key="2">
                  <Space direction="vertical" size="middle">
                    <Title level={3}>Get in touch</Title>
                    <div className="getInTouch_box">
                      <Paragraph>Whatsapp</Paragraph>
                      <a href="https://wa.me/1556177338" target="_blank">+01556177338</a>
                    </div>
                    <div className="getInTouch_box">
                      <Paragraph>Real Live Support</Paragraph>
                      <Paragraph>Calista Antonio, Italy</Paragraph>
                    </div>
                    <div className="getInTouch_box">
                      <Paragraph>Monday - Friday</Paragraph>
                      <Paragraph>08:00 - 20:00</Paragraph>
                    </div>
                    <div className="getInTouch_box">
                      <Paragraph>Saturday</Paragraph>
                      <Paragraph>09:00 - 21:00</Paragraph>
                    </div>
                    <div className="getInTouch_box">
                      <Paragraph>Sunday</Paragraph>
                      <Paragraph>13:00 - 22:00</Paragraph>
                    </div>
                  </Space>
                </Panel>
              </Collapse>
            ) : (
              <Space direction="vertical" size="middle">
                <Title level={3}>Get in touch</Title>
                <div className="getInTouch_box">
                  <Paragraph>Whatsapp</Paragraph>
                  <a href="https://wa.me/1556177338" target="_blank">+01556177338</a>
                </div>
                <div className="getInTouch_box">
                  <Paragraph>Real Live Support</Paragraph>
                  <Paragraph>Calista Antonio, Italy</Paragraph>
                </div>
                <div className="getInTouch_box">
                  <Paragraph>Monday - Friday</Paragraph>
                  <Paragraph>08:00 - 20:00</Paragraph>
                </div>
                <div className="getInTouch_box">
                  <Paragraph>Saturday</Paragraph>
                  <Paragraph>09:00 - 21:00</Paragraph>
                </div>
                <div className="getInTouch_box">
                  <Paragraph>Sunday</Paragraph>
                  <Paragraph>13:00 - 22:00</Paragraph>
                </div>
              </Space>
            )}
          </Col>
          <Col xs={24} sm={12} md={8} lg={6} xl={6}>
            <Space direction="vertical" size="middle">
              <Title level={3}>Newsletter signup</Title>
              <Paragraph>
                Subscribe to our newsletters now and stay up-to-date with new
                collections
              </Paragraph>
              <Space.Compact style={{ width: "100%" }}>
                <Input placeholder="Your email address" />
                <Button type="primary">Subscribe</Button>
              </Space.Compact>
              <div>
                <img src="/src/assets/visa/payment-icons_180x.png" alt="" />
              </div>
            </Space>
          </Col>
        </Row>
      </div>
    </section>
  );
}
