const Task = require('../model/Task.model.js')

const editTask =  async (req, res) => {
    try {
        const task = await Task.findById(req.params.id).lean()
        res.render("edit", {task});
        res.status(200).json("Tasks edited")
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = editTask