const comment = require("../controlers/comment-controller.js");
  
var router = require("express").Router();

// Создаём новый комментарий
router.post("/", comment.create);
// получаем все комментарии поста
router.get("/", comment.findAll);

module.exports = router;