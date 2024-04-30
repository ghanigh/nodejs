import express from 'express';
import ModelUser from "./user.model.js"
import { Model } from 'mongoose';

const router = express.Router();

// ROUTE GET
router.get("/all", async (req, res) =>{
  const users = await ModelUser.find()
  res.status(200).json(users)
})

// AJOUTER UN NOUVEL UTILISATEUR
router.post("/add", async (req, res) =>{
const newUser = await ModelUser.create(req.body);
res.status(201).json(newUser)

})

// Update ID
router.put("/update/:id", (req, res) =>{
  const { id } = req.params
  Model.findByIdAndUpdate(id, { name: 'Mike' }, options)
    .then(() => res.status(200).json("User updated"))
    .catch(err => res.status(500).json(err))
})

// SUPPRIMER UTILISATEUR
router.delete('/delete:id' , (req, res) => {
  const { id } = req.params

  ModelUser.findByIdAndDelete(id)
    .then(() => res.status(200).json("User deleted"))
    .catch(err => res.status(500).json(err))
})

export default router;
