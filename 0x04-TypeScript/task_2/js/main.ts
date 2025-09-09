// Interfaces
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Classes
class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }
  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }
  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }
  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// Factory
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// Type predicate
function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// Execute work
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  return (employee as Teacher).workTeacherTasks();
}

// String literal type + function
type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
  return todayClass === 'Math' ? 'Teaching Math' : 'Teaching History';
}

// (Optional) quick sanity checks in console
// console.log(createEmployee(200) instanceof Teacher);
// console.log(createEmployee(1000) instanceof Director);
// console.log(executeWork(createEmployee(200)));    // Getting to work
// console.log(executeWork(createEmployee(1000)));   // Getting to director tasks
// console.log(teachClass('Math'));                  // Teaching Math
// console.log(teachClass('History'));               // Teaching History
