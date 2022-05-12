const Post = require("../models/post-model.js");

// Создаём и сохраняем новые посты
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Не может быть пустым!"
    });
  }

  // Создание поста 
  const post = new Post({
    label : req.body.label,
    imgSrc : req.body.imgSrc,
    likes : req.body.likes,
    commentsCounter : req.body.commentsCounter,

    /*title: req.body.title,
    description: req.body.description,
    like: req.body.like || false*/
  });

  // Сохраняем Посты в БД
  Post.create(post, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Произошла ошибка при создании постов."
      });
    else res.send(data);
  });
};

// Получаем все Посты из БД.
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

// Ищем Пост по ID
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

// Ищем все опубликованные посты
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

// Обновляем посты
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

// Удаляем посты
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

// Удаляем все посты
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