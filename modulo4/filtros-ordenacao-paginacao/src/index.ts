import { app } from "./app";
import { getAllUsers, getAllUsersByName, getAllUsersByType, getAllUsersOrdination, getAllUsersPagination, getAllUsersAllFunctionalities } from "./endpoints/getUsers";



app.get("/users", getAllUsers)

app.get("/users/byname", getAllUsersByName) // Ex. 1 - A

app.get("/users/bytype/:type", getAllUsersByType) // Ex. 1 - B

app.get("/users/ordenation", getAllUsersOrdination) // Ex. 2

app.get("/users/pagination", getAllUsersPagination) // Ex. 3

app.get("/users/allfunctionalities", getAllUsersAllFunctionalities)