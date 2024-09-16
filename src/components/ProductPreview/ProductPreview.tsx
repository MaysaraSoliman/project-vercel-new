import "./productPreview.css"; // Ensure this path is correct
import {
  Button,
  Flex,
  Image,
  InputNumber,
  InputNumberProps,
  Radio,
  RadioChangeEvent,
  Rate,
  Space,
} from "antd"; // Import Radio instead of Radio.Group
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { useQuery } from "@apollo/client";
import { Get_TrendyProductsFilteredByID } from "../../queries/trendyQueries";
import Loading from "../Loading/Loading";
import Product from "../../types/types";
import AddToCartBtn from "../AddToCartBtn/AddToCartBtn";

//

// import ReactImageMagnify from 'react-image-magnify';

//

const { Title } = Typography;
const { Group } = Radio; // Destructure Group from Radio

export default function ProductPreview() {
  const { productId } = useParams(); // used For Get Data ID From URL
  const [productMainImageValue, setProductMainImageValue] = useState("");
  const [currentCartInputValue, setCurrentCartInputValue] = useState<number>(1);
  const [loadingSpin, setLoadingSpin] = useState(true);

  // Fetch Data By ID
  const { loading, error, data } = useQuery(Get_TrendyProductsFilteredByID, {
    variables: { id: productId },
  });

  // Set initial productMainImageValue based on data
  useEffect(() => {
    if (data && data.allTrendyProducts.length > 0) {
      setProductMainImageValue(data.allTrendyProducts[0].productImage);
      setCurrentCartInputValue(1);
    }
  }, [data]);

  // Spin Loading Timeout
  useEffect(() => {
    let timer: number;
    setLoadingSpin(true);
    if (!loading) {
      timer = setTimeout(() => {
        setLoadingSpin(false);
      }, 500);
    }
    return () => clearTimeout(timer);
  }, [loading]);

  const onProductImageChange = (e: RadioChangeEvent) => {
    if (typeof e.target.value === "string") {
      // Ensure e.target.value is a string
      setProductMainImageValue(e.target.value);
    }
  };

  const handleCartInputChange: InputNumberProps["onChange"] = (value) => {
    setCurrentCartInputValue(Number(value));
  };

  if (error) return <p>Error</p>;
  return (
    <div id="productPreview">
      <div className="container">
        {loadingSpin ? (
          <Loading />
        ) : (
          <Flex
            className="singleProduct_container"
            gap="large"
            key={data?.allTrendyProducts[0].id}
          >
            <div className="product_images">
              <div className="images_category">
                <Group
                  value={productMainImageValue}
                  onChange={onProductImageChange}
                  options={data?.allTrendyProducts[0]?.thumbinals?.map(
                    (item: string) => ({
                      label: (
                        <div className="image_box">
                          <img src={item} />{" "}
                        </div>
                      ),
                      value: item,
                    })
                  )}
                />
              </div>
              <div className="main_image">

                <Image
                  className="main_singleProduct_img"
                  src={productMainImageValue}
                />

                {/* <Image.PreviewGroup
                  items={data?.allTrendyProducts[0].thumbinals}
                >
                  <Image 
                    className="main_singleProduct_img"
                    src={productMainImageValue}
                  />
                </Image.PreviewGroup> */}
              </div>
            </div>
            <div className="product_info">
              <Space direction="vertical" size="middle">
                {data?.allTrendyProducts?.map((item: Product) => (
                  <div className="info" key={item.id}>
                    <Title level={4}>{item.productTitle}</Title>
                    <Title level={5}>${item.productNewPrice}.00</Title>
                    <div className="rate">
                      <Rate allowHalf defaultValue={item.reviews} disabled />
                      <Title level={5}>({item.reviews})</Title>
                    </div>
                    <div className="describtion">
                      <Title level={5}>
                        Lorem Ipsum has been the industry’s standard dummy text
                        ever since the 1500s
                      </Title>
                    </div>
                    <div className="buttons">
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
                ))}
              </Space>
            </div>
          </Flex>
        )}
      </div>
    </div>
  );
}
