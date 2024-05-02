import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { env } from '../config/index.js';

export const signup = async (req, res, next) => {
    // Début du bloc try pour la gestion des erreurs
    try {
      // Hashage du mot de passe avec bcrypt, 
      // "10" est le nombre de tours de salage
      const hashedPassword = await bcrypt.hash(req.body.password, 10)
  
      // Création d'un nouvel utilisateur dans la base de données 
          // avec les informations reçues et le mot de passe haché
      await Model.create({ 
          // '...req.body' est une syntaxe de 
          // décomposition (spread syntax).
      // Elle permet de créer une copie 
          // de toutes les propriétés 
          // de 'req.body' et de les ajouter à l'objet 
          // en cours de création.
        ...req.body,
        password: hashedPassword
       });
  
      // Envoi d'une réponse avec le statut 201 (créé) 
          // et un message de confirmation
      res.status(201).json("User has been created!");
    } catch (error) {
      // Si une erreur se produit, passez-la au prochain 
          // middleware pour la gestion des erreurs
          console.log(e);
  
    }
  };