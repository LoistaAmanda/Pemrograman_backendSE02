// TODO 3: Import data students dari folder data/students.js
const students = require("../data/students");

// Membuat Class StudentController
class StudentController {
  index(req, res) {
    res.send("Menampilkan semua data students");
  }

  store(req, res) {
    res.send("Menambahkan data student");
  }

  update(req, res) {
    const {id} = req.params;
    res.send(`Mengedit student id ${id}`);
  }

  destroy(req, res) {
    const {id} = req.params;
    res.send(`Menghapus student id ${id}`); 
  }
}

// Membuat object StudentController
const studentController = new StudentController();

// Export object StudentController
module.exports = studentController;
