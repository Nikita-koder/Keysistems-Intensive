    const posts = require("../controlers/post-controler.js");
  
    var router = require("express").Router();
  
    // Create a new Post
    router.post("/", posts.create);
  
    // Retrieve all Posts
    router.get("/", posts.findAll);
  
    // Retrieve all published Posts
    router.get("/like", posts.findAllPublished);
  
    // Retrieve a single Post with id
    router.get("/:id", posts.findOne);
  
    // Update a Post with id
    router.put("/:id", posts.update);
  
    // Delete a Post with id
    router.delete("/:id", posts.delete);
  
    // Delete all Posts
    router.delete("/", posts.deleteAll);

    module.exports = router;