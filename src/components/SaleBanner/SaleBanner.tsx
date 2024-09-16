import "./saleBanner.css"
import { Typography } from "antd";
const { Title, Text } = Typography;
export default function SaleBanner() {

  return (
    <section id="saleBanner">
      <div className="container">
        <div className="info">
          <Title level={3}>
            Sale <Text type="danger">25%</Text> off
          </Title>
          <Title level={4}>Applyng for all product Accessories &amp; Shoes</Title>
        </div>
      </div>
    </section>
  );
}
