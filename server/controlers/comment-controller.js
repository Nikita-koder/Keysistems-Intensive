const Comment = require("../models/comment-model.js");

// Создаём и сохраняем новые посты
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Не может быть пустым!"
    });
  }

  // Создание поста 
  const comment = new Comment({
    postId : req.body.postId,
    text : req.body.text,
    author : req.body.author
  });

  // Сохраняем Посты в БД
  Comment.create(comment, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Произошла ошибка при создании постов."
      });
    else res.send(data);
  });
};

// Получаем все Комментарии из БД.
exports.findAll = (req, res) => {
  const text = req.query.text;

  Comment.getAll(text, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Произошла ошибка при получении Постов."
      });
    else res.send(data);
  });
};
