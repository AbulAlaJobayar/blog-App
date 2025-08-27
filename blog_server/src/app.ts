import cookieParser from "cookie-parser";
import  express, { Application, Request, Response }  from "express";
import cors from "cors"
import { BlogRouter } from "./app/modules/blog/blog.route";
import { globalErrorHandler } from "./app/middleware/globalErrorHandler";
import notFound from "./app/middleware/notFound";
const app: Application = express();

app.use(express.json());
app.use(cookieParser());

// cors middleware to handle cross-origin requests
app.use(
  cors({
    origin: [
      '*',
      'http://localhost:5173',
    ],
    credentials: true,
  }),
);

app.use('/api/v1',BlogRouter);

app.get('/', (req:Request, res:Response) => {
  res.send('welcome to blog api!');
});
app.use(globalErrorHandler);
app.use(notFound);

export default app;