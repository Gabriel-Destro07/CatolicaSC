const {Sequelize} = require ('sequelize'); //importa a classe Sequelize do pacote sequelize
require('dotenv').config(); //require abre dotenv e le os arquivos e executa o metodo config
const sequelize = new Sequelize( //instancia da classe Sequelize
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host : process.env.DB_HOST,
    port : process.env.DB_PORT,
    dialect : 'mysql',//tipo
    logging : false,//sql no console
    define : {
        timestamps : true, //campos 1- cratedAT= campo 2- updatAT= == toda e qualquer tabela tera dois campos 
        underScore : true, //crated_at / updated_at 
    }
  }
); // conexao ao banco de dados 

module.exports = sequelize; // equivaente a public sequelize sequelize (tornar publico)

