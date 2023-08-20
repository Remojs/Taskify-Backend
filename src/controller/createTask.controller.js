const Task = require('../model/Task.model.js')

const createTask = async (req, res) => {
    try {
        const { author, title, description, importance } = req.body
        const task = Task({
            author: author,
            title: title,
            description:description,
            importance: importance
        });
        const taskSaved = await task.save();
        res.status(200).json("Tasks created")
    } catch (error) {
        res.status(500).json(error.message);
    }
};

module.exports = createTask