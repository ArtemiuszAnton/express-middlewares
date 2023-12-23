function isValidUser(req, res, next) {
    if (!req.body.hasOwnProperty('name')) throw new Error('name отсутствует');
    if (!req.body.hasOwnProperty('surname')) throw new Error('surname отсутствует');
    if (!req.body.hasOwnProperty('email')) throw new Error('email отсутствует');
    if (!req.body.hasOwnProperty('pwd')) throw new Error('pwd отсутствует');

    const { name, surname, email, pwd } = req.body;

    if (!name) throw new Error('name is empty');
    if (!surname) throw new Error('surname');
    if (!email) throw new Error('email is empty');
    if (!pwd) throw new Error('pwd is empty');
    if (!isNaN(name)) throw new Error('type name not valid (number)');
    if (!isNaN(surname)) throw new Error('type surname not valid (number)');
    if (!/^[\w]+@[a-z]+\.[a-z]{2,5}$/gm.test(email)) throw new Error('email is not valid');
    if (pwd.length < 8) throw new Error('not valid pwd');

    next()
}

function isValidUserId(req, res, next) {
    if (!req.params.hasOwnProperty('id')) throw new Error('отсутствует id');
    const { id } = req.params;
    if (id < 0) throw new Error('id отрицательный');
    if (typeof (id) != 'number' && typeof (id) != 'string') throw new Error('type id not correct');
    if (isNaN(id)) throw new Error('id not number')
    next()
}

module.exports = { isValidUser, isValidUserId }