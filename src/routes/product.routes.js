import { Router } from "express";
import { productController } from "../controllers/product.controller.js";
import uploadImage from "../lib/multer.js";



const router = Router();

router.get("/products", productController.getAll);
router.get("/:id", productController.getOne);
router.get("/category/:category", productController.getByCategory);
router.post("/create", uploadImage, productController.create);
router.put("/update/:id", productController.update);
router.delete("/destroy", productController.destroy);
router.post("/upload", productController.upload);

export default router;
