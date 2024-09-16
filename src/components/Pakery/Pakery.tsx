import "./pakery.css";
import { Flex, Typography } from "antd";
const { Title } = Typography;
export default function Pakery() {
  return (
    <section id="pakery">
      <div className="container">
        <Flex className="pakery_container" align="center" justify="space-between">
          <div className="col">
            <div className="image">
              <img src="/src/assets/pakery/banner1.jpg" alt="" />
            </div>
            <div className="info">
              <Title data-testid="mini" level={3}>Mini backpack</Title>
              <Title level={4}>Bags & Accessories</Title>
            </div>
          </div>
          <div className="col">
            <div className="image">
              <img src="/src/assets/pakery/banner2.jpg" alt="" />
            </div>
            <div className="info">
              <Title level={3}>New handbag</Title>
              <Title level={4}>Enjoy this fall trend</Title>
            </div>
          </div>
          <div className="col">
            <div className="image">
              <img src="/src/assets/pakery/banner3.jpg" alt="" />
            </div>
            <div className="info">
              <Title level={3}>Big sale</Title>
              <Title level={4}>Sale off 50%</Title>
            </div>
          </div>
        </Flex>
      </div>
    </section>
  );
}
