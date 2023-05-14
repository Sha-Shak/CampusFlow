const express = require('express');
const router = express.Router();
const skillControllers = require('../controllers/skill.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.get('/getAllSkills', authMiddleware, skillControllers.getAllSkills);
router.get(
  '/getJuniorSkills',
  authMiddleware,
  skillControllers.getJuniorSkills
);
router.get(
  '/getSeniorSkills',
  authMiddleware,
  skillControllers.getSeniorSkills
);
router.get(
  '/getSkillsByCategory/:category',
  authMiddleware,
  skillControllers.getSkillsByCategory
);

router.post('/addSkill', authMiddleware, skillControllers.addSkill);

// adding skills to junior/senior cohort
router.post(
  '/addCategoryToSkill/:id',
  authMiddleware,
  skillControllers.addCategoryToSkill
);

router.delete(
  '/removeCategoryFromSkill/:id',
  authMiddleware,
  skillControllers.removeCategoryFromSkill
);

module.exports = router;
