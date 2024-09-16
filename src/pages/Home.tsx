import React, { Suspense } from "react";
// import FollowUsOnInstagram from "../components/FollowUsOnInstagram/FollowUsOnInstagram";
// import FreshOutfits from "../components/FreshOutfits/FreshOutfits";
// import Hero from "../components/Hero/Hero";
// import NewArrivals from "../components/NewArrivals/NewArrivals";
// import Pakery from "../components/Pakery/Pakery";
// import ProductsCategories from "../components/ProductsCategories/ProductsCategories";
// import SaleBanner from "../components/SaleBanner/SaleBanner";
// import Shipping from "../components/Shipping/Shipping";
// import TrendyItems from "../components/TrendyItems/TrendyItems";

const HeroComponent = React.lazy(() => import("../components/Hero/Hero"));
const PakeryComponent = React.lazy(() => import("../components/Pakery/Pakery"));
const ShippingComponent = React.lazy(
  () => import("../components/Shipping/Shipping")
);
const NewArrivalsComponent = React.lazy(
  () => import("../components/NewArrivals/NewArrivals")
);
const SaleBannerComponent = React.lazy(
  () => import("../components/SaleBanner/SaleBanner")
);
const TrendyItemsComponent = React.lazy(
  () => import("../components/TrendyItems/TrendyItems")
);
const FreshOutfitsComponent = React.lazy(
  () => import("../components/FreshOutfits/FreshOutfits")
);
const ProductsCategoriesComponent = React.lazy(
  () => import("../components/ProductsCategories/ProductsCategories")
);
const FollowUsOnInstagramComponent = React.lazy(
  () => import("../components/FollowUsOnInstagram/FollowUsOnInstagram")
);

export default function Home() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <HeroComponent />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <PakeryComponent />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <ShippingComponent />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <NewArrivalsComponent />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <SaleBannerComponent />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <TrendyItemsComponent />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <FreshOutfitsComponent />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductsCategoriesComponent />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <FollowUsOnInstagramComponent />
      </Suspense>
      {/* <Hero/> */}
      {/* <Pakery /> */}
      {/* <Shipping /> */}
      {/* <NewArrivals /> */}
      {/* <SaleBanner /> */}
      {/* <TrendyItems /> */}
      {/* <FreshOutfits /> */}
      {/* <ProductsCategories /> */}
      {/* <FollowUsOnInstagram /> */}
    </div>
  );
}
