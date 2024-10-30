const bcrypt = require('bcrypt');

async function hashPassword() {
    const password = '12345'; // Substitua pela senha que você deseja usar
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    console.log("Senha criptografada:", hashedPassword);
}

hashPassword().catch(console.error);