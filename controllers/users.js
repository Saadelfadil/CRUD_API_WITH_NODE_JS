import { v4 as uuidv4 } from 'uuid';

let users = [];

export const getUsers = (req, res) => {
    res.send(users);
};

export const createUser = (req, res) => {
    const newUser = req.body;
    users.push({ ...newUser, id: uuidv4() });
    res.send(`Hey welcome ${req.body.firstname} you are now in DATABASE.`);
};

export const getUser = (req, res) => {
    const foundUser = users.find((user) => user.id === req.params.id);
    res.send(foundUser);
};

export const deleteUser = (req, res) => {
    users = users.filter((user) => user.id != req.params.id);
    res.send(`User with the id ${req.params.id} deleted from DATABASE.`);
};

export const updateUser = (req, res) => {
    const usertoUpdate = users.find((user) => user.id == req.params.id);
    const {firstName , lastName, age} = req.body;
    if (firstName) usertoUpdate.firstName = firstName;
    if (lastName) usertoUpdate.lastName = lastName;
    if (age) usertoUpdate.age = age;
    res.send(`User with the id ${req.params.id} has been updated`);
};