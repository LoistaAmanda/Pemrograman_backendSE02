// TODO 3: Import data students dari folder data/students.js
const students = require("./data/students");

// Membuat Class StudentController
class StudentController {
  index(req, res) {
    // TODO 4: Tampilkan data students
    res.json(students);
  }

  store(req, res) {
    // TODO 5: Tambahkan data students
    const newStudent = {
      id: students.length + 1, // Menghasilkan ID baru
      name: req.body.name,
      age: req.body.age,
      major: req.body.major,
    };
    students.push(newStudent);
    res.status(201).json(newStudent);
  }

  update(req, res) {
    // TODO 6: Update data students
    const { id } = req.params;
    const student = students.find((s) => s.id === parseInt(id));
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    student.name = req.body.name || student.name;
    student.age = req.body.age || student.age;
    student.major = req.body.major || student.major;
    res.json(student);
  }

  destroy(req, res) {
    // TODO 7: Hapus data students
    const { id } = req.params;
    const index = students.findIndex((s) => s.id === parseInt(id));
    if (index === -1) {
      return res.status(404).json({ message: "Student not found" });
    }
    students.splice(index, 1);
    res.status(204).send();
  }
}

// Membuat object StudentController
const object = new StudentController();


// Export object StudentController
module.exports = object;
