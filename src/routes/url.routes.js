import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { createUrl, getAllUrl } from "../controllers/url.controller.js"


const router = Router()

router.route("/create-url").post(verifyJWT, createUrl)
router.route("/get-all-url").get(verifyJWT, getAllUrl)

export default router