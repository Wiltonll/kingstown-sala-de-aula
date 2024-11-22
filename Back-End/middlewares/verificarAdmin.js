const jwt = require("jsonwebtoken");

function verificarAdmin(req, res, next) {
    const token = req.headers.authorization?.split(" ")[1];  // Obtém o token do cabeçalho 'Authorization'

    if (!token) {
        return res.status(401).json({ msg: "Token não fornecido" }); // Se não houver token
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);  // Verifica e decodifica o token
        
        if (decoded.role !== "admin") {  // Verifica se o papel do usuário é 'admin'
            return res.status(403).json({ msg: "Acesso restrito a administradores" });  // Se não for admin
        }

        req.user = { id: decoded.id, role: decoded.role };  // Armazena informações do usuário no req.user
        next();  // Chama o próximo middleware ou a função da rota
    } catch (error) {
        res.status(401).json({ msg: "Token inválido" });  // Se o token for inválido
    }
}

module.exports = verificarAdmin;