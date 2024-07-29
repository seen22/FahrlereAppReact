const express = require('express');
const router = express.Router();
const fs = require('fs');

// Route zum Speichern der Schülerdaten
router.post('/saveStudentData', (req, res) => {
  const studentData = req.body;
  fs.writeFile('student_data.json', JSON.stringify(studentData, null, 2), (err) => {
    if (err) {
      res.status(500).send('Error saving data');
    } else {
      res.send('Data saved successfully');
    }
  });
});

module.exports = router;
