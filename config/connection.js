const Sequelize = require("sequelize");

require("dotenv").config();

let sequelize;

// syntax to connect mysql with node.js 

if(process.env.JAWSDB_URL){
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize(
        process.env.DB_NAME || "blog_db",
        process.env.DB_USER || "root",
        process.env.DB_PASSWORD || "rootr00t!",
        {
            host: "localhost",
            dialect: "mysql",
            port: 3306
        }
        
        );
}

module.exports = sequelize;

