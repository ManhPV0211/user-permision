import express from "express";
const app = express();
import { data } from "./data.js";
import projectRouter from "./routes/projects.js";
const PORT = 4000;

app.use(express.json());
app.use(setUser);
app.use("/projects", projectRouter);

app.get("/", (req, res) => {
    res.send("HOME PAGE");
});

app.get("/dashboard", (req, res) => {
    res.send("DASHBOARD PAGE");
});

app.get("admin", (req, res) => {
    res.send("ADMIN PAGE");
});

function setUser(req, res, next) {
    const userId = req.body.userId;
    if (userId) {
        req.user = data.users.find((user) => user.id === userId);
    }
    next();
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
