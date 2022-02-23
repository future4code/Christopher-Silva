import app from "./app"
import createUser from './endpoints/createUser'
import login from "./endpoints/login"
import { getMyProfile } from "./endpoints/getMyProfile"
import { getOtherProfile } from "./endpoints/getOtherProfile"
import { getRecipe } from "./endpoints/getRecipe"
import { creatRecipe } from "./endpoints/creatRecipe"


//get
app.get('/user/profile', getMyProfile ) // Pegar próprio perfil --> ver OK
app.get('/user/:id', getOtherProfile) // pegar perfil de outro usuário --> ver OK
app.get('/recipe/:id', getRecipe ) // pegar receita --> OK

//post
app.post('/users/signup', createUser)  // Signup --> OK
app.post('/login',login) // Login                --> OK
app.post('/recipe',creatRecipe) // Criar receita --> OK


//put

//delete