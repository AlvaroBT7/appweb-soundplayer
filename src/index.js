import express from "express";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import indexRouter from "./routers/index.js";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
app.set("view engine", "ejs");
app.set("views", join(__dirname, "views"));
app.use("/", express.static(join(__dirname, "public")));

app.use("/", indexRouter);

// middleware de errores
app.use("/", (req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});


app.use((err, req, res, next) => {
    switch (err.status) {
        case 404: return res.render("error.ejs", { errStatus: err.status });
        case 500: return res.render("error.ejs", { errStatus: err.status });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is listening at ${PORT}...`));