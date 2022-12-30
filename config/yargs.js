const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type:'number',
                    describe: 'Es la base de la tabla de multiplicar'
                    
                    
                })
                .option('l',{
                    alias:'limit',
                    type:'number',
                    describe: 'Es el limite de multiplicaciones que realiza el programa',
                    default: 10
                })
                .option('sl',{
                    alias:'showlogs',
                    type:'boolean',
                    default: false,
                    describe: 'Esta opcion sirve para desplegar los console logs de la terminal'
                })
                .argv;

module.exports = argv;