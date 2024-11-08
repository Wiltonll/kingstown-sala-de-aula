const jwt = require("jsonwebtoken");

function verificarAdmin(req, res, next) {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ msg: "Token não fornecido" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        // Verifique o papel e atribua o usuário ao req.user
        if (decoded.role !== "admin") {
            return res.status(403).json({ msg: "Acesso restrito a administradores" });
        }

        req.user = { id: decoded.id, role: decoded.role }; // Armazena o ID e o papel do usuário
        next();
    } catch (error) {
        res.status(401).json({ msg: "Token inválido" });
    }
}

module.exports = verificarAdmin;