const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es el numero base de la tabla de multiplicar'
        },
        'l': {
            alias: 'listar',
            type: 'boolean',
            default: false,
            describe:'Indicador para determinar si se debe mostrar o no la tabla en consola.'
        },
        'h':{
            alias: 'h',
            type:'number',
            default: 10,
            describe:'Determina hasta donde se debe realizar la multiplicacion de la base.'
        }
    })
    .check((argv, options) => {
        console.log('yargs:', argv);
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un numero';
        }
        if(isNaN(argv.h)){
            throw 'El valor hasta debe ser un numero';
        }
        return true;
    })
    .argv;

module.exports = argv;