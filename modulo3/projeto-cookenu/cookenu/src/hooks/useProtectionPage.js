import { useEffect } from "react"
import { Navigate } from "react-router-dom"


const useProtectPage = () => {

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            Navigate("/")
        }
    })
}
export default useProtectPage;