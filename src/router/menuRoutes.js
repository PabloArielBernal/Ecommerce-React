import { EnConstruccion } from "../components/common/error/EnConstruccion";
import { CartContainer } from "../components/pages/cart/CartContainer";
import { CheckoutOficial } from "../components/pages/checkoutOficial/CheckoutOficial";
import { CheckoutFormik } from "../components/pages/checkoutFormik/CheckoutFormik"
import { Contacto } from "../components/pages/contacto/Contacto";
import { ItemDetailContainer } from "../components/pages/itemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "../components/pages/itemListContainer/ItemListContainer";
import { CategoryPS2 } from "../components/pages/categoryPS2/CategoryPS2";

export const routes = [
    {
        id: "home",
        path: "/",
        Element: ItemListContainer ,
    },
    {
        id: "category",
        path: "/category/:categoryName",
        Element: ItemListContainer ,
    },
    {
        id: "category",
        path: "/category/juegos-ps2",
        Element: CategoryPS2 ,
    },
    {
        id: "category",
        path: "/category/juegos-ps2/:categoryName",
        Element: ItemListContainer ,
    },
    {
        id: "category",
        path: "/category/juegos-ps3",
        Element: EnConstruccion ,

    },
    {
        id: "cart",
        path: "/cart",
        Element: CartContainer ,
    },
    {
        id: "itemDetail",
        path: "/itemDetail/:id",
        Element: ItemDetailContainer ,
    },
    {
        id: "itemDetail",
        path: "/category/consolas/itemDetail/:id",
        Element: ItemDetailContainer , 
    },
    {
        id: "itemDetail",
        path: "/category/accesorios/itemDetail/:id",
        Element: ItemDetailContainer , 
    },
    {
        id: "itemDetail",
        path: "/category/juegos-ps2/:categotyName/itemDetail/:id",
        Element: ItemDetailContainer , 
    },
    {
        id: "contacto",
        path: "/contacto",
        Element: Contacto ,
    },
    {
        id: "checkout",
        path: "/checkout",
        Element: CheckoutFormik ,
    },
]