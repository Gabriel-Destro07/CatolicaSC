var express = require('express');
var router = express.Router();
const authMiddleware = require('../middlewares/auth'); // Middleware para proteger rotas que exigem autenticação

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

// Rota para exibir o feed de vídeos (protegida por autenticação com middleware)
router.get('/feed', authMiddleware, (req, res) => { // middleware estre a rota feed e a função de callback
   res.render('home', { user: req.session.user }); // Passa os dados do usuário para a view, se necessário
});


module.exports = router;