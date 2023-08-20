const Task = require('../model/Task.model.js')

const doTask =  async (req, res) => {
    const {id} = req.params;
    const task = await Task.findById(id)
    task.done = !task.done;
    await task.save();
};

module.exports = doTask