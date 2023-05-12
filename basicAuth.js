export function authUser(req, res, next) {
	if (req.user == null) {
		return res.status(403).send("You need to signin");
	}
	next();
}

export function authRole(role) {
	return (req, res, next) => {
		if (req.user.role !== role) {
			res.status(401).send("Not Allowed");
		}
		next();
	};
}
