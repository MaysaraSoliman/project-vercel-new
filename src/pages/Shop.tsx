import React, { Suspense } from "react";
// import FollowUsOnInstagram from "../components/FollowUsOnInstagram/FollowUsOnInstagram";
// import ShopPorducts from "../components/Shop/ShopPorducts";

const FollowUsOnInstagramComponent = React.lazy(
  () => import("../components/FollowUsOnInstagram/FollowUsOnInstagram")
);
const ShopPorductsComponent = React.lazy(
  () => import("../components/Shop/ShopPorducts")
);

export default function Shop() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <FollowUsOnInstagramComponent />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <ShopPorductsComponent />
      </Suspense>
      {/* <FollowUsOnInstagram/> */}
      {/* <ShopPorducts/> */}
    </div>
  );
}
