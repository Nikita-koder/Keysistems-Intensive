const sql = require("./db.js");

//constructor
const Post = function (posts) {
    this.title = posts.title;
    this.description = posts.description;
    this.likes = posts.likes;
};

Post.create = (newPost, result) => {
  sql.query("INSERT INTO posts SET ?", newPost, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created post: ", { id: res.insertId, ...newPost });
    result(null, { id: res.insertId, ...newPost });
  });
};

Post.findById = (id, result) => {
  sql.query(`SELECT * FROM posts WHERE id = ${id}`, (err, res) => {
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

    // not found Tutorial with the id
    result({ kind: "not_found" }, null);
  });
};

Post.getAll = (title, result) => {
  let query = "SELECT * FROM posts";

  if (title) {
    query += ` WHERE title LIKE '%${title}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("posts: ", res);
    result(null, res);
  });
};

Post.getAllPublished = result => {
  sql.query("SELECT * FROM posts WHERE published=true", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("posts: ", res);
    result(null, res);
  });
};

Post.updateById = (id, tutorial, result) => {
  sql.query(
    "UPDATE posts SET title = ?, description = ?, published = ? WHERE id = ?",
    [posts.title, posts.description, posts.published, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Tutorial with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated posts: ", { id: id, ...posts });
      result(null, { id: id, ...posts });
    }
  );
};

Post.remove = (id, result) => {
  sql.query("DELETE FROM posts WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Tutorial with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted posts with id: ", id);
    result(null, res);
  });
};

Post.removeAll = result => {
  sql.query("DELETE FROM posts", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} posts`);
    result(null, res);
  });
};

module.exports = Post;