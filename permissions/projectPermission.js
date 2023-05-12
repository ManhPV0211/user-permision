import { data } from "../data.js";

export function canViewProject(user, project) {
	return user.role === data.ROLE.ADMIN || project.userId === user.id;
}

export function scopeProject(user, projects) {
	if (user.role === data.ROLE.ADMIN) {
		return projects;
	}
	return projects.filter((project) => project.userId === userid);
}
