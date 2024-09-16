import { Col, Pagination, Row, Segmented, Select } from "antd";
import { useEffect, useState } from "react";
import "./ShopPorducts.css"
import {
  GET_AllProducts_CategoryFiltered_Sorted,
  GET_AllProducts_Sorted,
  Get_ALLPRODUCTS_QUERY_FilterBySearch,
} from "../../queries/shopQueries";
import { useQuery } from "@apollo/client";
import Loading from "../Loading/Loading";
import ProductCard from "../ProductCard/ProductCard";
import Product from "../../types/types";
import { useMediaQuery } from "react-responsive";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export default function ShopProducts() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedSortField, setSelectedSortField] = useState<string>("");
  const [selectedSortOrder, setSelectedSortOrder] = useState<string>("ASC");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [perPage] = useState<number>(12);
  const [loadingSpin, setLoadingSpin] = useState(true);
  const [selectedColNums, setSelectedColNums] = useState<string>("6");
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });
  const [searchValue, setSearchValue] = useState("");
  const [disableSelectMenu , setDisableSelectMenu] = useState<boolean>(false);
  const[stateToUseInQuery , setStateToUseInQuery] = useState(GET_AllProducts_Sorted);

  const handleSelectMenu = (value: string) => {
    if (
      value == "Name,A-Z" ||
      value == "Name,Z-A" ||
      value == "Price,low-high" ||
      value == "Price,high-low"
    ) {
      setSelectedCategory("All");
      if (value == "Name,Z-A" || value == "Price,high-low") {
        setSelectedSortOrder("DES");
      } else {
        setSelectedSortOrder("ASC");
      }
      if (value == "Name,Z-A" || value == "Name,A-Z") {
        setSelectedSortField("productTitle");
      } else {
        setSelectedSortField("productNewPrice");
      }
    } else {
      setSelectedCategory(value);
      setSelectedSortField("");
      setSelectedSortOrder("ASC");
    }
    // To Render the Page from beginning when change the category field
    setCurrentPage(1);
  };

  // useEffect Used For Define The Query to Fetching Shop Products
  useEffect(()=>{
    if (searchValue !== "") {
    setStateToUseInQuery(Get_ALLPRODUCTS_QUERY_FilterBySearch);
    setDisableSelectMenu(true);
  } else if (selectedCategory === "All") {
    setStateToUseInQuery(GET_AllProducts_Sorted);
    setDisableSelectMenu(false)
  } else {
    setStateToUseInQuery(GET_AllProducts_CategoryFiltered_Sorted);
    setDisableSelectMenu(false)
  }
  // To Render the Page from beginning
  setCurrentPage(1);
  },[searchValue , selectedCategory])

  const { loading, error, data } = useQuery(stateToUseInQuery, {
    variables: {
      q: searchValue,
      category: selectedCategory,
      page: currentPage - 1,
      perPage: perPage,
      sortField: selectedSortField,
      sortOrder: selectedSortOrder,
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
  
  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const handleSegmentedChange = (value: string) => {
    setSelectedColNums(value);
  };

  // Change Pagination Number
  const handlePaginationChange = (page: number) => {
    setCurrentPage(page);
  };


  return (
    <section id="shop">
      <div className="container">
        <div className="shop_container">
          <div className="select_menu">
            <div className="search_input">
              <Input
                addonBefore={<SearchOutlined />}
                allowClear
                placeholder="search"
                value={searchValue}
                onChange={(e) => handleSearchChange(e.target.value)}
              />
            </div>

            {isDesktop && (
              <Segmented
                options={[
                  {
                    label: <div className="cat_view"></div>,
                    value: "12",
                  },
                  {
                    label: <div className="cat_view"></div>,
                    value: "8",
                  },
                  {
                    label: <div className="cat_view"></div>,
                    value: "6",
                  },
                  {
                    label: <div className="cat_view"></div>,
                    value: "4",
                  },
                ]}
                value={selectedColNums}
                onChange={handleSegmentedChange}
              />
            )}

            <Select
              defaultValue="All"
              disabled = {disableSelectMenu}
              style={{ width: 160 }}
              onChange={handleSelectMenu}
              options={[
                { value: "All", label: "ALL" },
                { value: "Featured", label: "FEATURED" },
                { value: "Best Selling", label: "BEST SELLING" },
                { value: "Top Rated", label: "TOP RATED" },
                { value: "Name,A-Z", label: "Alphabetically, A-Z" },
                { value: "Name,Z-A", label: "Alphabetically, Z-A" },
                { value: "Price,low-high", label: "Price, low to high" },
                { value: "Price,high-low", label: "Price, high to low" },
              ]}
            />
          </div>
          {loadingSpin ? (
            <Loading />
          ) : (
            <Row gutter={16} className="products_container" key={currentPage}>
              {data?.allTrendyProducts.map((trendyProduct: Product) => (
                <Col
                  xs={Number(selectedColNums)}
                  sm={Number(selectedColNums)}
                  md={Number(selectedColNums)}
                  lg={Number(selectedColNums)}
                  xl={Number(selectedColNums)}
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
          )}
          <div className="pagination">
            <Pagination
              hideOnSinglePage
              current={currentPage}
              total={data?._allTrendyProductsMeta?.count}
              pageSize={perPage}
              onChange={handlePaginationChange}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

