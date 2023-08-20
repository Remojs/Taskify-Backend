const {Router} = require('express')
const router = Router();
const getTask = require('../controller/getTask.controller')
const createTask = require('../controller/createTask.controller')
const deleteTask = require('../controller/deleteTask.controller')
const editTask = require('../controller/editTask.controller')
const doTask = require('../controller/doTask.controller')

//Routes
router.get("/", getTask);
router.post("/add", createTask);
router.post('/done/:id', doTask);
router.post("/edit/:id", editTask);
router.delete('/delete/:id', deleteTask);

module.exports = router;
