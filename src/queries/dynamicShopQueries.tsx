import { gql } from "@apollo/client";

const GET_AllProducts_GENDER = gql`
  query getAllProducts_Sorted(
    $gender: String!
    $page: Int!
    $perPage: Int!
    $sortField: String!
    $sortOrder: String!
  ) {
    allTrendyProducts(
      filter: { gender: $gender }
      page: $page
      perPage: $perPage
      sortField: $sortField
      sortOrder: $sortOrder
    ) {
      id
      productTitle
      productImage
      productNewPrice
      category
      reviews
      thumbinals
      newArrivals
    }
    _allTrendyProductsMeta(filter: { gender: $gender }) {
      count
    }
  }
`;

const Get_ALLPRODUCTS_GENDER_FilterBySearch = gql`
  query get_ALLPRODUCTS_QUERY_FilterBySearch(
    $q: String!
    $sortField: String
    $sortOrder: String
    $page: Int!
    $perPage: Int!
    $gender: String
  ) {
    allTrendyProducts(
      filter: { q: $q, gender: $gender }
      sortField: $sortField
      sortOrder: $sortOrder
      page: $page
      perPage: $perPage
    ) {
      id
      productImage
      productTitle
      productNewPrice
      category
      reviews
      thumbinals
      newArrivals
    }
    _allTrendyProductsMeta(filter: { q: $q, gender: $gender }) {
      count
    }
  }
`;

const GET_AllProducts_GENDER_CategoryFiltered_Sorted = gql`
  query getAllProducts_CategoryFiltered_Sorted(
    $gender: String!
    $category: String!
    $page: Int!
    $perPage: Int!
    $sortField: String!
    $sortOrder: String!
  ) {
    allTrendyProducts(
      filter: { gender: $gender, category: $category }
      page: $page
      perPage: $perPage
      sortField: $sortField
      sortOrder: $sortOrder
    ) {
      id
      productTitle
      productImage
      productNewPrice
      category
      reviews
      thumbinals
      newArrivals
    }
    _allTrendyProductsMeta(filter: { gender: $gender, category: $category }) {
      count
    }
  }
`;

export {
  GET_AllProducts_GENDER,
  Get_ALLPRODUCTS_GENDER_FilterBySearch,
  GET_AllProducts_GENDER_CategoryFiltered_Sorted,
};
