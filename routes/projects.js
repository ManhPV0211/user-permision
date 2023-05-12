import express from "express";
const router = express.Router();
import { data } from "../data.js";
import { authRole, authUser } from "../basicAuth.js";
import {
	canViewProject,
	scopeProject,
} from "../permissions/projectPermission.js";

router.get("/", (req, res) => {
	res.json(scopeProject(req.id, data.projects));
});

router.get("/:projectId", setProject, authUser, authGetProject, (req, res) => {
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

function authGetProject(req, res, next) {
	if (!canViewProject(req.user, req.project)) {
		return res.status(401).send("Nor Allowed");
	}
	next();
}

export default router;
