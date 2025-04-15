const express = require("express");
const router = express.Router();
const ideaController = require("../controllers/ideaController");
const { body } = require('express-validator'); 

const validateIdea = [
    body("title")
        .notEmpty().withMessage("Title is required")
        .isLength({ min: 3 }).withMessage("Title must be at least 3 characters long"),
    body("description")
        .notEmpty().withMessage("Description is required")
        .isLength({ min: 10 }).withMessage("Description must be at least 10 characters long"),
];

router.post("/ideas",validateIdea, ideaController.addIdea);
router.get("/ideas", ideaController.getAllIdeas);

module.exports = router;
