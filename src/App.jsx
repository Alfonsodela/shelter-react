import { Route, Routes } from "react-router-dom"
import Navigation from "./component/Navigation"
import HomePage from "./pages/HomePage"
import SearchPage from "./pages/SearchPage"
import DetailPage from "./pages/DetailPage"


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<HomePage/>}/>
        <Route path="search" element={<SearchPage/>}/>
       <Route path="pokemon/:id" element={<DetailPage/>}/> 
      </Route>
    </Routes>
  )
}

export default App
