import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import userRoutes from "./routes/user.routes.js"
import urlRoutes from "./routes/url.routes.js"
import { redirectToUrl } from "./controllers/url.controller.js"

import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(cors({
    origin: "https://url-frontend-fawn.vercel.app", 
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"]
}));

app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public"))

app.use(cookieParser())

// user routes
app.use("/api/v1/users", userRoutes)

// url routes
app.use("/api/v1/urls", urlRoutes)

//redirect route
app.get("/:shortId", redirectToUrl);

export { app }