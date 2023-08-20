const {connect} = require('mongoose')
require('dotenv').config();

(async () => {
    try {
        const db = await connect(process.env.MONGOURL);
        console.log('database conected to', db.connection.name);

    }catch  (error){
        console.log(error);
    }
})();
