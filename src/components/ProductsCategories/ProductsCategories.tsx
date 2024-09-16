import { Flex } from "antd";
import ProductsCategoryList from "../ProductsCategoryList/ProductsCategoryList";
import "./productsCategories.css"
export default function ProductsCategories() {
  return (
    <section id="products_categories">
        <div className="container">
            <Flex className="categories" align="center" justify="center" wrap="wrap" >
                <ProductsCategoryList title={"Top Rated"}/>
                <ProductsCategoryList title={"Best Selling"}/>
                <ProductsCategoryList title={"On Sale"}/>
            </Flex>
        </div>
    </section> 
  );
}