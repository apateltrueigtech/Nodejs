import express from 'express'
import { connection } from './postgresql.js'
import router from './view/routes.js'
// import { connection } from './postgresql';
import cors from 'cors';

const app = express()
connection()

app.use(express.json())
app.use(cors())
app.use(router)




const PORT =4000
app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
});