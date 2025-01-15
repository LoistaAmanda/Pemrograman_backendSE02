// controllers/PatientController.js
const Patient = require("../models/Patient");

class PatientController {
  // Mengambil semua data pasien
  static async getAllPatients(req, res) {
    try {
      const patients = await Patient.getAll();
      res.json(patients);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  // Menambahkan data pasien baru
  static async createPatient(req, res) {
    try {
      const newPatient = req.body;
      const createdPatient = await Patient.create(newPatient);
      res.status(201).json({ message: "Patient added", data: createdPatient });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  // Mengupdate data pasien berdasarkan ID
  static async updatePatient(req, res) {
    const id = req.params.id;
    const data = req.body;
    try {
      const updatedPatient = await Patient.updateById(id, data);
      if (updatedPatient.affectedRows > 0) {
        res.json({ message: "Patient updated" });
      } else {
        res.status(404).json({ message: "Patient not found" });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  // Menghapus data pasien berdasarkan ID
  static async deletePatient(req, res) {
    const id = req.params.id;
    try {
      const result = await Patient.deleteById(id);
      if (result.affectedRows > 0) {
        res.json({ message: "Patient deleted" });
      } else {
        res.status(404).json({ message: "Patient not found" });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  // Mendapatkan pasien berdasarkan ID
  static async getPatientById(req, res) {
    const id = req.params.id;
    try {
      const patient = await Patient.getById(id);
      if (patient) {
        res.json(patient);
      } else {
        res.status(404).json({ message: "Patient not found" });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = PatientController;
