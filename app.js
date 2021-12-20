let moduloTareas = require ('./tareas')
let process = require ('process')
let comando = process.argv[2] ? process.argv [2].toLowerCase () : undefined 

switch (comando){
    case "listar" : 
            let tareas = moduloTareas.leerJSON();
            console.log(tareas);
            if (tareas.length=== 0){
                console.log("La lista está vacía");
            }else{
                console.log("----------");
                console.log("Este es tu listado de tareas");
                console.log("------------");
                tareas.forEach(lista => {console.log(lista.titulo + ' ' + lista.estado)});
            }
    break
    case "agregar":
        let titulo = process.argv [3];
        let estado = "pendiente"
        moduloTareas.escribirJSON (titulo , estado);
        break
    case "deshacer":
        moduloTareas.deshacer ();
        break
    case "filtrar" :
        let estado2 = process.argv[3]
        let tareasFiltradas= moduloTareas.filtrar(estado2)
        if (tareasFiltradas.length === 0){
            console.log("La lista está vacía");
        }else{
            console.log("----------");
            console.log("Este es tu listado de tareas");
            console.log("------------");
            tareasFiltradas.forEach(filtradas=>{console.log(filtradas.titulo + ' ' + filtradas.estado2)})
         }
        break
    case undefined :
        console.log("ATENCIÓN, tienes que pasar una acción!");
        break
    default :
    console.log("No entiendo que quieres hacer");

    }
