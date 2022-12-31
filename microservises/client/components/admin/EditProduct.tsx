import { useRouter } from "next/dist/client/router";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useActions } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { ProductData, ViewProductState } from "../../models/product";
import styles from "../../styles/Product.module.scss";
import { AuthState } from "../../models/user";

const EditProduct = ({ product }: { product: ProductData | null }) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number>();
  const [stock, setStock] = useState<number>();
  const [image, setImage] = useState<string>();

  const { UpdateProduct } = useActions();

  const handleUpdate = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (product?.id) {
      const data = await UpdateProduct(
        "",
        { description, image, price, stock, title },
        product?.id
      );

      if (`${data}` === "Product updated") {
        toast.success(`${data}`);
      } else {
        toast.error(`${data}`);
      }
    } else {
      toast.error(`The product have been deleted`);
    }
  };
  return (
    <form onSubmit={handleUpdate}>
      <h1>Edit Products</h1>
      <div>
        <label htmlFor="">Title</label>
        <input
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
          placeholder={product?.title}
          name=""
          id=""
        />
      </div>

      <div>
        <label htmlFor="">Description</label>
        <input
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDescription(e.target.value)
          }
          placeholder={product?.description}
          name=""
          id=""
        />
      </div>

      <div>
        <label htmlFor="">Price</label>
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPrice(Number(e.target.value))
          }
          type="number"
          placeholder={product?.price?.toString()}
          id=""
        />
      </div>

      <div>
        <label htmlFor="">Stock</label>
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setStock(Number(e.target.value))
          }
          type="number"
          placeholder={product?.stock?.toString()}
          id=""
        />
      </div>

      <div>
        <label htmlFor="">Image URL</label>
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setImage(e.target.value)
          }
          type="text"
          placeholder={product?.image}
          id=""
        />
      </div>
      <button type="submit">Edit Product</button>
    </form>
  );
};

export default EditProduct;
