// TODO 1: Buat data students
const fs = require("fs");
const students = [
  { name: "Alice", age: 20, major: "Computer Science" },
  { name: "Bob", age: 22, major: "Mathematics" },
  { name: "Charlie", age: 21, major: "Physics" },
  { name: "David", age: 23, major: "Chemistry" },
  { name: "Eva", age: 19, major: "Biology" },
];

// TODO 2: export data students
function exportStudentsToCSV(students, filename) {
  const csvHeader = "Name,Age,Major\n";
  const csvRows = students
    .map((student) => `${student.name},${student.age},${student.major}`)
    .join("\n");
  const csvData = csvHeader + csvRows;

  fs.writeFileSync(filename, csvData);
  console.log(`Data students telah diekspor ke '${filename}'`);
}
