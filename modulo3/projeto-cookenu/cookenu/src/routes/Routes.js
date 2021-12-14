import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage"
import RecipesListPage from "../pages/RecipesListPage/RecipesListPage"
import AddRecipesPage from "../pages/AddRecipesPage/AddRecipesPage"
import RecipeDetailPage from "../pages/RecipeDetailPage/RecipeDetailPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/RecipesListPage" element={<RecipesListPage />} />
                    <Route path="/RecipesListPage/AddRecipes" element={<AddRecipesPage />} />
                    <Route path="/RecipesListPage/RecipeDetail" element={<RecipeDetailPage />} />
                    <Route path="/LoginPage/SignUpPage" element={<SignUpPage />} />
                    <Route element={<ErrorPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default Router;