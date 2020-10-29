const db = require("../models");

const getAllTodos = (req, res) => {
  console.log(req.user);
  res.status(200).send("success");
};

const getTodoById = (req, res) => {

};

const createTodo = (req, res) => {

};

const updateTodo = (req, res) => {

};

const deleteTodo = (req, res) => {

};

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo
};