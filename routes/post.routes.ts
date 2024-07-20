import { Router } from 'express';
import PostController from '../controllers/post.controller';

const router = Router();

router.post('/', PostController.create);
router.get('/', PostController.findAll);
router.get('/:id', PostController.findOne);

export default router;