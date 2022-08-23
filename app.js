//const  {MostrarMenu,Pausa} = require('./helpers/mensajes')
import colors from 'colors';
import inquirerMenu from './helpers/inquirerMenu.js';
import AdminData from './helpers/AdminFile.js';
import Tareas  from './models/tareas.js'

const main = async() => 
{
    console.clear();
    console.log('Inicio');

    let obj  = new inquirerMenu();
    let objfile =  new AdminData();
    let opt = '';
    let listadoTareas =[];

      const tareas = new Tareas();
      const tareasFile = objfile.leerData()

      if(tareasFile)
             tareas.caragarTareasFromArray(tareasFile);
     
    do
    {                   
        opt = await obj.CreaMenu();

        switch(opt)
        {
            
            case '1':
                    const desc= await obj.leerInput('Descripcion: ');
                    tareas.crearTarea(desc);
                    break;
            case '2':
                    tareas.listadoCompleto();
                    break;
            case '3':
                    tareas.listadoCompletadasPendientes(false);
                    break;
            case '4':
                    tareas.listadoCompletadasPendientes(true);                    
                    break;
            case '5':
                    const ids=await  obj.MostrarTareasCheckList(tareas.listadoArr);                                       
                    console.log(ids);
                    tareas.CompletarTareas(ids)
                    
                    break;
            case '6':
                    const  id = await obj.ListadoTareas(tareas.listadoArr);
                    
                    if(id!=='C')
                    {  const ok  = await obj.confirmar('¿Estas seguro?')
                       if(ok)
                        tareas.BorrarTareas(id);
                    }
                    break;
        }

        objfile.guardarData(tareas.listadoArr);
        
       if(opt!=='0') await obj.Pausa();
    } while(opt!=='0')

}

main();