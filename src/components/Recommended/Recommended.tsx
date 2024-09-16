import { useQuery } from "@apollo/client";
import "./recommended.css";
import { Get_TrendyProductsExcept_FilteredID } from "../../queries/trendyQueries";
import { Col, Row } from "antd";
import ProductCard from "../ProductCard/ProductCard";
import Product from "../../types/types";
import { Typography } from "antd";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";

const { Title } = Typography;

export default function Recommended({
  id_neq,
  page,
  perPage,
  title
}: {
  id_neq: string;
  page: number;
  perPage: number;
  title: string
}) {
  const [loadingSpin, setLoadingSpin] = useState(true);

  const { loading, error, data } = useQuery(
    Get_TrendyProductsExcept_FilteredID,
    {
      variables: { id_neq, page, perPage },
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
    <section id="recommended" >
      <div className="container">
        {loadingSpin ? (
          <Loading />
        ) : (
          <div className="recommended_container">
            <div className="title">
              <Title level={2}>{title}</Title>
            </div>
            <Row gutter={16} className="products_container">
              {data?.allTrendyProducts?.map((trendyProduct: Product) => (
                <Col
                  xs={24}
                  sm={8}
                  md={6}
                  lg={6}
                  xl={6}
                  className="productCard_container"
                  key={trendyProduct.id}
                >
                  <ProductCard
                    key={trendyProduct.id}
                    trendyProduct={trendyProduct}
                  />
                </Col>
              ))}
            </Row>
          </div>
        )}
      </div>
    </section>
  );
}
