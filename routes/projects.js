import express from "express";
const router = express.Router();
import { data } from "../data.js";

router.get("/", (req, res) => {
    res.json(data.projects);
});

router.get("/:projectId", setProject, (req, res) => {
    res.json(req.project);
});

function setProject(req, res, next) {
    const projectId = parseInt(req.params.projectId);
    req.project = data.projects.find((project) => project.id === projectId);
    if (req.project === null) {
        return res.status(400).send("Project not found");
    }
    next();
}

export default router;
