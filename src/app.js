import 'dotenv/config';
import express from 'express';
import { errorMiddleware } from './middlewares/error.middleware.js';
import { authRouter } from './routes/auth.route.js';
import { json } from 'zod';
import morgan from 'morgan';
import { notFoundMiddleware } from './middlewares/notfound.middleware.js';

const app = express();
app.use(express.json());
app.use(morgan('dev'));

app.use('/auth', authRouter);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const PORT = process.env.PORT ?? 8000;

app.listen(PORT, (error) => {
  if (error) {
    console.log(error); // แก้ err → error ด้วย
    process.exit(1);
  } else console.log(`server running on port: ${PORT}`);
});
