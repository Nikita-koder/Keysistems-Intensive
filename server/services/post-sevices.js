import http from "/Програмирование/Интенсив от Кейсиситемс/React Prj/my-app/src/http-common";
class TutorialDataService {
  getAll() {
    return http.get("/posts");
  }
  get(id) {
    return http.get(`/posts/${id}`);
  }
  create(data) {
    return http.post("/posts", data);
  }
  update(id, data) {
    return http.put(`/posts/${id}`, data);
  }
  delete(id) {
    return http.delete(`/posts/${id}`);
  }
  deleteAll() {
    return http.delete(`/posts`);
  }
  findByTitle(label) {
    return http.get(`/posts?title=${label}`);
  }
}
export default new TutorialDataService();