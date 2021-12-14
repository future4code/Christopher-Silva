import React from "react"
import { CardBoxAll } from "../../components/StyledAll";
import useProtectPage from "../../hooks/useProtectionPage";

const AddRecipesPage = () => {
    useProtectPage()
    return (
        <CardBoxAll>
            <h1>Cadastro de Receitas</h1>
        </CardBoxAll>
                ) 
}
export default AddRecipesPage;