const Task = require('../model/Task.model.js')

const getTask = async (req, res) => {
    const tasks = await Task.find().lean();
    res.status(200).json(tasks)
};

module.exports = getTask