import { Button, InputNumber, InputNumberProps, Rate, Typography } from "antd";
import "./drawerProductView.css";
import { useQuery } from "@apollo/client";
import { Get_TrendyProductsFilteredByID } from "../../queries/trendyQueries";
import Product from "../../types/types";
import AddToCartBtn from "../AddToCartBtn/AddToCartBtn";
import { useState } from "react";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Title } = Typography;
export default function DrawerProductView({
  productID,
}: {
  productID: number;
}) {
  const [currentCartInputValue, setCurrentCartInputValue] = useState<number>(1);

  const { loading, error, data } = useQuery(Get_TrendyProductsFilteredByID, {
    variables: {
      id: productID,
    },
  });
  const handleCartInputChange: InputNumberProps["onChange"] = (value) => {
    setCurrentCartInputValue(Number(value));
  };

  if (loading) return <p>loading</p>;
  if (error) return <p>Error</p>;

  return (
    <div className="drawer">
      {data.allTrendyProducts.map((item: Product) => (
        <div key={item.id}>
          <div className="image">
            <Link to={`/Shop/${item.id}`}>
              <img src={item.productImage} alt="" />
            </Link>
          </div>
          <div className="info">
            <Link to={`/Shop/${item.id}`}>
              <Title level={4}>{item.productTitle}</Title>
            </Link>
            <Title level={5}>${item.productNewPrice}.00</Title>
            <div className="rate">
              <Rate allowHalf defaultValue={item.reviews} disabled />
              <Title level={5}>({item.reviews})</Title>
            </div>
            <div className="describtion">
              <Title level={5}>
                Lorem Ipsum has been the industry’s standard dummy text ever
                since the 1500s
              </Title>
            </div>
            <div className="button">
              <div className="addToCart_btns">
                <div className="cartNumber_input">
                  <div className="input_number">
                    <InputNumber
                      min={1}
                      defaultValue={currentCartInputValue}
                      value={currentCartInputValue}
                      controls={false}
                      onChange={handleCartInputChange}
                      addonAfter={
                        <div className="inc_dec_btns">
                          <PlusOutlined
                            onClick={() => {
                              setCurrentCartInputValue(
                                currentCartInputValue + 1
                              );
                            }}
                          />
                          <MinusOutlined
                            onClick={() => {
                              if (currentCartInputValue > 1) {
                                setCurrentCartInputValue(
                                  currentCartInputValue - 1
                                );
                              }
                            }}
                          />
                        </div>
                      }
                    />
                  </div>
                </div>
                <AddToCartBtn
                  product={item}
                  currentCartInputValue={currentCartInputValue}
                />
              </div>
              <Button className="buy_it_now">BUY IT NOW</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
