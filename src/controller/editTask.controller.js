const mongoose = require('mongoose');
const Task = require('../model/Task.model.js');

const editTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { author, title, description, importance } = req.body;

        await Task.updateOne(
            { _id: id },
            {
                $set: {
                    author: author,
                    title: title,
                    description: description,
                    importance: importance
                }
            }
        );

        res.status(200).json("Task edited");
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = editTask;