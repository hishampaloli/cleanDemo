import React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { CartData } from "../../models/cart";
import ProductComponents from "../products/ProductComponents";

const CartComponent = () => {
  const { cart } = useTypedSelector((state) => state.cart);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {cart.length > 0
        ? cart.map((el: CartData) => {
            return (
              <div>
                <ProductComponents
                  product={el.product}
                  count={el.count}
                  inCart={true}
                />
              </div>
            );
          })
        : "Nothing in cart"}
    </div>
  );
};

export default CartComponent;
