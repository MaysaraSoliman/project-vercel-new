import "./newArrivals.css";
import Slider from "react-slick";
import { Typography } from "antd";
import { Get_TrendyProductsFilteredByNewArrivals } from "../../queries/trendyQueries";
import { useQuery } from "@apollo/client";
import Product from "../../types/types";
import ProductCard from "../ProductCard/ProductCard";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
const { Title } = Typography;

export default function NewArrivals() {
  const [loadingSpin, setLoadingSpin] = useState(true);
  const { loading, error, data } = useQuery(
    Get_TrendyProductsFilteredByNewArrivals,
    {
      variables: {
        newArrivals: true,
      },
    }
  );

  useEffect(() => {
    let timer: number;
    if (!loading) {
      timer = setTimeout(() => {
        setLoadingSpin(false);
      }, 500);
    }

    return () => clearTimeout(timer);
  }, [loading]);

  if (loadingSpin) {
    return <Loading />;
  }
  if (error) return <p>Error</p>;

  const settings2 = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <section id="new_arrivals">
      <div className="container">
        <Title>New Arrivals</Title>
        <div className="new_arrivals_container">
          <Slider {...settings2}>
            {data.allTrendyProducts.map((item: Product) => (
              <div className="product_card_slider_container" key={item.id}>
                <ProductCard key={item.id} trendyProduct={item} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
