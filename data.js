const ROLE = {
    ADMIN: "admin",
    BASIC: "basic",
};

export const data = {
    ROLE: ROLE,
    users: [
        { id: 1, name: "Van Manh", role: ROLE.ADMIN },
        { id: 2, name: "Phan Loan", role: ROLE.BASIC },
        { id: 3, name: "Khanh Ngan", role: ROLE.BASIC },
    ],
    projects: [
        { id: 1, name: "Manh's Project", userId: 1 },
        { id: 2, name: "Loan's Project", userId: 2 },
        { id: 3, name: "Ngan's Project", userId: 3 },
    ],
};
