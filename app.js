const argv = require('./config/yargs').argv;
const toDo = require('./por-hacer/por-hacer');
const colors = require('colors')

console.log(argv);

let comando = argv._[0];

switch (comando) {

    case 'crear':
        let task = toDo.create(argv.descripcion);
        console.log(task);
        break;

    case 'listar':

        let list = toDo.getListado();
        for (let task of list) {
            console.log('========== Por Hacer ========'.green);
            console.log(task.description);
            console.log('Estado ', task.complete);
            console.log('=============================='.green);
        }
        break;

    case 'actualizar':

        let updateTask = toDo.updateTask(argv.descripcion, argv.complete);
        console.log(updateTask);

        break;

    case 'delete':

        let deleteTask = toDo.deleteTask(argv.descripcion);
        console.log(deleteTask);

        break;

    default:
        console.log('Comando no es reconocido');
}