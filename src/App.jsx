import { Navigate, Route, Routes } from "react-router-dom";
import Navigator from "./component/Navigator";
import PokemonPage from "./pages/PokemonPage";
import SearchPage from "./pages/SearchPage";
import { HomePage } from "./pages/HomePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigator />}>
        <Route index element={<HomePage />} />
        <Route path="pokemon/:id" element={<PokemonPage />} />
        <Route path="search" element={<SearchPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
