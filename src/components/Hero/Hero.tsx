import { Button, Carousel } from "antd";
import { Typography } from "antd";
import { Link } from "react-router-dom";
import "./hero.css";

const { Title } = Typography;
export default function Hero() {
  return (
    <section id="hero">
      <Carousel autoplay speed={1200} effect="fade">
        <div className="carousel carousel1">
          <div className="info container">
            <Title level={4}>NEW FASHION</Title>
            <Title>Spring Summer</Title>
            <Title>Collection</Title>
            <div className="button">
              <Link to={"/Shop"}>
                <Button>SHOP NOW</Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="carousel carousel2">
          <div className="info container">
            <Title level={4}>ELESSI STORE</Title>
            <Title>Looking for</Title>
            <Title>the best price</Title>
            <div className="button">
              <Link to={"/Shop"}>
                <Button>SHOP NOW</Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="carousel carousel3">
          <div className="info container">
            <Title level={4}>ELESSI STORE</Title>
            <Title>Autumn</Title>
            <Title>& Winter 2024</Title>
            <div className="button">
              <Link to={"/Shop"}>
                <Button>SHOP NOW</Button>
              </Link>
            </div>
          </div>
        </div>
      </Carousel>
    </section>
  );
}
