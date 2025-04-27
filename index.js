import dotenv from "dotenv"
import {app} from "./src/app.js"
import connectDB from "./src/db/connectDB.js"

dotenv.config({ path: "./.env" })

connectDB()
    .then(() => {

        app.on("error", (error) => {

            console.log("ERORR:", error)
            throw error
        });

        app.get("/", (req, res) => {

            res.send("hello server running")
        })

        app.listen(process.env.PORT || 8080, () => {

            console.log(`Server is running at port http://localhost:${process.env.PORT}`)
        })

    })
    .catch((error) => {

        console.log("MONGO DB connection failed !!! ", error)

    })

