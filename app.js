import express from "express";
import cors from "cors"
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import Hello from "./hello.js";
import Lab5 from "./lab5.js";
import "dotenv/config";
const app = express();
app.use(express.json());
app.use(
    cors({
      credentials: true,
      origin: process.env.FRONTEND_URL
    })
  );
CourseRoutes(app);
ModuleRoutes(app);
Lab5(app);
Hello(app);
app.listen(process.env.PORT || 4000);