import express from 'express';
import bcrypt from 'bcrypt';
import { Article } from '../models/article.model.js';



const router = express.Router();

        // créer un nouvel article
router.post("/add", async (req, res) => {
    try {
        const { title, content, authorId } = req.body;
        const article = await Article.create({ title, content, authorId });
        res.status(201).json({ message: "Article crée avec succès", article });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Erreur du serveur" });
    }
});

        // obtenir tous les articles
router.get("/all", async (req, res) => {
    try {
        const articles = await Article.find();
        res.status(200).json(articles);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Erreur du serveur" });
    }
});

        // obtenir un article par son ID
router.get("/get/:id", async (req, res) => {
    try {
        const article = await Article.findById(req.params.id);
        if (!article) {
            return res.status(404).json({ message: "Article not found" });
        }
        res.status(200).json(article);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Erreur du serveur" });
    }
});

        // mettre à jour un article
router.put("/update/:id", async (req, res) => {
    try {
        const { title, content } = req.body;
        const article = await Article.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
        if (!article) {
            return res.status(404).json({ message: "Article introuvable" });
        }
        res.status(200).json({ message: "Article mise à jour avec succès", article });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Erreur du serveur" });
    }
});

        // supprimer un article
router.delete("/delete/:id", async (req, res) => {
    try {
        const article = await Article.findByIdAndDelete(req.params.id);
        if (!article) {
            return res.status(404).json({ message: "Article introuvable" });
        }
        res.status(200).json({ message: "Article supprimer avec succès" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Erreur du serveur" });
    }
});

export default router;
