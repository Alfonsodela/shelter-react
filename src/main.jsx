import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navigator from "./component/Navigator";
import PokemonPage from "./pages/PokemonPage";
import SearchPage from "./pages/SearchPage";
import { HomePage } from "./pages/HomePage";
import PokemonProvider from "./component/provider/PokemonProvider.jsx";
import "./styles/index.css";

const router = createBrowserRouter([
  {
    element: <Navigator />,
    children: [
      { path: "home", element: <HomePage /> },

      { path: "pokemon/:id", element: <PokemonPage /> },

      { path: "search", element: <SearchPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <PokemonProvider>
    <RouterProvider router={router} />
  </PokemonProvider>
);
