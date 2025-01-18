// import PatientController
const PatientController = require("../controllers/PatientController");
// import express
const express = require("express");

// membuat object router
const router = express.Router();

router.get("/welcome", (req, res) => {
  res.send("Hello Covid API Express");
});

// Membuat routing patients
router.get("/patients", PatientController.getAllPatients); 
router.post("/patients", PatientController.createPatient); 
router.put("/patients/:id", PatientController.updatePatient); 
router.delete("/patients/:id", PatientController.deletePatient); 
router.get("/patients/:id", PatientController.getPatientById); 

// export router
module.exports = router;
