router.post("/sign", async (req, res) => {
    try {
      // Recherche l'user dans la base de données par son email
      const user = await ModelUser.findOne({ email: req.body.email });
      // Si l'user n'est pas trouvé, renvoie une erreur 404
      if (!user) return res.status(404).json("User not found !");
  
      /* 
        Compare le mot de passe fourni dans la requête
        avec le mot de passe de l'utilisateur (qui est dans la bdd)
      */
      const comparePassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      /* 
        Si le mot de passe est incorrect, renvoie une erreur 400.
      */
      if (!comparePassword) return res.status(400).json("Wrong Credentials ! ");
  
      // Crée un jeton JWT pour l'utilisateur avec son ID,
      // expire après 24 heures
      const token = jwt.sign(
        // Le premier argument est la charge utile du token.
        // Ici, nous incluons l'ID de l'utilisateur
        { id: user._id },
        // Le deuxième argument est la clé secrète,
        // qui est utilisée pour signer le token.
        // Nous la récupérons à partir
        // des variables d'environnement
        env.token,
        // Le troisième argument est un objet
        // contenant les options du token.
        // Ici, nous définissons une durée
        // d'expiration de 24 heures pour le token
        { expiresIn: "24h" }
      );
  
      // Supprime le mot de passe de l'utilisateur
      // pour des raisons de sécurité.
      // Ce code utilise la destructuration pour extraire
      // la propriété password de user._doc.
      // Toutes les autres propriétés sont regroupées
      // dans un nouvel objet appelé others.
      // C’est une pratique courante lorsque
      // vous voulez exclure certaines propriétés d’un objet.     const { password, ...other } = user._doc
  
      // envoi le jeton (token) JWT sous forme de cookie HTTPOnly
      res
        .cookie("access_token", token, { httpOnly: true })
        .status(200)
        .json(other);
    } catch (e) {
      console.log(e);
    }
  });
  
  router.get("/all", async (req, res) => {
    try {
      const users = await ModelUser.find();
      res.status(200).json(users);
    } catch (error) {
      console.log(error);
    }
  });