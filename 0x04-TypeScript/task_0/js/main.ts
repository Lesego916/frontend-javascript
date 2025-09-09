// Interface for a student
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = { firstName: 'Alice', lastName: 'Nguyen', age: 21, location: 'Cape Town' };
const student2: Student = { firstName: 'Bongani', lastName: 'Dlamini', age: 23, location: 'Johannesburg' };

// Array of students
const studentsList: Student[] = [student1, student2];

// Render a table with firstName and location (Vanilla JS)
const table: HTMLTableElement = document.createElement('table');
const thead: HTMLTableSectionElement = document.createElement('thead');
const headerRow: HTMLTableRowElement = document.createElement('tr');

['First name', 'Location'].forEach((label: string) => {
  const th: HTMLTableCellElement = document.createElement('th');
  th.textContent = label;
  headerRow.appendChild(th);
});
thead.appendChild(headerRow);
table.appendChild(thead);

const tbody: HTMLTableSectionElement = document.createElement('tbody');

studentsList.forEach((student: Student) => {
  const row: HTMLTableRowElement = document.createElement('tr');

  const firstNameCell: HTMLTableCellElement = document.createElement('td');
  firstNameCell.textContent = student.firstName;

  const locationCell: HTMLTableCellElement = document.createElement('td');
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
