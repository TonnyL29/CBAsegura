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
});

function insertar (nombre, apellido, email, pass, ubicaciones, fec_nac){

    let nombre = Document.getElementById("nombre").value;
    let apellido = Document.getElementById("apellido").value;
    let email = Document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    let ubicaciones = document.getElementById("ubicaciones").value;
    let fec_nac = document.getElementById("fec_nac").value;

    let insertar1 = `INSERT INTO users (id,nombre,apellido,email,pass,ubicacion,fec_nac) VALUE (NULL,${nombre},${apellido},${email},${pass},${ubicaciones},${fec_nac})`;
    conexion.query(insertar1, (err));{
        if (err) throw err;
    }
};

