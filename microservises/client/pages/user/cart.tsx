import React from "react";
import Layout from "../../components/layout/Layout";
import CartComponent from "../../components/user/CartComponent";
import { wrapper } from "../../redux";
import { getCartItems } from "../../redux/actions-creater";

const Cart = () => {
  return (
    <Layout title="Cart">
      <CartComponent />
    </Layout>
  );
};

export default Cart;

Cart.getInitialProps = wrapper.getInitialPageProps(
  (store) => async (context) => {
    await store.dispatch(getCartItems(context));
    return {};
  }
);
