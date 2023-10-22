import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components/pages/login/Login";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import { CartWidget } from "./components/common/cartWidget/CartWidget";
import { ItemDetailContainer } from "./components/pages/itemDetailContainer/ItemDetailContainer";
import { ErrorPage } from "./components/common/error/ErrorPage";
import { Navbar } from "./components/layout/navbar/Navbar";
import { CartContainer } from "./components/pages/cart/CartContainer";
import { ThemeProvider } from "@mui/material";
import { customTheme } from "./themeConfig";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={customTheme}>
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryName" element={<ItemListContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
