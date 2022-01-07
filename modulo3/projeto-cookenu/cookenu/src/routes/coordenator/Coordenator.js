import { Navigate } from "react-router-dom"

export const GoToLoginPage =()=>{
    Navigate("/")
}

export const GoToRecipesListPage =()=>{
    Navigate("/RecipesListPage")
}

export const GoToAddRecipesPage =()=>{
    Navigate("/RecipesListPage/AddRecipes")
}

export const GoToRecipeDetailPage =(idRecipe)=>{
    Navigate(`/RecipesListPage/RecipeDetail/${idRecipe}`)
}

export const GoToSignUp =()=>{
    Navigate("/LoginPage/SignUpPage")
}