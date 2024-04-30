//Aqui se almacenan todas las rutas del aplicativo

const express =require ('express');
const router = express.Router();

router.get('/', async (req,res) => {
    res.render('index')
});

module.exports = router;