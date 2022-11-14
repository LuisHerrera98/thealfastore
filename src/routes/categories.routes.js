import {Router} from 'express'
import { categoryController } from '../controllers/category.controller.js';

const router = Router();

router.get('/categories', categoryController.getAllCategories)
router.post('/create', categoryController.create);



export default router;