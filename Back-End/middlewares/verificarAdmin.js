const jwt = require("jsonwebtoken");

function verificarAdmin(req, res, next) {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ msg: "Token não fornecido" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (decoded.role !== "admin") {
            return res.status(403).json({ msg: "Acesso restrito a administradores" });
        }
        req.userId = decoded.id; // Opcional: Armazena o ID do usuário para uso em outras operações
        next();
    } catch (error) {
        res.status(401).json({ msg: "Token inválido" });
    }
}

module.exports = verificarAdmin;