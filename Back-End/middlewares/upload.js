const multer = require('multer');
const path = require('path');

// Configuração do armazenamento
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads')); // Agora usa um caminho relativo
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// Filtro para validar tipos de arquivos
const fileFilter = (req, file, cb) => {
  const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png', 'video/mp4'];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    console.error(`Tipo de arquivo não suportado: ${file.mimetype}`);
    cb(new Error('Tipo de arquivo não suportado. Envie PDF, JPEG, PNG ou MP4.'), false);
  }
};

const upload = multer({ storage, fileFilter });

module.exports = upload;