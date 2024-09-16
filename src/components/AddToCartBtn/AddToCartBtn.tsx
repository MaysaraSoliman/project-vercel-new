import { Button } from "antd";
import { useShoppingCart } from "../../context/cartContext/shoppingCartContext";
import Product from "../../types/types";
import { useCartDrawer } from "../../context/cartContext/cartDrawerContext";
import { useAnimationContext } from "../../context/AnimationContext/animationContext";

export default function AddToCartBtn({
  product,
  currentCartInputValue,
}: {
  product: Product;
  currentCartInputValue: number;
}) {
  const { cart, addItemToCart, updateCartItemQuantity } = useShoppingCart(); // useShoppingCartContext
  const { setIsCartOpen } = useCartDrawer(); // useCartDrawerContext
  const { setAnimation } = useAnimationContext();

  const addToCart = (product: Product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    const existingItemIndex = cart.findIndex((item) => item.id === product.id);
    if (existingItem) {
      const newQuantity =
        cart[existingItemIndex].quantity + currentCartInputValue;
      updateCartItemQuantity(product.id, newQuantity);
      setIsCartOpen(true);
    } else {
      addItemToCart(product, currentCartInputValue);
      setIsCartOpen(true);
    }
    setAnimation(true);
  };

  return (
    <div>
      <Button onClick={() => addToCart(product)}>ADD TO CART</Button>
    </div>
  );
}
