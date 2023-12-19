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

module.exports = { getAllUser, getUserById, createNewUser }