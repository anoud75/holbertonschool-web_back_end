const express = require('express');
const fs = require('fs');

const database = process.argv[2];

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) { reject(new Error('Cannot load the database')); return; }
      const lines = data.split('\n').filter((l) => l.trim() !== '');
      const students = lines.slice(1);
      const fields = {};
      students.forEach((student) => {
        const parts = student.split(',');
        const field = parts[3];
        const firstName = parts[0];
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstName);
      });
      let result = `Number of students: ${students.length}\n`;
      Object.keys(fields).forEach((field) => {
        result += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
      });
      resolve(result.trim());
    });
  });
}

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(database)
    .then((data) => res.send(`This is the list of our students\n${data}`))
    .catch((err) => res.send(`This is the list of our students\n${err.message}`));
});

app.listen(1245);
module.exports = app;
