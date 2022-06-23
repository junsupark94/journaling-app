const router = require('express').Router();
const controllers = require('./controllers.js');

router.get('/diary', controllers.get);
router.post('/diary', controllers.post);
router.delete('/diary', controllers.delete);
router.patch('/diary', controllers.patch);

module.exports = router;