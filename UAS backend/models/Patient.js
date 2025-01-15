// Import koneksi database
const db = require("../config/database");

// Membuat class Patient
class Patient {
  // Mengambil semua data pasien
  static async getAll() {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM patients";
      db.query(query, (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  }

  // Menambahkan data pasien baru
  static async create(data) {
    return new Promise((resolve, reject) => {
      const query =
        "INSERT INTO patients (name, phone, address, status, in_date_at, out_date_at) VALUES (?, ?, ?, ?, ?, ?)";
      const {name, phone, address, status, in_date_at, out_date_at} =
        data;
      db.query(
        query,
        [name, phone, address, status, in_date_at, out_date_at],
        (err, result) => {
          if (err) reject(err);
          resolve(result);
        }
      );
    });
  }

  // Memperbarui data pasien berdasarkan ID
  static async updateById(id, data) {
    return new Promise((resolve, reject) => {
      const query =
        "UPDATE patients SET name = ?, phone = ?, address = ?, status = ?, in_date_at = ?, out_date_at = ? WHERE id = ?";
      const {name, phone, address, status, in_date_at, out_date_at} =
        data;
      db.query(
        query,
        [name, phone, address, status, in_date_at, out_date_at, id],
        (err, result) => {
          if (err) reject(err);
          resolve(result);
        }
      );
    });
  }

  // Menghapus data pasien berdasarkan ID
  static async deleteById(id) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM patients WHERE id = ?";
      db.query(query, [id], (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }

  // Mendapatkan data pasien berdasarkan ID
  static async getById(id) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM patients WHERE id = ?";
      db.query(query, [id], (err, results) => {
        if (err) reject(err);
        resolve(results[0]);
      });
    });
  }
}

// Export class Patient
module.exports = Patient;
