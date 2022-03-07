import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import login from "./endpoints/login"
import getUserProfile from "./endpoints/getUserProfile"

app.get("/user/profile", getUserProfile) //pega os dados do usuário pelo token
app.post('/user/login', login)// loga usuário
app.post('/user/signup', createUser) //criar usuário 
app.put('/user/edit/:id', editUser) //editar dados de usuário