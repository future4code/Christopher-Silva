import React from "react"
import { useNavigate } from "react-router-dom";
import { ButtonAll, CardBoxAll } from "../../components/StyledAll";
import useProtectPage from "../../hooks/useProtectionPage";
import recipesList from "../../services/RecipeRequire";

const RecipesListPage = () => {
    const navigate = useNavigate();
    console.log("local",localStorage)
const logOut=()=>{
    localStorage.setItem('token', "")
navigate("/") 
}

    
    return (
        <CardBoxAll>
            <h1>Lista de Receitas</h1>
{recipesList()}
            <ButtonAll onClick={logOut}>Logout</ButtonAll>
        </CardBoxAll>
                ) 
}
export default RecipesListPage;