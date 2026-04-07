const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const students = lines.slice(1);
    console.log(`Number of students: ${students.length}`);

    const fields = {};
    students.forEach((student) => {
      const parts = student.split(',');
      const field = parts[3];
      const firstName = parts[0];
      if (!fields[field]) fields[field] = [];
      fields[field].push(firstName);
    });

    Object.keys(fields).forEach((field) => {
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
    });
  } catch (e) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
