const Skill = require('../models/student/skill.model');

const addSkill = async (req, res) => {
  try {
    const { skillName, description } = req.body;

    const existingSkill = await Skill.findOne({
      skillName: { $regex: new RegExp(`^${skillName}$`, 'i') },
    });
    if (existingSkill) {
      return res.status(400).json({ message: 'Skill already exists' });
    }

    const skill = new Skill({ skillName, description });
    await skill.save();
    res.status(201).json(skill);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// adding skills to junior/senior cohort
const addCategoryToSkill = async (req, res) => {
  try {
    const { id } = req.params;
    let { category } = req.body;
    category = category.toLowerCase();
    const skill = await Skill.findById(id);
    if (!skill) {
      return res.status(404).json({ message: 'Skill not found' });
    }
    if (skill.category.includes(category)) {
      return res.status(400).json({ message: 'Skill already added' });
    }
    skill.category.push(category);
    await skill.save();
    res.status(201).json(skill);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const addCategoriesToSkills = async (req, res) => {
  try {
    const { categoryList, skillIds } = req.body;
    const result = [];

    for (let i = 0; i < skillIds.length; i++) {
      const skill = await Skill.findById(skillIds[i]);
      if (!skill) {
        return res
          .status(404)
          .json({ message: `Skill with id ${skillIds[i]} not found` });
      }

      for (let j = 0; j < categoryList.length; j++) {
        const category = categoryList[j];
        if (skill.category.includes(category)) {
          result.push({
            id: skillIds[i],
            category,
            success: false,
            message: 'Category already added',
          });
        } else {
          skill.category.push(category);
          await skill.save();
          result.push({
            id: skillIds[i],
            category,
            success: true,
            message: 'Category added successfully',
          });
        }
      }
    }

    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const addCategoryToSkills = async (req, res) => {
  try {
    const { skills } = req.body;
    const result = [];

    for (let i = 0; i < skills.length; i++) {
      const { id, category } = skills[i];
      const lowercaseCategory = category.toLowerCase();
      const skill = await Skill.findById(id);
      if (!skill) {
        return res
          .status(404)
          .json({ message: `Skill with id ${id} not found` });
      }
      if (skill.category.includes(lowercaseCategory)) {
        result.push({ id, success: false, message: 'Skill already added' });
      } else {
        skill.category.push(lowercaseCategory);
        await skill.save();
        result.push({
          id,
          success: true,
          message: 'Skill category added successfully',
        });
      }
    }

    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const removeCategoryFromSkill = async (req, res) => {
  try {
    const { id } = req.params;
    let { category } = req.body;
    category = category.toLowerCase();
    const skill = await Skill.findById(id);
    if (!skill) {
      return res.status(404).json({ message: 'Skill not found' });
    }
    if (!skill.category.includes(category)) {
      return res.status(400).json({ message: 'Skill not found' });
    }
    skill.category = skill.category.filter((c) => c !== category);
    await skill.save();
    res.status(201).json(skill);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
const getSkillsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const skills = await Skill.find({ category });
    if (skills.length === 0) {
      return res.status(404).json({ message: 'No skills in this category' });
    }
    const result = skills.map((skill) => {
      const { _id, skillName, description } = skill;
      return { _id, skillName, description };
    });

    return res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const getAllSkills = async (req, res) => {
  console.log('hello');
  try {
    const skills = await Skill.find();
    res.status(200).json(skills);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
const getJuniorSkills = async (req, res) => {
  try {
    const skills = await Skill.find({ category: 'junior' });
    res.status(200).json(skills);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
const getSeniorSkills = async (req, res) => {
  try {
    const skills = await Skill.find({ category: 'senior' });
    res.status(200).json(skills);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  addSkill,
  getAllSkills,
  getJuniorSkills,
  getSeniorSkills,
  addCategoryToSkill,
  removeCategoryFromSkill,
  getSkillsByCategory,
  addCategoryToSkills,
  addCategoriesToSkills,
};
