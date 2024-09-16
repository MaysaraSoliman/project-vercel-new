import { Link, useLocation } from "react-router-dom";
import "./bottomNavBar.css";
import { Menu } from "antd";
import { useEffect, useState } from "react";
export default function BottomNavBar() {
  const [selectedKey, setSelectedKey] = useState<string>("");
  const location = useLocation();
  useEffect(() => {
    setSelectedKey(location.pathname.split("/")[1]);
  }, [location]);

  return (
    <div className="bottom_navBar">
      <div className="container">
        <nav>
          <Menu
            mode="horizontal"
            selectedKeys={[selectedKey]}
            items={[
              {
                label: <Link to="/">Home</Link>,
                key: "",
              },
              {
                label: <Link to="/Shop">Shop</Link>,
                key: "Shop",
              },
              {
                label: <Link to="/Men">Men</Link>,
                key: "Men",
              },
              {
                label: <Link to="/Women">Women</Link>,
                key: "Women",
              },
              {
                label: <Link to="/Kids">Kids</Link>,
                key: "Kids",
              },
            ]}
          />
        </nav>
      </div>
    </div>
  );
}
