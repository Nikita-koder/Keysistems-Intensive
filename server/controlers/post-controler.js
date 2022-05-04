const Post = require("../models/post-model.js");

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Не может быть пустым!"
    });
  }

  // Создание поста 
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
    like: req.body.like || false
  });

  // Save Tutorial in the database
  Post.create(post, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Произошла ошибка при создании постов."
      });
    else res.send(data);
  });
};

// Retrieve all Tutorials from the database (with condition).
exports.findAll = (req, res) => {
  const title = req.query.title;

  Post.getAll(title, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Произошла ошибка при получении Постов."
      });
    else res.send(data);
  });
};

// Find a single Tutorial by Id
exports.findOne = (req, res) => {
  Post.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Нельзя найти посты по id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Ошибка при получении поста по ID " + req.params.id
        });
      }
    } else res.send(data);
  });
};

// find all published Tutorials
exports.findAllPublished = (req, res) => {
  Post.getAllPublished((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Произошла ошибка при получении Постов."
      });
    else res.send(data);
  });
};

// Update a Tutorial identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Не может быть пустым!"
    });
  }

  console.log(req.body);

  Post.updateById(
    req.params.id,
    new Post(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Пост не найен id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Ошибка дополнения поста по id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  Post.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Не найден пост id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Нельзя удалить пост по id " + req.params.id
        });
      }
    } else res.send({ message: `Посты успешно удалены!` });
  });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Post.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Произошла ошибка при удалении всех Постов."
      });
    else res.send({ message: `Все посты удалены успешно!` });
  });
};