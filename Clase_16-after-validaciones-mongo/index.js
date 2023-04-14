import express from "express";
import morgan from "morgan";
import "./db.js";
import UsersRoutes from "./routes/usersRoutes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extends: true }));
// middleware para mostrar por consola los status code
app.use(morgan("dev"));

// Router
app.use("/user", UsersRoutes);

app.listen(8080, () => console.log("Server ok!.."));
