import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import EditProduct from "../../components/admin/EditProduct";
import Layout from "../../components/layout/Layout";
import ProductComponents from "../../components/products/ProductComponents";
import { useActions } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { ViewProductState } from "../../models/product";
import { AuthState } from "../../models/user";
import { wrapper } from "../../redux";
import { getSingleProduct } from "../../redux/actions-creater";
import styles from "../../styles/Product.module.scss";

const ProductView = (): JSX.Element => {
  const { user }: AuthState = useTypedSelector((state) => state.user);
  const { product, error }: ViewProductState = useTypedSelector(
    (state) => state.viewProduct
  );

  useEffect(() => {
    if (error) {
      toast.error(error[0]?.message);
    }
  }, [error]);

  return (
    <Layout title={product?.title ? product.title : "Something went wrong"}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div>{product && <ProductComponents product={product} />}</div>

        <div style={{ width: "70%", marginRight: "3%" }}>
          <div className={styles.addProductBox}>
            {user?.email === "admin@gmail.com" && (
              <EditProduct product={product} />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductView;

ProductView.getInitialProps = wrapper.getInitialPageProps(
  (store) => async (context: any) => {
    await store.dispatch(getSingleProduct(context, context.query.id));
    return {};
  }
);
