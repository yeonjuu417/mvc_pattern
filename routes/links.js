const express = require('express');
const router = express.Router();
const controller = require('../controllers/links')



/* GET links listing. */
// router.get('/', function (req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', controller.get);
router.get('/:id', controller.redirect);
router.post('/',controller.post);


module.exports = router;
