import Files from 'fs'


export default  class  AdminFile
{
    
    constructor()
    {
       
    }
    
    guardarData(data)
    {
        const archivo ='./repositorio/data.txt';
        Files.writeFileSync(archivo,JSON.stringify( data));

    }

    leerData()
    {

        const archivo ='./repositorio/data.txt';
        if(Files.existsSync(archivo))
        {
            let data = JSON.parse(Files.readFileSync(archivo,{encoding:'utf-8'}));
            
            return data           

        }

        

    }

}