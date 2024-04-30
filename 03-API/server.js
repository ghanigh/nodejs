import express from 'express';
import routerUser from './router.user.js'
import userModel from './user.js'
import mongoose from 'mongoose' ;
import { env } from './config.js'

mongoose.connect(env.mongoURI, {dbName:'Utilisateur'})
        .then(() => console.log('Connected to MongoDB'))
        .catch((err) => console.log('Failed to connect to MongoDB', err));
const app = express()

const PORT = env.port || 8080
app.use(express.json())

app.use("/api/user", routerUser)
app.use("/api/mongo/user", userModel)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})