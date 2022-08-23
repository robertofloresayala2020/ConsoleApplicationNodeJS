const { stdout } = require('process');
require('colors');


const MostrarMenu= () =>
{

    return new Promise( resolve=>{

     console.clear();

     console.log('======================'.green)
     console.log('Seleccione una opción'.green)
     console.log('======================'.green)
     

    console.log(`1-Crear Tarea`);
    console.log(`2-Listar Tarea`);
    console.log(`3-Listar Tareas completadas`);
    console.log(`4-Listar Tareas pendientes`);
    console.log(`5-Completas tareas(s)`);
    console.log(`6-Borrar Tarea`);
    console.log(`0-Salir\n`);
        
        const readline = require ('readline').createInterface({
            input :process.stdin,
            output :process.stdout

        });

        readline.question('Seleccione una opción',(opt)=>
        {

            readline.close();
            resolve(opt);

        });

    });

}

const Pausa =() =>
{

 return new Promise(resolve =>{
        const readline = require ('readline').createInterface({
            input :process.stdin,
            output :process.stdout

        });

        readline.question(`\nPresione ${'ENTER'.green} para continuar\n`,(opt)=>
        {
            
            readline.close();
            resolve();

        });

    });

}

module.exports =
{
    MostrarMenu,
    Pausa

}