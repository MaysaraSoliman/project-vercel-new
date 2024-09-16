import { Badge, Button, Drawer, Flex, Typography } from "antd";
import "./topNavBar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import { useCartDrawer } from "../../context/cartContext/cartDrawerContext";
import { useShoppingCart } from "../../context/cartContext/shoppingCartContext";
import CustomizedConfetti from "../Animations/Confetti";

const { Title } = Typography;
export default function TopNavBar() {
  const { cart } = useShoppingCart();

  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);
  const [isFavouriteOpen, setIsFavourite] = useState<boolean>(false);

  // Cart Drawer useContext
  const { isCartOpen, setIsCartOpen } = useCartDrawer();
  const openSearchDrawer = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  const openLoginDrawer = () => {
    setIsLoginOpen(!isLoginOpen);
  };
  const openFavourtieDrawer = () => {
    setIsFavourite(!isFavouriteOpen);
  };
  const openCartDrawer = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="top_navBar">
      <div className="container">
        <Flex gap="middle" justify="space-between" align="center">
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
              <img src="/src/assets/icons/pinterest-svgrepo-com.svg" alt="" />
            </a>
          </div>
          <div className="logo">
            <Link to={"/"}>
              <img src="/src/assets/main/logo-retina_140x.png" alt="" />
            </Link>
          </div>
          <div className="actions_icons">
            <Button onClick={openSearchDrawer}>
              <img src="/src/assets/icons/search-svgrepo-com.svg" alt="" />
              <Drawer
                title="SEARCH OUR SITE"
                onClose={openSearchDrawer}
                open={isSearchOpen}
              >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </Drawer>
            </Button>
            <Button onClick={openLoginDrawer}>
              <img src="/src/assets/icons/user-2-svgrepo-com.svg" alt="" />
              <Drawer
                title="LOGIN"
                onClose={openLoginDrawer}
                open={isLoginOpen}
              >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </Drawer>
            </Button>
            <Button onClick={openFavourtieDrawer}>
              <img src="/src/assets/icons/favourite-svgrepo-com.svg" alt="" />
              <Drawer
                title="FAVOURITE"
                onClose={openFavourtieDrawer}
                open={isFavouriteOpen}
              >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </Drawer>
            </Button>
            <Badge count={cart.length}>
              <Button onClick={openCartDrawer}>
                <img src="/src/assets/icons/cart-1-svgrepo-com.svg" alt="" />
                <Drawer
                  className="shopping_cart"
                  title="SHOPPING CART"
                  onClose={openCartDrawer}
                  open={isCartOpen}
                  footer={
                    <Flex align="center" justify="space-between">
                      <div>
                        <Title level={5}>Subtotal:</Title>
                      </div>
                      <div>
                        <Title level={5}>
                          ${" "}
                          {cart.reduce(
                            (accumulator, item) =>
                              accumulator +
                              item.productNewPrice * item.quantity,
                            0
                          )}
                          .00
                        </Title>
                      </div>
                    </Flex>
                  }
                >
                  <CustomizedConfetti />
                  <Cart />
                </Drawer>
              </Button>
            </Badge>
          </div>
        </Flex>
      </div>
    </div>
  );
}
