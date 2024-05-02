import { Article } from './article.model.js';

        // créer un nouvel article
export const createArticle = async (req, res, next) => {
    try {
        const { title, content, authorId } = req.body; 
        const article = await Article.create({ title, content, authorId });
        res.status(201).json({ message: "Article created successfully", article });
    } catch (error) {
        next(error);
    }
};

            // obtenir tous les articles
export const getAllArticles = async (req, res, next) => {
    try {
        const articles = await Article.find();
        res.status(200).json(articles);
    } catch (error) {
        next(error);
    }
};

        // obtenir un article par son ID
export const getArticleById = async (req, res, next) => {
    try {
        const article = await Article.findById(req.params.id);
        if (!article) {
            return res.status(404).json({ message: "Article introuvable" });
        }
        res.status(200).json(article);
    } catch (error) {
        next(error);
    }
};

        // mettre à jour un article
export const updateArticle = async (req, res, next) => {
    try {
        const { title, content } = req.body;
        const article = await Article.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
        if (!article) {
            return res.status(404).json({ message: "Article introuvable" });
        }
        res.status(200).json({ message: "Article mise à jour avec succès", article });
    } catch (error) {
        next(error);
    }
};

        // supprimer un article
export const deleteArticle = async (req, res, next) => {
    try {
        const article = await Article.findByIdAndDelete(req.params.id);
        if (!article) {
            return res.status(404).json({ message: "Article not found" });
        }
        res.status(200).json({ message: "Article supprimer avec succès" });
    } catch (error) {
        next(error);
    }
};