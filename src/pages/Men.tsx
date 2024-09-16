import React, { Suspense } from "react";
// import DynamicShop from "../components/DynamicShop/DynamicShop";

const DynamicShopComponent = React.lazy(
  () => import("../components/DynamicShop/DynamicShop")
);

export default function Men() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicShopComponent Gender={"Male"} />
      </Suspense>
      {/* <DynamicShop Gender={"Male"}/> */}
    </div>
  );
}
