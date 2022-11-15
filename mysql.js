// conexion con db

const mysql = require('mysql');

const conexion = mysql.createConnection({
    host:'b2korh34iiv8uorftfna-mysql.services.clever-cloud.com',
    user:'ujdhaiqvyjdczpuh',
    password:'uYKdDL50JfHyGDTfR2sw',
    database: 'b2korh34iiv8uorftfna'
})

conexion.connect(function(err){
    if(err) {
        throw err;
    }else{
    console.log('conexion exitosa')
    }
    conexion.end()
});

const insertar = "INSERT INTO users (id,nombre,apellido,email,pass,ubicacion,fec_nac) VALUE (NULL,nombre,apellido,email,pass,ubicacion,fec_nac)"

