import "./cart.css";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../../context/cartContext/shoppingCartContext";
import { Flex, InputNumber, Space, Typography } from "antd";
import { useEffect, useState } from "react";
import { DeleteOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";

const { Text, Title } = Typography;

export default function Cart() {
  const { cart, updateCartItemQuantity, removeItemFromCart } =
    useShoppingCart();

  const [cartItems, setCartItems] = useState(cart);

  useEffect(() => {
    setCartItems(cart);
  }, [cart]);

  const handleInputChange = (itemId: number, value: number | null) => {
    updateCartItemQuantity(itemId, Number(value)); // Assuming updateCartItemQuantity expects itemId and quantity as numbers
  };

  return (
    <div id="shoppingCartDrawer">
      <div>
        {cartItems.length <= 0 ? (
          <p className="cart_empty">Cart is empty</p>
        ) : (
          <div className="shoppingCartDrawr_container">
            {cartItems.map((item) => (
              <div className="item_container" key={item.id}>
                <div className="image_box">
                  <Link to={`/shop/${item.id}`}>
                    <img src={item.productImage} alt="" />
                  </Link>
                </div>
                <div className="item_info">
                  <Space direction="vertical" size="small">
                    <Title level={5}>{item.productTitle}</Title>
                    <Text>${item.productNewPrice}.00</Text>
                    <Flex align="center" justify="space-between" gap={10}>
                      <div className="cartNumber_input">
                        <div className="input_number">
                          <div onClick={(e) => e.stopPropagation()}>
                            <InputNumber
                              min={1}
                              value={item.quantity}
                              onChange={(value) =>
                                handleInputChange(item.id, value)
                              }
                              addonAfter={
                                <div className="inc_dec_btns">
                                  <PlusOutlined
                                    onClick={() => {
                                      updateCartItemQuantity(
                                        item.id,
                                        item.quantity + 1
                                      );
                                    }}
                                  />
                                  <MinusOutlined
                                    onClick={() => {
                                      if (item.quantity <= 1) {
                                        removeItemFromCart(item.id);
                                      } else {
                                        updateCartItemQuantity(
                                          item.id,
                                          item.quantity - 1
                                        );
                                      }
                                    }}
                                  />
                                </div>
                              }
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="trash"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <DeleteOutlined
                          onClick={() => {
                            removeItemFromCart(item.id);
                          }}
                        />
                      </div>
                    </Flex>
                    <Flex>
                      <Text>Total: ${item.productNewPrice * item.quantity}.00</Text>
                    </Flex>
                  </Space>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
