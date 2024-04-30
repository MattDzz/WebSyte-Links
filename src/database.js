const mysql = require('mysql');
const { promisify } = require ('util');


const {database} = require ('./keys');

const pool = mysql.createPool(database); //tiene una especie de hilos que se van ejecutando uno por uno esto ayuda por si hay un fallo

pool.getConnection((err, conenection) =>{
    if (err){
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){ 
            console.error ('DATABASE CONNECTION WAS CLOSED') //Conexion con la base de datos fue perdida y cerrada
        }
        if(err.code === 'ER_CON_COUNT_ERROR'){
            console.error('DATABASE HAS TO MANY CONNECTIONS') //Para comprobar cuantas conexiones tiene la base de datos acutalmente
        }
        if(err.code === 'ECONNREFUSED'){
            console.error('DATABASE CONNECTION WAS REFUSED');//Cuando se intente conectar la base de datos y la conexion ha sido rechazada
        }
    }
    if(conenection) conenection.release();// Con esto empieza la coneccion
    console.log('DB is connected');
    return;
});

//Promisify Pool Querys
pool.query = promisify(pool.query);

module.exports = pool;