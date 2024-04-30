import express from 'express'
import bcrypt from 'bcrypt'
import ModelUser from "./user.model.js"

const router = express.Router()

router.get("/all", async (req, res) => {
  try{
    const users = await ModelUser.find()
    res.status(200).json(users)
  }catch(error){
    console.log(error);
  }
})

router.get("/get/:id", async (req, res ) => {
  try{
    const id = req.params.id;
    const user = await ModelUser.findById(id);
    res.status(200).json(user)
  }catch(error){
    console.log(error);
  }
})

router.post("/add", async (req, res) => {
  try{
    const hadedPassword = await bcrypt.hash(req.body.password, 10)

    const user = await ModelUser.create({
      ...req.body,
      password: hadedPassword
    })

    res.status(201).json({
      message: "user has been created !", 
      user
    })
  }catch(error){
    console.log(error);
  }
})

router.put("/update/:id", async (req, res) => {
  try{
    const updateUser = await ModelUser.findByIdAndUpdate(
      req.params.id, 
      req.body,
      { new: true }
    )
    if(!updateUser) return res.status(404).json("User not found !")
    
    res.status(200).json({
      message: "user updated",
      updateUser
    })
  }catch(error){
    console.log(error);
  }
})

router.delete('/delete/:id' ,async (req, res) => {
  try{
    const userDeleted = await ModelUser.findByIdAndDelete(req.params.id)
    if (!userDeleted) return res.status(404).json("User not found !") 
    res.status(200).json({message: "User deleted"})
  }catch(error){
    console.log(error);
  }
})

export default router