import { Product } from "../models/Product.js";
import { Image } from "../models/Image.js";
import { uploadImage } from "../utils/cloudinary.js";
import * as fs from "fs/promises";

export const productController = {
  getOne: async (res, req) => {
    const product_id = req.params.id;
    const product = await Product.findOne(product_id);
    res.json(product);
  },
  getAll: async (req, res) => {
    const products = await Product.findAll({ include: Image });
    res.json(products);
  },
  getByCategory: async (req, res) => {},
  create: async (req, res) => {
    const { name, price, category_id } = req.body;
    try {
      if (req.files) {
        const product = await Product.create({
          name,
          price,
          category_id,
        });
        for (let i = 0; i < req.files.length; i++) {
          const result = await uploadImage(req.files[i].path);
          const url = result.secure_url;
          const product_id = product.id;
          const image = await Image.create({
            url,
            product_id,
          });
          await fs.unlink(req.files[i].path);
        }
        const message = "producto creado con exito"
        res.json(message)
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error.message });

    }
  },

  update: async (req, res) => {
    const { id } = req.params;
    try {
      const product = await Product.findOne({
        where: { id },
      });
      product.set(req.body);
      await product.save();
      res.send(product);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  destroy: async (req, res) => {
    res.send("Delete a product");
  },
  upload: (req, res) => {
    res.send("imagen subida perri");
  },
};
