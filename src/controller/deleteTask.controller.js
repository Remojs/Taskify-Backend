const Task = require('../model/Task.model.js')

const deleteTask = async (req, res) => {
    const {id } = req.params;
    await Task.deleteOne({_id: id})
    res.status(200).json("Task deleted")
};

module.exports = deleteTask