import { Inter } from "@next/font/google";
import Layout from "../components/layout/Layout";
import { wrapper } from "../redux";
import { useEffect } from "react";
import Router from "next/router";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { AuthState } from "../models/user";
import { ProductState } from "../models/product";
import ProductComponents from "../components/products/ProductComponents";
import { getProducts } from "../redux/actions-creater";
import { isNormalUser, useCheckAuth } from "../hooks/useCheckAuth";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { user, error }: AuthState = useTypedSelector((state) => state.user);
  const { products }: ProductState = useTypedSelector(
    (state) => state.allProducts
  );


  isNormalUser();

  return (
    <>
      <Layout title={"Shopit"}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {products?.map((el: any) => {
            return <ProductComponents product={el} key={el.id} />;
          })}
        </div>
      </Layout>
    </>
  );
}

Home.getInitialProps = wrapper.getInitialPageProps(
  (store) => async (context) => {
    await store.dispatch(getProducts(context));
    return {};
  }
);
