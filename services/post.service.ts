import db from '../models';
import { PostAttributes, PostCreationAttributes } from '../models/post.model';

class PostService {
  static async createPost(postData: PostCreationAttributes): Promise<PostAttributes> {
    try {
      const post = await db.Post.create(postData);
      return post;
    } catch (err) {
      throw err;
    }
  }

  static async getPostById(id: number): Promise<PostAttributes | null> {
    try {
      const post = await db.Post.findByPk(id);
      if (!post) {
        throw new Error('Post not found');
      }
      return post;
    } catch (err) {
      throw err;
    }
  }

  static async getAllPosts(): Promise<PostAttributes[]> {
    try {
      const posts = await db.Post.findAll();
      return posts;
    } catch (err) {
      throw err;
    }
  }
}

export default PostService;