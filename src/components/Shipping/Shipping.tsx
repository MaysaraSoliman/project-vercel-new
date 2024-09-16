import { Flex } from "antd";
import "./shipping.css";
import { Typography } from "antd";
const { Title } = Typography;
export default function Shipping() {
  return (
    <section id="shipping">
      <div className="container">
        <Flex
          className="shipping_container"
          align="center"
          justify="center"
          wrap="wrap"
          gap="middle"
        >
          <div className="col">
            <div className="icon_image">
              <img src="/src/assets/shipping/plane-svgrepo-com.svg" alt="" />
            </div>
            <Flex className="info" align="center" justify="center"  vertical>
              <Title level={3}>Free Shipping</Title>
              <Title level={4}>Free Shipping for all US order</Title>
            </Flex>
          </div>
          <div className="col">
            <div className="icon_image">
              <img src="/src/assets/shipping/headphones-svgrepo-com.svg" alt="" />
            </div>
            <Flex className="info" align="center" justify="center" vertical>
              <Title level={3}>Support 24/7</Title>
              <Title level={4}>We support 24h a day</Title>
            </Flex>
          </div>
          <div className="col">
            <div className="icon_image">
              <img src="/src/assets/shipping/refresh-2-svgrepo-com.svg" alt="" />
            </div>
            <Flex className="info" align="center" justify="center" vertical>
              <Title level={3}>100% Money Back</Title>
              <Title level={4}>You have 30 days to Return</Title>
            </Flex>
          </div>
          <div className="col">
            <div className="icon_image">
              <img src="/src/assets/shipping/door-lock-svgrepo-com.svg" alt="" />
            </div>
            <Flex className="info" align="center" justify="center" vertical>
              <Title level={3}>Payment Secure</Title>
              <Title level={4}>We ensure secure payment</Title>
            </Flex>
          </div>
          <div className="col">
            <div className="icon_image">
              <img src="/src/assets/shipping/piggy-svgrepo-com.svg" alt="" />
            </div>
            <Flex className="info" align="center" justify="center" vertical>
              <Title level={3}>Discount</Title>
              <Title level={4}>Up to 40% for member</Title>
            </Flex>
          </div>
        </Flex>
      </div>
    </section>
  );
}
