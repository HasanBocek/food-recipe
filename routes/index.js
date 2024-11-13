var express = require('express');
var router = express.Router();

router.use('/recipes', require('./recipe.route.js'));
router.use('/users', require('./user.route.js'));
router.use('/categories', require('./category.route.js'));

module.exports = router;