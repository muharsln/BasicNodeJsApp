import { Sequelize, DataTypes, Model, Optional } from 'sequelize';

export interface PostAttributes {
  id: number;
  title: string;
  content: string;
}

export interface PostCreationAttributes extends Optional<PostAttributes, 'id'> {}

class Post extends Model<PostAttributes, PostCreationAttributes> implements PostAttributes {
  public id!: number;
  public title!: string;
  public content!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default (sequelize: Sequelize) => {
  Post.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
      content: {
        type: new DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      tableName: 'posts',
      sequelize,
    }
  );

  return Post;
};
