import 'dotenv/config';
import express from 'express';
import { errorMiddleware } from './middlewares/error.middleware.js';
import { core, json } from 'zod';
import morgan from 'morgan';
import { notFoundMiddleware } from './middlewares/notfound.middleware.js';
import { authRouter } from './routes/auth.route.js';
import { todoRounter } from './routes/todo.route.js';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/auth', authRouter);
app.use('/todos', todoRounter);
app.use(notFoundMiddleware);
app.use(errorMiddleware);

const PORT = process.env.PORT ?? 8000;

app.listen(PORT, (error) => {
  if (error) {
    console.log(error); // แก้ err → error ด้วย
    process.exit(1);
  } else console.log(`server running on port: ${PORT}`);
});
