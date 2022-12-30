const { generarArchivo } = require('./helpers/multiplicar')
const colors = require('colors')
const argv = require('./config/yargs')

const { base = 1, limit = 10, sl } = argv

// console.log(sl);

generarArchivo(base,limit, sl)
    .then( respuesta => console.log(colors.bgRed(`Archivo: ${respuesta} fue creado con exito!`)) )
    .catch( err => console.log(`${err}`) )

