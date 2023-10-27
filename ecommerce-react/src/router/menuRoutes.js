import { CartContainer } from "../components/pages/cart/CartContainer";
import { Contacto } from "../components/pages/contacto/Contacto";
import { ItemDetailContainer } from "../components/pages/itemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "../components/pages/itemListContainer/ItemListContainer";

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
        id: "contacto",
        path: "/category/contacto",
        Element: Contacto ,

    },
]