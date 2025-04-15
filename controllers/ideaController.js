const Idea = require('../models/idea');

addIdea = async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({ message: 'Title and description are mandatory.' });
  }

  try {
    const newIdea = new Idea({ title, description });
    await newIdea.save();
    res.status(200).json({ message: 'Idea added successfully.', idea: newIdea });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};


getAllIdeas = async (req, res) => {
  try {
    const ideas = await Idea.find().sort({ createdAt: -1 });
    res.json(ideas);
  } catch (error) {
    res.status(500).json({ message: 'Failed', error });
  }
};

module.exports={
    getAllIdeas,
    addIdea
}

