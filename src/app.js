import cors from "cors";
import express from "express";
import axios from "axios";
import { errorMiddleware } from "./middlewares/errorMiddleware";
import { userRouter } from "./routers/userRouter";
import { CocktailRouter } from "./routers/CocktailRouter";
import { RankRouter } from "./routers/RankRouter";
import { dbRouter } from "./routers/dbRouter";
import { LikeRouter } from "./routers/LikeRouter";
import { CommentRouter } from "./routers/CommentRouter";
import { BoardRouter } from "./routers/BoardRouter";

import { ImageRouter } from "./routers/ImageRouter";
import swaggerUi from "swagger-ui-express";
import * as swaggerDocument from "./modules/swagger.json";

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// swagger
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// -----------------------------------------------------------------------------------------------------------
// MVP router
app.use(dbRouter);
app.use(userRouter);
app.use(CocktailRouter);
app.use(RankRouter);
app.use(LikeRouter);
app.use(CommentRouter);
app.use(BoardRouter);

app.use(ImageRouter);
// errorMessage yellow
app.use(errorMiddleware);

import path from "path";
app.use(express.static(path.join(__dirname, "../front", "build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../front", "build", "index.html"));
});

export { app };
