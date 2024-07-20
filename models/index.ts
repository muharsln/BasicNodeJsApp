import { Sequelize } from 'sequelize';
import sequelize from '../config/db.config';
import PostModel from './post.model';

const db: {
  sequelize: Sequelize;
  Post: ReturnType<typeof PostModel>;
} = {
  sequelize,
  Post: PostModel(sequelize),
};

export default db;
