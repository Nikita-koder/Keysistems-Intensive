const { comment } = require('../routes/comment-routes');
const sql = require("./db.js");

//constructor
const Comment = function (comment) {
    this.postId = comment.postId;
    this.text = comment.text;
    this.author = comment.author;
};

Comment.create = (newComment, result) => {
    sql.query("INSERT INTO comment SET ?", newComment, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created comment: ", { id: res.insertId, ...newComment });
      result(null, { id: res.insertId, ...newComment });
    });
  };

  Comment.findById = (id, result) => {
    sql.query(`SELECT * FROM comment WHERE postId = ${id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found post: ", res[0]);
        result(null, res[0]);
        return;
      }
  
      result({ kind: "not_found" }, null);
    });
  };

  Comment.getAll = (text, result) => {
    let query = "SELECT * FROM comment";
  
    if (text) {
      query += ` WHERE text LIKE '%${text}%'`;
    }
  
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("comment: ", res);
      result(null, res);
    });
  };

  module.exports = Comment;