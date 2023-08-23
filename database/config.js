const dotenv = require('dotenv');
const typeorm = require('typeorm');
dotenv.config();


    const myDataSource = new typeorm.DataSource({
    type:"mysql",
    host:process.env.MYSQL_HOST,
    port:process.env.MYSQL_PORT,
    username:process.env.MYSQL_USER,
    password:process.env.MYSQL_PASSWORD,
    database:process.env.MYSQL_DATABASE,
    schema:"slack",
    entities:['entity/*.js'],
    logging:true,
    synchronize:true,
})

module.exports = {
    myDataSource : myDataSource
}