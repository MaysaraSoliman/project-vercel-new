import { Link } from "react-router-dom";
import "./freshOutfits.css";
import { Button, Typography } from "antd";
const { Title } = Typography;

export default function FreshOutfits() {
  return (
    <div id="freshOutfits">
      <div className="container">
        <div className="info">
          <Title level={3}>The fresh</Title>
          <Title level={3}>outfits summer</Title>
          <Title level={4}>everything you love!</Title>
          <div className="button">
            <Link to={"/Shop"}>
              <Button>Shop Now</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
