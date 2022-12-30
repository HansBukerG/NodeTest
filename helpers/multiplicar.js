const fs = require('fs');

const generarArchivo = async(base,limit, sl) =>{
    
    try {
        let nombre_archivo = `./archivos/tabla-${base}-${limit}-repeticiones.txt`
        let salida = '';



        for (let index = 1; index <= limit; index++) {
            salida += `${base} x ${index} = ${base*index}\n`;
        };

        if (sl) {    
            console.log(`
            ==============================
                    Tabla del ${base}
                    ${limit} repeticiones
            ==============================
            `) 
            console.log(salida)
        }     
        fs.writeFileSync(nombre_archivo,salida);
        return `${nombre_archivo}`

    } catch (error) {
        throw `${error}`
    }
}

module.exports = {
    generarArchivo
}