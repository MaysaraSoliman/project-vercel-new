import { gql } from "@apollo/client";


// const GET_AllProducts_Sorted = gql`
//   query getAllProducts_Sorted( $page: Int!, $perPage: Int!, $sortField: String!, $sortOrder: String!) {
//     allTrendyProducts( page: $page, perPage: $perPage, sortField: $sortField, sortOrder: $sortOrder) {
//       id
//       productTitle
//       productImage
//       productNewPrice
//       category
//       reviews
//       thumbinals
//       newArrivals
//     }
    
//   }
// `;

const GET_AllProducts_Sorted = gql`
  query getAllProducts_Sorted( $page: Int!, $perPage: Int!, $sortField: String!, $sortOrder: String!) {
    allTrendyProducts( page: $page, perPage: $perPage, sortField: $sortField, sortOrder: $sortOrder) {
      id
      productTitle
      productImage
      productNewPrice
      category
      reviews
      thumbinals
      newArrivals
    }
    _allTrendyProductsMeta{
      count
    }
  }
`;

// const GET_AllProducts_CategoryFiltered_Sorted = gql`
//   query getAllProducts_CategoryFiltered_Sorted($category: String!, $page: Int!, $perPage: Int!, $sortField: String!, $sortOrder: String!) {
//     allTrendyProducts(filter: { category: $category }, page: $page, perPage: $perPage, sortField: $sortField, sortOrder: $sortOrder) {
//       id
//       productTitle
//       productImage
//       productNewPrice
//       category
//       reviews
//       thumbinals
//       newArrivals
//     }
//   }
// `;

const GET_AllProducts_CategoryFiltered_Sorted = gql`
  query getAllProducts_CategoryFiltered_Sorted($category: String!, $page: Int!, $perPage: Int!, $sortField: String!, $sortOrder: String!) {
    allTrendyProducts(filter: { category: $category }, page: $page, perPage: $perPage, sortField: $sortField, sortOrder: $sortOrder) {
      id
      productTitle
      productImage
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


// const Get_ALLPRODUCTS_QUERY_FilterBySearch = gql`
//   query get_ALLPRODUCTS_QUERY_FilterBySearch(
//     $q: String!,
//     $sortField: String,
//     $sortOrder: String,
//     $page: Int!,
//     $perPage: Int!
//   ) {
//     allTrendyProducts(
//       filter: { q: $q },
//       sortField: $sortField,
//       sortOrder: $sortOrder,
//       page: $page,
//       perPage: $perPage
//     ) {
//       id
//       productImage
//       productTitle
//       productNewPrice
//       category
//       reviews
//       thumbinals
//       newArrivals
//     }
//   }
// `;

const Get_ALLPRODUCTS_QUERY_FilterBySearch = gql`
  query get_ALLPRODUCTS_QUERY_FilterBySearch(
    $q: String!,
    $sortField: String,
    $sortOrder: String,
    $page: Int!,
    $perPage: Int!
  ) {
    allTrendyProducts(
      filter: { q: $q },
      sortField: $sortField,
      sortOrder: $sortOrder,
      page: $page,
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
    _allTrendyProductsMeta(filter:{q : $q}) {
      count
    }
  }
`;



export{
    GET_AllProducts_CategoryFiltered_Sorted,
    GET_AllProducts_Sorted,
    Get_ALLPRODUCTS_QUERY_FilterBySearch,
}