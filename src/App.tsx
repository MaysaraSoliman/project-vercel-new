import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient";
import Shop from "./pages/Shop";
import Men from "./pages/Men";
import Kids from "./pages/Kids";
import Women from "./pages/Women";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product from "./pages/Product";
import { ScrollToTop } from "./components/ScrolToTop/ScrolToTop";
import { ShoppingCartProvider } from "./providers/cartProviders/ShoppingCartProvider";
import { CartDrawerProvider } from "./context/cartContext/cartDrawerContext";
import { AnimationProvider } from "./context/AnimationContext/animationContext";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/Shop",
          element: <Shop />,
        },
        {
          path: "/Men",
          element: <Men />,
        },
        {
          path: "/Women",
          element: <Women />,
        },
        {
          path: "/Kids",
          element: <Kids />,
        },
        {
          path: "/Shop/:productId",
          element: (
            <ScrollToTop>
              {" "}
              <Product />{" "}
            </ScrollToTop>
          ),
        },
      ],
    },
  ]);

  return (
    <>
      <ApolloProvider client={client}>
        <AnimationProvider>
          <ShoppingCartProvider>
            <CartDrawerProvider>
              <RouterProvider router={router} />
            </CartDrawerProvider>
          </ShoppingCartProvider>
        </AnimationProvider>
      </ApolloProvider>
    </>
  );
}

export default App;
