import { Badge, Button, Drawer, Flex , Typography} from "antd";
import "./mobileNavBar.css";
import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../../context/cartContext/shoppingCartContext";
import Cart from "../Cart/Cart";

const { Title } = Typography;

export default function MobileNavBar() {
  const { cart } = useShoppingCart();

  const [isOpenMobileMenuBar, setIsOpenMobileMenuBar] =
    useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);
  const [isFavouriteOpen, setIsFavourite] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const openMobileMenuBar = () => {
    setIsOpenMobileMenuBar(!isOpenMobileMenuBar);
  };
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
          <div className="mobile_barMenu">
            <MenuOutlined
              style={{ fontSize: "20px" }}
              onClick={openMobileMenuBar}
            />
            <Drawer
              title="MENU"
              onClose={openMobileMenuBar}
              open={isOpenMobileMenuBar}
              placement="left"
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Drawer>
          </div>
          <div className="logo">
            <Link to={"/"}><img src="/src/assets/main/logo-retina_140x.png" alt="" /></Link>
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
                  title="SHOPPING CART"
                  onClose={openCartDrawer}
                  open={isCartOpen}
                  footer={
                    <Flex align="center" justify="space-between">
                      <div>
                        <Title level={5}>Subtotal:</Title>
                      </div>
                      <div>
                        <Title level={5}>$ {cart.reduce((accumulator, item) => accumulator + (item.productNewPrice * item.quantity), 0)}.00</Title>
                      </div>
                    </Flex>
                  }
                >
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
