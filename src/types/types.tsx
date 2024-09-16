export default interface Product {
    id: number;
    productTitle: string;
    productImage: string;
    productNewPrice: number;
    category?: string;
    reviews?: number;
    newArrivals?: boolean;
    thumbinals?: string[];
}

export interface CartItem {
    id: number;
    productTitle: string;
    productImage: string;
    productNewPrice: number;
    category?: string;
    reviews?: number;
    newArrivals?: boolean;
    thumbinals?: string[];
    quantity: number;
  }

export interface FetchedData {
    _allTrendyProductsMeta: {
       count: number;
    };
    allTrendyProducts: Product[];
   }
