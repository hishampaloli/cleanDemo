import Router from "next/router";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import AddProduct from "../../components/admin/AddProduct";
import Layout from "../../components/layout/Layout";
import ProductComponents from "../../components/products/ProductComponents";
import { useActions } from "../../hooks/useAction";
import { isAdminUser } from "../../hooks/useCheckAuth";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { ProductData, ProductState } from "../../models/product";
import { AuthState, UserAuthData } from "../../models/user";
import { getProducts } from "../../redux/actions-creater/productsActions";

const products: React.FC = (): JSX.Element => {
  const { products, loading }: ProductState = useTypedSelector(
    (state) => state.allProducts
  );
  const { user }: AuthState = useTypedSelector((state) => state.user);

  const { getProducts } = useActions();

  isAdminUser()
  useEffect(() => {    
    getProducts("sdf");
  }, []);

  return (
    <Layout title="Manage Product">
      <div style={{ display: "flex", width: "100%" }}>
        <div style={{ display: "flex", flexWrap: "wrap", width: "60%" }}>
          {products.map((el: ProductData) => {
            return <ProductComponents key={el.id} product={el} />;
          })}
        </div>
        <div style={{ width: "40%", marginLeft: "-3%" }}>
          <AddProduct />
        </div>
      </div>
    </Layout>
  );
};

export default products;
