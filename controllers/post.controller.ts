import { Request, Response } from 'express';
import PostService from '../services/post.service';

class PostController {
  static async create(req: Request, res: Response): Promise<void> {
    try {
      const post = await PostService.createPost(req.body);
      res.status(201).json(post);
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).json({ message: err.message || 'Gönderi oluşturulurken bir hata oluştu.' });
      } else {
        res.status(500).json({ message: 'Gönderi oluşturulurken bilinmeyen bir hata oluştu.' });
      }
    }
  }

  static async findOne(req: Request, res: Response): Promise<void> {
    try {
      const post = await PostService.getPostById(Number(req.params.id));
      if (!post) {
        res.status(404).json({ message: `ID'si ${req.params.id} olan gönderi bulunamadı.` });
        return;
      }
      res.json(post);
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).json({ message: `ID'si ${req.params.id} olan gönderi getirilirken bir hata oluştu: ${err.message}` });
      } else {
        res.status(500).json({ message: `ID'si ${req.params.id} olan gönderi getirilirken bilinmeyen bir hata oluştu.` });
      }
    }
  }

  static async findAll(req: Request, res: Response): Promise<void> {
    try {
      const posts = await PostService.getAllPosts();
      res.json(posts);
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).json({ message: err.message || 'Gönderiler getirilirken bir hata oluştu.' });
      } else {
        res.status(500).json({ message: 'Gönderiler getirilirken bilinmeyen bir hata oluştu.' });
      }
    }
  }
}

export default PostController;