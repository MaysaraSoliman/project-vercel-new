import { gql } from "@apollo/client";

const Get_TrendyProducts = gql`
  query get_TrendyProducts {
    allTrendyProducts {
      id
      productTitle
      productImage
      productNewPrice
      category
      reviews
      thumbinals
    }
  }
`;

const Get_TrendyProductsFilteredByCategory = gql`
  query get_TrendyProductsFilteredByCategory($category: String!) {
    allTrendyProducts(filter: { category: $category }) {
      id
      productTitle
      productImage
      productNewPrice
      category
      reviews
      thumbinals
    }
  }
`;

const Get_TrendyProductsFilteredByID = gql`
  query get_TrendyProductsFilteredByID($id: ID!) {
    allTrendyProducts(filter: { id: $id }) {
      id
      productTitle
      productImage
      productNewPrice
      category
      reviews
      thumbinals
    }
  }
`;

const Get_TrendyProductsExcept_FilteredID = gql`
  query get_TrendyProductsExcept_FilteredID($id_neq: ID! , $page: Int, $perPage: Int) {
    allTrendyProducts(filter: { id_neq: $id_neq } , page: $page, perPage: $perPage) {
      id
      productTitle
      productImage
      productNewPrice
      category
      reviews
      thumbinals
    }
  }
`;

const Get_TrendyProductsFilteredByNewArrivals = gql`
  query get_TrendyProductsFilteredByNewArrivals($newArrivals:  Boolean) {
    allTrendyProducts(filter: { newArrivals: $newArrivals }) {
      id
      productTitle
      productImage
      productNewPrice
      category
      reviews
      thumbinals
      newArrivals
    }
  }
`;

const Get_TrendyProductsPerpage = gql`
  query GetTrendyProducts($page: Int, $perPage: Int) {
    allTrendyProducts(page: $page, perPage: $perPage) {
      id
      productTitle
      productImage
      productNewPrice
      category
      reviews
      thumbinals
    }
  }
`;

const Get_TrendyProductsPerpageAndCategory = gql`
  query GetTrendyProducts($category: String!, $page: Int, $perPage: Int) {
    allTrendyProducts(
      filter: { category: $category }
      page: $page
      perPage: $perPage
    ) {
      id
      productTitle
      productImage
      productNewPrice
      category
      reviews
      thumbinals
    }
  }
`;

const Get_ALL_TRENDY_PRODUCTS_META_QUERY_CATEGORY_COUNT = gql`
  query get_ALL_TRENDY_PRODUCTS_META_QUERYCount( $category: String!) {
    _allTrendyProductsMeta(filter: { category: $category }) {
      count
    }
  }
`;

const Get_ALL_TRENDY_PRODUCTS_META_QUERY_COUNT = gql`
  query get_ALL_TRENDY_PRODUCTS_META_QUERYCount ( $q: String) {
    _allTrendyProductsMeta(filter: { q: $q }){
      count
    }
  }
`;

export {
  Get_TrendyProductsFilteredByCategory,
  Get_TrendyProducts,
  Get_TrendyProductsPerpage,
  Get_TrendyProductsPerpageAndCategory,
  Get_ALL_TRENDY_PRODUCTS_META_QUERY_CATEGORY_COUNT,
  Get_ALL_TRENDY_PRODUCTS_META_QUERY_COUNT,
  Get_TrendyProductsFilteredByID,
  Get_TrendyProductsFilteredByNewArrivals,
  Get_TrendyProductsExcept_FilteredID 
};







export const ALL_TRENDY_QUERY = gql`
  query AllTrendy($page: Int, $perPage: Int, $category: String) {
    allTrendyProducts(page: $page, perPage: $perPage) {
      id
      productImage
      productTitle
      productNewPrice
      category
      reviews
      thumbinals
      newArrivals
    }
    _allTrendyProductsMeta(filter:{category : $category}) {
      count
    }
  }
`;
