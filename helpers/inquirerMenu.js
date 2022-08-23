/*const inquirer = require('inquirer');*/
import inquirer from 'inquirer';
import readlines  from 'readline'
import colors from 'colors';



let options=
            [
            {
                type:'list',
                name:'opcion',
                message:'¿Qué desea hacer?',    
                choices:[                    
                            {
                                value:'1',
                                name:'1.Crear tarea'
                            },
                            {
                                value:'2',
                                name:'2.Listar Tareas'
                            },
                            {
                                value:'3',
                                name:'3.Listar Tareas completadas'

                            },
                            {
                                value:'4',
                                name:'4.Listar Tareas pendientes'
                            },
                            {
                                value:'5',
                                name:'5.Completar tareas(s)'
                            },
                            {
                                value:'6',
                                name:'6.Borrar tarea'
                            },
                            {
                                value:'0',
                                name:'0.Salir'
                            },
                            
                        ]
            }
            ];    


    let questions=[{
                    type:'input',
                    name:'enter',
                    message:`Presione ${'enter'.green} para continuar`        
                    },                        

                   ];    

        
    let preguntas=[{        
                    type:'input'  ,
                    name:'desc'  ,
                    message:'',
                    validate(value)
                    {
                      if(value.length==0)
                            {return 'Por favor ingrese un valor'}
                        return true;
                    
                    }
                    }];

export default class  inquirerMenu
{   
    constructor(params)
    {

    }
             
    async  CreaMenu()
    {
      
        console.clear();
        console.log('======================'.green);
        console.log('Seleccione una opción'.white);
        console.log('======================'.green);
        //Tiene el nombre del arreglo y lo desestructura
        const {opcion} = await inquirer.prompt(options);

        return opcion;
    }

    async Pausa ()
    {
                        
        //Tiene el nombre del arreglo y lo desestructura
        const {question} = await inquirer.prompt(questions);
        return question;
    }
        

    async leerInput(message)
    {

        const {desc} = await inquirer.prompt(preguntas);
        return desc;
    }
    
    async ListadoTareas(tareas=[])
    {
         const opciones= tareas.map((tarea,i)=>
            {                
                return{value: tarea.id,
                       name:`${i} :  ${tarea.desc}`
                      }
            }
        );

        opciones.unshift({value:'C', name:'C-'+'Cancelar'})
        const opcionestareas=[{
                type:'list',
                name:'id',
                message:'Borrar',
                choices: opciones

        }]

        const {id} = await inquirer.prompt(opcionestareas);
        
        return id;

      


    }

    async MostrarTareasCheckList(tareas=[])
    {
         const choices= tareas.map((tarea,i)=>
            {                
                return{value: tarea.id,
                       name:`${i} :  ${tarea.desc}`,
                       checked:tarea.completadoEn?true:false

                      }
            }
        );
        
        const checklist=[{
                type:'checkbox',
                name:'ids',
                message:'Seleccione',
                choices

        }]

        const {ids} = await inquirer.prompt(checklist);
        
        return ids;

      


    }

    async confirmar(message)
    {

        const question=
        [
            { type:'confirm',
              name:'ok',
              message}
        ];

        const {ok} = await inquirer.prompt(question);
        return ok;

    }
    

}