var express = require('express');
var router = express.Router();
const authMiddleware = require('../middlewares/auth'); // Middleware para proteger rotas que exigem autenticação
const upload = require('../middlewares/multer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/register', (req, res) => {
res.render('register', { title: 'Criar Conta' });
});

const userController = require('../modules/user/userController');
// Rota que processa o formulário de cadastro
router.post('/register', userController.register);

// Rota para processar o formulário de login
router.post('/login', userController.login);

// Rota para processar o logout
router.get('/logout', userController.logout);

// Rota para exibir o feed de vídeos (protegida por autenticação)
router.get('/feed', authMiddleware, async (req, res) => {
    const user = await userController.getProfile(req.session.user.id);
    res.render('home', { user });
});

// Rota para exibir o perfil do usuário (protegida por autenticação)
router.get('/profile/edit', authMiddleware, async (req, res) => {
    const user = await userController.getProfile(req.session.user.id);
    res.render('edit-profile', { user });
});

// Rota de atualização (Protegida + Upload de 1 arquivo chamado 'profilePicture')
router.post('/profile/edit', authMiddleware, upload.single('profilePicture'), userController.updateProfile);

module.exports = router;