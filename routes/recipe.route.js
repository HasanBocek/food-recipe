var express = require('express');
var router = express.Router();
var recipeController = require('../controllers/recipe.controller');

router.get('/', recipeController.getRecipes);
router.post('/', recipeController.createRecipe);
router.get('/:id', recipeController.getRecipe);
router.put('/:id', recipeController.updateRecipe);
router.delete('/:id', recipeController.deleteRecipe);

module.exports = router;