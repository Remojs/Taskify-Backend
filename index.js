require('dotenv').config();
const express = require('express')
const path = require('path')
const morgan = require('morgan')

const PORT = process.env.PORT
const indexRoutes = require('./src/routes/index.routes.js')
const app = express();
const db = require('./src/db/database')



//middlewares           
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))

//Routes
app.use(indexRoutes);

app.listen(PORT, () => {
    console.log(`Taskify on: ${PORT}`);
});
