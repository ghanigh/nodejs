import express from 'express';
import routerUser from './router.user.js'


const app = express()

const port = 8080
app.use(express.json())

app.use("/api/user", routerUser)
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})