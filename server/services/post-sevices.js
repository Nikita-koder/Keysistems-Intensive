const express = require('express');
const app = express();
class TutorialDataService {
  getAll() {
    return app.get("/posts");
  }
  get(id) {
    return app.get(`/posts/${id}`);
  }
  create(data) {
    return app.post("/posts", data);
  }
  update(id, data) {
    return app.put(`/posts/${id}`, data);
  }
  delete(id) {
    return app.delete(`/posts/${id}`);
  }
  deleteAll() {
    return app.delete(`/posts`);
  }
  findByTitle(label) {
    return app.get(`/posts?title=${label}`);
  }
}
export default new TutorialDataService();