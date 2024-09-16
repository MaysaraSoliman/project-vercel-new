import React, { Suspense, useEffect, useState } from "react";
// import ProductPreview from "../components/ProductPreview/ProductPreview";
import { useParams } from "react-router-dom";
// import Recommended from "../components/Recommended/Recommended";
// import YouMayAlsoLike from "../components/Recommended/YouMayAlsoLike";

const ProductPreviewComponent = React.lazy(
  () => import("../components/ProductPreview/ProductPreview")
);
const RecommendedComponent = React.lazy(
  () => import("../components/Recommended/Recommended")
);

export default function Product() {
  const { productId } = useParams(); // used For Get Data ID From URL
  const [useParamId, setUseParamId] = useState<string>("");
  const [randomNumber, setRandomNumber] = useState(0);

  const randomNumberInRange = Math.floor(Math.random() * 5) + 1;

  useEffect(() => {
    if (productId) {
      setUseParamId(productId);
      setRandomNumber(randomNumberInRange);
    }
  }, [randomNumberInRange, productId]);

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductPreviewComponent />
      </Suspense>
      {/* <ProductPreview /> */}
      <Suspense fallback={<div>Loading...</div>}>
        <RecommendedComponent
          id_neq={useParamId}
          page={randomNumber}
          perPage={4}
          title={"You may also like"}
        />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <RecommendedComponent
          id_neq={useParamId}
          page={randomNumber + 1}
          perPage={4}
          title={"Recommended products"}
        />
      </Suspense>
      {/* <Recommended
        id_neq={useParamId}
        page={randomNumber}
        perPage={4}
        title={"You may also like"}
      /> */}
      {/* <Recommended
        id_neq={useParamId}
        page={randomNumber + 1}
        perPage={4}
        title={"Recommended products"}
      /> */}
    </div>
  );
}
