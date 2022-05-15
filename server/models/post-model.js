const { posts } = require("../routes/post-routes.js");
const sql = require("./db.js");

//constructor
const Post = function (posts) {
    this.label = posts.label;
    this.imgSrc = posts.imgSrc;
    this.likes = posts.likes;
    this.commentsCounter = posts.commentsCounter
};

Post.create = (newPost, result) => {
  sql.query("INSERT INTO post_info SET ?", newPost, (err, res) => {
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
  sql.query(`SELECT * FROM post_info WHERE postId = ${id}`, (err, res) => {
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

Post.getAll = (label, result) => {
  let query = "SELECT * FROM post_info";

  if (label) {
    query += ` WHERE label LIKE '%${label}%'`;
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
  sql.query("SELECT * FROM post_info WHERE likes=true", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("posts: ", res);
    result(null, res);
  });
};

Post.updateById = (id, posts, result) => {
  sql.query(
    "UPDATE post_info SET likes = ? WHERE postId = ?",
    [posts.likes, id],
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
  sql.query("DELETE FROM post_info WHERE postId = ?", id, (err, res) => {
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
  sql.query("DELETE FROM post_info", (err, res) => {
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