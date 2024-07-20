import express from 'express';
import bodyParser from 'body-parser';
import sequelize from './config/db.config';
import postRoutes from './routes/post.routes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/posts', postRoutes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor.`);
  });
});