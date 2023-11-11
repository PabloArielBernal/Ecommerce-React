import "./Navbar.css";
import { CartWidget } from "../../common/cartWidget/CartWidget";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { database } from "../../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export const Navbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categoriesCollection = collection(database, "categories");

    getDocs(categoriesCollection)
      .then((res) => {
        let arrayCategories = res.docs.map((category) => {
          return { ...category.data(), id: category.id };
        });
        setCategories(arrayCategories);
      })
  }, []);

  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/drmbbxdtf/image/upload/v1696190816/Ecommerce%20Tienda%20de%20Videojuegos/logo3.png"
            alt="logo"
            width="150"
          />
        </Link>
        <ul className="categories">
          <Link to={"/"}>
            <li>
              <Button variant="contained">todos</Button>
            </li>
          </Link>
          {categories.map((category) => (
            <Link key={category.id} to={category.path}>
              <li>
                <Button variant="contained">{category.name}</Button>
              </li>
            </Link>
          ))}

          <CartWidget />
        </ul>
      </nav>
    </>
  );
};
