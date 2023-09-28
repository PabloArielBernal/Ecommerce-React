
import { Navbar } from "./components/layout/navbar/Navbar";
import {Home} from "./components/pages/home/Home"
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import { Login } from "./components/pages/login/Login";

function App() {

  let nombre = "gamer"

  return (
    <div>
      <Navbar />
      <Home />
      <Login />
      <ItemListContainer nombre={nombre} edad={18} />
    </div>
  );
}

export default App