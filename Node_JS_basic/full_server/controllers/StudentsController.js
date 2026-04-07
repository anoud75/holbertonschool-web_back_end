const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(req, res) {
    const filePath = process.argv[2];
    readDatabase(filePath)
      .then((fields) => {
        let response = 'This is the list of our students\n';
        const sorted = Object.keys(fields).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
        sorted.forEach((field) => {
          response += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
        });
        res.status(200).send(response.trim());
      })
      .catch(() => res.status(500).send('Cannot load the database'));
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    const filePath = process.argv[2];
    readDatabase(filePath)
      .then((fields) => {
        const list = fields[major] || [];
        res.status(200).send(`List: ${list.join(', ')}`);
      })
      .catch(() => res.status(500).send('Cannot load the database'));
  }
}

module.exports = StudentsController;
