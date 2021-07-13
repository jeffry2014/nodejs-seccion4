const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10,callback) => {

    try {

        let archivo, consola = '';

        for (let index = 1; index <= hasta; index++) {
            archivo += `${base} x ${index} = ${base * index}\n`;
            consola += `${base}` + colors.yellow(` x `) + `${index} = ` + colors.green(`${base * index}`) + `\n`; 
        }

        if (listar) {
            console.log('======================='.rainbow);
            console.log(`Tabla del ${base}`.red);
            console.log('======================='.rainbow);


            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, archivo);

        return (`Tabla-${base}.txt creado`);
    } catch (error) {
        throw error;
    }

}

module.exports = {
    crearArchivo: crearArchivo
}