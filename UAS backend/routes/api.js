// import PatientController
const PatientController = require("../controllers/PatientController");
// import express
const express = require("express");

// membuat object router
const router = express.Router();

/**
 * Membuat routing
 */
router.get("/welcome", (req, res) => {
  res.send("Hello Covid API Express");
});

// Membuat routing patients
router.get("/patients", PatientController.getAllPatients); 
router.post("/patients", PatientController.createPatient); 
router.put("/patients/:id", PatientController.updatePatient); 
router.delete("/patients/:id", PatientController.deletePatient); 
router.get("/patients/:id", PatientController.getPatientById); 
router.get("/patients/search/:name", PatientController.searchPatientByName); 
router.get("/patients/status/positive", PatientController.getPositivePatients); 
router.get("/patients/status/recovered", PatientController.getRecoveredPatients); 
router.get("/patients/status/dead", PatientController.getDeadPatients); 

// export router
module.exports = router;
