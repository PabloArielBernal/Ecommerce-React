import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Spinner from "../../common/spinner/Spinner";
import { Footer } from "../../layout/footer/Footer";
import { getDocs, collection, query, where, addDoc } from "firebase/firestore";
import { database } from "../../../firebaseConfig";
import { Button } from "@mui/material";
import { products } from "../../../productsMock";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let productCollection = collection(database, "products");

    let consulta = undefined;

    if (!categoryName) {
      consulta = productCollection;
    } else {
      consulta = query(
        productCollection,
        where("category", "==", categoryName)
      );
    }

    getDocs(consulta).then((res) => {
      let newArray = res.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });
      
      setItems(newArray);
    });
  }, [categoryName]);

  return (
    <>
      {items.length === 0 ? <Spinner /> : <ItemList items={items} />}
      {items.length !== 0 && <Footer />}
    </>
  );
};
