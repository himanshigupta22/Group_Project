require('../models/db');
 
const router = require('express').Router();

const upload=require('../Actions/Upload');
const allDoc=require('../Actions/findAll') 

router.post('/upload', upload);
router.get('/find',allDoc);

module.exports = router;