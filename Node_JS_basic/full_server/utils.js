const fs = require('fs');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) { reject(err); return; }
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
      resolve(fields);
    });
  });
}

module.exports = readDatabase;
