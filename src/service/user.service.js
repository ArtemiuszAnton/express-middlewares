const fs = require('fs');


function getAllUser() {
    const json = fs.readFileSync('./src/storage.json');
    return JSON.parse(json);
}

function getUserById(id) {
    const json = JSON.parse(fs.readFileSync('./src/storage.json'));
    const filt = json.filter(el => el.id == id)
    return filt
}

function createNewUser(name, surname, email, pwd) {
    const json = JSON.parse(fs.readFileSync('./src/storage.json'));
    const newObj = {
        id: Math.max(...json.map(el => el.id)) + 1,
        name: name,
        surname: surname,
        email: email,
        pwd: pwd
    }

    json.push(newObj);
    fs.writeFileSync('./src/storage.json', JSON.stringify(json))
    return json
}

function updateUser(id, name, surname, email, pwd) {
    const json = fs.readFileSync('./src/storage.json');
    const arr = JSON.parse(json)
    const newObj = {
        id, name, surname, email, pwd
    }

    const index = arr.findIndex(el => el.id == id)
    if (index < 0) throw new Error('user with such id not found');
    arr[index] = newObj
    fs.writeFileSync('./src/storage.json', JSON.stringify(arr))
    return arr
}

function deleteUser(id) {
    const json = fs.readFileSync('./src/storage.json');
    const arr = JSON.parse(json);

    const filt = arr.filter(el => el.id != id);
    if (arr.length == filt.length) throw new Error('this id not found');
    fs.writeFileSync('./src/storage.json', JSON.stringify(filt))
    return filt
}

function changeName(id, body) {
    const json = fs.readFileSync('./src/storage.json');
    const arr = JSON.parse(json);

    const index = arr.findIndex((el) => el.id == id);
    if (index < 0) throw new Error('error')
    const item = arr[index]
    arr[index] = { ...item, ...body }
    fs.writeFileSync('./src/storage.json', JSON.stringify(arr))
    return arr
}

module.exports = { getAllUser, getUserById, createNewUser, updateUser, deleteUser, changeName }