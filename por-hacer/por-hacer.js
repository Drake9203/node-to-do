const fs = require('fs');

let listToDo = [];

const saveDb = () => {

    let data = JSON.stringify(listToDo);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error('No se pudo grabar', err)
    });
}

const readDB = () => {
    try {
        listToDo = require('../db/data.json');
    } catch {
        listToDo = [];
    }
}

const create = (description) => {
    readDB();
    let toDo = {
        description,
        complete: false
    }

    listToDo.push(toDo);
    saveDb();
    return toDo;
}

const getListado = () => {
    readDB();
    return listToDo;

}

const updateTask = (description, complete = true) => {
    readDB();

    let index = listToDo.findIndex(task => task.description === description);
    if (index >= 0) {
        listToDo[index].complete = complete;
        saveDb();
        return true;
    } else {
        return false;
    }

}

const deleteTask = (description) => {
    console.log(description);
    readDB();
    let index = listToDo.findIndex(task => task.description === description)
    if (index >= 0) {
        listToDo.splice(index, 1);
        saveDb();
        return true;
    } else {
        return false;
    }
}

module.exports = {
    create,
    getListado,
    updateTask,
    deleteTask,
}