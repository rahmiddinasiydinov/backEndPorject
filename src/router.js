const express= require('express');
const router = express.Router();
const renderIndex = require('./controllers/renderIndex');
const contact = require('./controllers/contact')

router.get('/', renderIndex)
router.post('/contact', contact);

module.exports = router;