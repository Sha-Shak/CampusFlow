const express = require('express');
const router = express.Router();
const skillControllers = require('../controllers/skill.controller');

router.get('/getAllSkills', skillControllers.getAllSkills);
router.get('/getJuniorSkills', skillControllers.getJuniorSkills);
router.get('/getSeniorSkills', skillControllers.getSeniorSkills);
router.get(
  '/getSkillsByCategory/:category',
  skillControllers.getSkillsByCategory
);

router.post('/addSkill', skillControllers.addSkill);

// adding skills to junior/senior cohort
router.post('/addCategoryToSkill/:id', skillControllers.addCategoryToSkill);

router.delete(
  '/removeCategoryFromSkill/:id',
  skillControllers.removeCategoryFromSkill
);

module.exports = router;
