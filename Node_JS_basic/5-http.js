const http = require('http');
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

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(database)
      .then((data) => res.end(`This is the list of our students\n${data}`))
      .catch((err) => res.end(`This is the list of our students\n${err.message}`));
  } else {
    res.end('Hello Holberton School!');
  }
});

app.listen(1245);
module.exports = app;
