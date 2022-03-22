const express = require('express')
const router = express.Router();
// rutas
router.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, 'views/index.html'));
    res.render('index', {title: 'Inicio'})
})

router.get('/contact', (req, res) => {
    res.render('contact', {title: 'Página de contacto'})
})

// router.get('/us', (req, res) => {
//     res.render('us', {title: 'Sobre Nosotros'})
// })

module.exports = router;