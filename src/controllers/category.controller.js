import { Category } from "../models/Category.js"

export const categoryController = {
    create: async (req, res) => {
        const { category_name } = req.body;
        const category = await Category.create({
            category_name
        })
        const message = "categoria creada"
        res.json(message)
    },
    getAllCategories: async (req, res) => {
        const categories = await Category.findAll();
        res.json(categories)
    }
}


