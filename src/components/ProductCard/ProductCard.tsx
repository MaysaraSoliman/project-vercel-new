import { Link } from "react-router-dom";
import product from "../../types/types";
import "./productCard.css";
import { Card, Typography } from "antd";
const { Title } = Typography;
export default function ProductCard({trendyProduct}: {trendyProduct : product}) {
  return (
    <div className="product_card">
    <Link to={`/Shop/${trendyProduct.id}`}>
    <Card
        hoverable
        cover={<img alt="example" src={trendyProduct.productImage} />}
      >
        <Title level={4}>{trendyProduct.productTitle}</Title>
        <Title level={5}>${trendyProduct.productNewPrice}.00</Title>
      </Card>
    </Link>
    </div>
  );
}
