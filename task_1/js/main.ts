// 1) Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any; // allow additional attributes
}

// 2) Directors extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Example object (for your own quick sanity check)
// const teacher3: Teacher = {
//   firstName: 'John',
//   lastName: 'Doe',
//   fullTimeEmployee: false,
//   location: 'London',
//   contract: false,
// };

// 3) printTeacher interface + function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) =>
  `${firstName.charAt(0)}. ${lastName}`;

// 4) StudentClass: constructor + instance interfaces and implementation
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}
