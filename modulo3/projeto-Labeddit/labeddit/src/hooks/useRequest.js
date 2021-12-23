import axios from "axios"
import { useEffect, useState } from "react"

const useRequest = (initialState, url) => {
    const [data, setData] = useState(initialState)

    useEffect(() => {
        axios.get(url, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then((res) => {
                console.log("res do get list", res.data)
                setData(res.data)
            })
            .catch((err) => {
                console.log("erro do get", err.data)
            })
    }, [url])
    return (data)
}
export default useRequest