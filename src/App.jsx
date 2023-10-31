import { Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./component/Navigation";

import DetailPage from "./pages/DetailPage";
import SearchPage from "./pages/SearchPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path="pokemon/:id" element={<DetailPage />} />
        <Route path="search" element={<SearchPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
