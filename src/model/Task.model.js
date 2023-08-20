const { Schema } = require("mongoose");
const mongoose = require('mongoose');

const taskSchema = new Schema({
    author: {
        type: String,
        required: true,
        trim: true,
    },
    
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },

    description:{        
        type: String,
        required: true,
    },

    importance:{        
        type: String,
        required: true,
    },

    done:{        
        type: Boolean,
        default: false,
    },   
},
    {
        timestamps: true,
        versionKey: false,
    }
);
const Task = mongoose.model("Task", taskSchema);

module.exports = Task