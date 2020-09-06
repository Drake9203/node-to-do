const opcion_crear = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'descripcion de la tarea a realizar'
    }
}

const opcion_actualizar = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'descripcion de la tarea a realizar'
    },
    completado: {
        default: true,
        alias: 'c',
        desc: 'marcar la tarea como completado o como pendiente'
    }
}

const opcion_borrar = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'eliminar tarea'
    }
}

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', opcion_crear)
    .command('actualizar', 'Actualiza el estado de una tarea a completado', opcion_actualizar)
    .command('delete', 'Eliminar tarea', opcion_borrar)
    .help()
    .argv;

module.exports = {
    argv
}