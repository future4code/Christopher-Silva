import React from "react"
import useProtectPage from "../../hooks/useProtectionPage";

const RecipeDetailPage = () => {
    useProtectPage()
    return (
        <div>
            <h1>Detalhes da receita</h1>
        </div>
                ) 
}
export default RecipeDetailPage;