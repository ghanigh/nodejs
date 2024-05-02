import mongoose from 'mongoose';
import uniqueValidator from "mongoose-unique-validator";


const articleSchema = mongoose.Schema({
    name: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    avis: { type: mongoose.Schema.Types.ObjectId, ref: "Article", required: false },
    picture: {
        img: { type: String, required: true },
        img1: { type: String, required: false },
        img2: { type: String, required: false },
        img3: { type: String, required: false },
        img4: { type: String, required: false },
    },
    status: { type: Boolean, required: true },
    stock: { type: Number, required: true }
}, { timestamps: { createdAt: true } });

articleSchema.plugin(uniqueValidator);

const Article = mongoose.model('Article', articleSchema);


const addRandomArticles = async () => {
    try {
        const articlesToAdd = [
            {
                name: "Ordinateur portable",
                content: "PC Gamer HP OMEN.",
                category: "Informatique",
                brand: "HP",
                price: 999.99,
                user: "azertyuiop1234567890",
                avis: null,
                picture: {
                    img: "https://www.hp.com/fr-fr/shop/product.aspx?id=7z4d2ea&opt=abf&sel=ntbg",

                },
                status: true,
                stock: 50
            },
           
        ];

        const result = await Article.insertMany(articlesToAdd);
        console.log("Articles ajoutés avec succès :", result);
    } catch (error) {
        console.error("Erreur lors de l'ajout des articles :", error);
    }
};

export { Article, addRandomArticles };

