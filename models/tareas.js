import Tarea from './tarea.js'
import colors from 'colors';

export default  class  Tareas
{
 
    _listado={};

    get listadoArr()
    {
        const listado =[];
        Object.keys(this._listado).forEach(key=>
            {
                    const tarea = this._listado[key];
                    listado.push(tarea);

            }) ;


        return listado;
    }

    constructor()
    {
       this._listado = {};
    }
    
    crearTarea(desc ='')
    {
         const tarea = new Tarea(desc);
         this._listado[tarea.id] = tarea;
         
    }

    caragarTareasFromArray(tareas=[])
    {

        tareas.forEach(tarea=>
        {
            this._listado[tarea.id]= tarea;

        });
                        
        return this._listado;

    }

    listadoCompleto(tareas=[])
    {
        
        this.listadoArr.forEach((tarea,i)=>
        {
            const idx  = i +1;
            const{desc,completadoEn} = tarea;

            const estado =  completadoEn? 'Completado':'Pendiente'            
            console.log(`${idx} ${desc} :: ${estado}`)
            
        });

    }

    listadoCompletadasPendientes(completadas=true)
    {
        let contador = 0;
        this.listadoArr.forEach(tarea=>
        {
            
            const{desc,completadoEn} = tarea;
            const estado =(completadoEn)? 'Completado' :'Pendiente'

            contador += 1;
            if(!completadas)
               { if(completadoEn)
                        console.log(`${contador.toString()} ${desc} :: ${estado}`)
               }
                    
            else{
                if(!completadoEn)
                        console.log(`${contador.toString()} ${desc} :: ${estado}`)
                }

                                    
        });

    }


    BorrarTareas(id='')
    {
        if(this._listado[id])
        {   
            delete this._listado[id];
        }

    }

    CompletarTareas(ids=[])
    {

        ids.forEach(id=>{

            /*Actualiza por referencia*/
            const tarea = this._listado[id]
            if(!tarea.completadoEn)
            {
                 tarea.completadoEn= new Date().toISOString()

            }

        })
        
        

    }
    


    

}