import { useQuery } from "@apollo/client";
import { Get_TrendyProductsPerpageAndCategory } from "../../queries/trendyQueries";
import "./productsCategoryList.css";
import { Drawer, Typography } from "antd";
import Product from "../../types/types";
import { useEffect, useState } from "react";
import DrawerProductView from "../DrawerProductView/DrawerProductView";
import Loading from "../Loading/Loading";
const { Title } = Typography;
export default function ProductsCategoryList({ title }: { title: string }) {
  const [productDrawerId, SetProductDrawerId] = useState<number>(101);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [loadingSpin, setLoadingSpin] = useState<boolean>(true);

  const isDrawerOpen = () => {
    setOpenDrawer(!openDrawer);
  };

  const filterDrawerId = (item: Product) => {
    isDrawerOpen();
    SetProductDrawerId(item.id);
  };

  const { loading, error, data } = useQuery(
    Get_TrendyProductsPerpageAndCategory,
    {
      variables: {
        category: title,
        page: 0,
        perPage: 3,
      },
    }
  );

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
  if (error) return <p>Error</p>;

  return (
    <div className="product_list">
      <div className="title">
        <Title level={3}>{title}</Title>
      </div>
      {loadingSpin ? (
        <Loading />
      ) : (
        <div className="list">
          {data.allTrendyProducts.map((item: Product) => (
            <div className="product_box" key={item.id}>
              <div
                className="image"
                key={item.id}
                onClick={() => filterDrawerId(item)}
              >
                <img src={item.productImage} alt="" />
              </div>
              <div className="info">
                <Title level={4}>{item.productTitle}</Title>
                <Title level={5}>${item.productNewPrice}.00</Title>
              </div>
            </div>
          ))}
        </div>
      )}
      <Drawer onClose={isDrawerOpen} open={openDrawer} width={470}>
        <DrawerProductView productID={productDrawerId} />
      </Drawer>
    </div>
  );
}
