import express from 'express';

const router = express.Router();

const data = [
    {
      id: 1,
      name: "Izuku",
      email: "Izuku@yahoo.com"
    },
    {
      id: 2,
      name: "Drake",
      email: "Drake@yahoo.com",
    },
    {
      id: 3,
      name: "Marion",
      email: "Marion@yahoo.com",
    },
  ];

router.get("/all", (req, res) =>{

    res.status(200).json(data)

})

router.post("/add", (req, res) =>{
  console.log(req.body)
  const newUser = req.body

  res.status(201).json(data.push(newUser))

})

router.put("/update/:id", (req, res) =>{
    const id = req.params.id
    console.log(id)
    for (let i = 0; i < data.length; i++) {
        if (data[i].id == id) {
            data[i].name = req.body.name
            data[i].email = req.body.email
        }
    }
    console.log(data);


    res.status(200).json(id)

})

router.delete('/delete:id' , (req, res) => {
  const id = req.param.id

  const checkIsExiste = data.some(user => isSecureContext.id == id)

  if (checkIsExiste){
    data.map((user, index) => {
      if(user.id == id){
        data.splace(index, 1)
        res.status(200).json(data)
        res.end()
      }
    })
  }

})

// if(!checkIsExiste) res.status(404).json({ message: 'user not found !'})

export default router;