import express from "express";
import { getThumbnailById, getUsersThumbnails } from "../controllers/UserController.js";
import protect from "../middlewares/auth.js";

const UserRouter = express.Router();

UserRouter.post('/thumbnails',protect, getUsersThumbnails)
UserRouter.delete('/thumbnail/:id',protect, getThumbnailById)


export default UserRouter;