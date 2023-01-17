import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Categories from "./pages/Categories";
import SingleCategoryPage from "./pages/SingleCategoryPage";
import RecipePage from "./pages/RecipeSearchPage";
import SingleRecipePage from "./pages/SingleRecipePage";
import Error from "./pages/Error";
import Area from './pages/Area'
import SingleAreaPage from "./pages/SingleAreapage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="categories" element={<Categories />} />
        <Route path="area" element={<Area />} />
        <Route path="area/:id" element={<SingleAreaPage/>} />
        <Route path="categories/:id" element={<SingleCategoryPage />} />
        <Route path="recipe/search" element={<RecipePage />} />
        <Route path="recipe/:id" element={<SingleRecipePage />} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
