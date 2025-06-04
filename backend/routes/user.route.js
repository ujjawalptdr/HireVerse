import express from 'express';
import { register, login, updateProfile, logout } from "../controllers/user.controller.js"
import isAuthenticated from '../middlewares/isAuthenticated.js';
import { singleUpload } from '../middlewares/multer.js';

const router = express.Router();

router.route("/register").post(singleUpload, register);
router.route("/login").post(login);
router.route("/logout").get(logout);  //Get- as we do not send any data
router.route("/profile/update").post(isAuthenticated, singleUpload, updateProfile); // singleUpload as we are sending file with form

export default router;