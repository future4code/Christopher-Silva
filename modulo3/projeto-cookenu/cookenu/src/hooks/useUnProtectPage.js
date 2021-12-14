import { useEffect } from "react"
import { Navigate } from "react-router-dom"


const useUnProtectPage = () => {

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            Navigate("/RecipesListPage")
        }
    })
}
export default useUnProtectPage;