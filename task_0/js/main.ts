// Define Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "London",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Paris",
};

// Array of students
const studentsList: Student[] = [student1, student2];

// Render table in Vanilla JS
const table = document.createElement("table");
const tbody = document.createElement("tbody");

studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  row.appendChild(firstNameCell);

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;
  row.appendChild(locationCell);

  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
