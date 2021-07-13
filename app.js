const { options } = require('yargs');
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');


console.clear();

//console.log(process.argv);
//console.log(argv);

//console.log('yargs, base:', argv.b);

//const [,,arg3='base=5'] = process.argv;
//const [, base = 5] = arg3.split('=');
//console.log(base);

//const base = 5;

/*
option ('l')
listar
boolean
default: false
*/

//console.log(argv);

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'Creado'))
    .catch(err => console.log(err));
