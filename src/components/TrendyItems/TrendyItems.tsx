import { useEffect, useState } from "react";
import "./trendyItems.css";
import { Menu, MenuProps, Pagination, Typography } from "antd";
import ProductCard from "../ProductCard/ProductCard";
import { useQuery } from "@apollo/client";
import {
  Get_ALL_TRENDY_PRODUCTS_META_QUERY_CATEGORY_COUNT,
  Get_ALL_TRENDY_PRODUCTS_META_QUERY_COUNT,
  Get_TrendyProductsPerpage,
  Get_TrendyProductsPerpageAndCategory,
} from "../../queries/trendyQueries";
import product from "../../types/types";
import client from "../../apolloClient";
import Loading from "../Loading/Loading";

const { Title } = Typography;

export default function TrendyItems() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [currentKey, setCurrentKey] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [perPage] = useState<number>(8);
  const [fetchedDataLength, setFetchedDataLength] = useState<number>();
  const [loadingSpin, setLoadingSpin] = useState(true);

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    setCurrentKey(e.key);
    setSelectedCategory(e.key);
    setCurrentPage(1);
  };

  // Useeffect Fetching For Navigation Total Items Count
  useEffect(() => {
    let isMounted = true;
    async function fetchGraphQLData() {
      let query;
      let variables = {};
      if (selectedCategory === "All") {
        query = Get_ALL_TRENDY_PRODUCTS_META_QUERY_COUNT;
      } else {
        query = Get_ALL_TRENDY_PRODUCTS_META_QUERY_CATEGORY_COUNT;
        variables = {
          q: "",
          category: selectedCategory,
        };
      }
      try {
        const response = await client.query({
          query: query,
          variables: variables,
        });
        if (isMounted) {
          // Check if the component is still mounted
          setFetchedDataLength(response.data._allTrendyProductsMeta.count);
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    }
    fetchGraphQLData();
    return () => {
      isMounted = false; // Set the flag to false when the component unmounts
    };
  }, [selectedCategory]);

  // Main Graphql Fetching
  const queryToUse =
    selectedCategory === "All"
      ? Get_TrendyProductsPerpage
      : Get_TrendyProductsPerpageAndCategory;
  const { loading, error, data } = useQuery(queryToUse, {
    variables: {
      category: currentKey,
      page: currentPage - 1,
      perPage: perPage,
    },
  });


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

  // Change Pagination Number
  const handleChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section id="trendyItems">
      <div className="container">
        <Title>Trendy item</Title>
        <div className="tab_categories">
          <Menu
            mode="horizontal"
            selectedKeys={[currentKey]}
            onClick={handleMenuClick}
            items={[
              {
                label: "ALL",
                key: "All",
              },
              {
                label: "FEATURED",
                key: "Featured",
              },
              {
                label: "BEST SELLING",
                key: "Best Selling",
              },
              {
                label: "TOP RATED",
                key: "Top Rated",
              },
              {
                label: "TRENDS",
                key: "Trends",
              },
            ]}
          />
        </div>
        {loadingSpin ? (
          <Loading />
        ) : (
          <div className="trendy_container" key={currentPage}>
            {data?.allTrendyProducts.map((trendyProduct: product) => (
              <div className="productCard_container" key={trendyProduct.id}>
                <ProductCard
                  key={trendyProduct.id}
                  trendyProduct={trendyProduct}
                />
              </div>
            ))}
          </div>
        )}
        <div className="pagination">
          <Pagination
            hideOnSinglePage
            current={currentPage}
            total={fetchedDataLength}
            pageSize={perPage}
            onChange={handleChange}
          />
        </div>
      </div>
    </section>
  );
}
