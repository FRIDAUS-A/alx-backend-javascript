export interface Teacher {
	readonly firstName: string,
	readonly lastName: string,
	fullTimeEmployee: boolean,
	yearsOfExperience?: number,
	location: string,
	[propName: string]:any
}

const teacher3: Teacher = {
	firstName: 'John',
	fullTimeEmployee: false,
	lastName: 'Doe',
	location: 'London',
	contract: false,
  };
  
  console.log(teacher3);
  interface Directors extends Teacher {
	numberOfReports: number,
}

const director1: Directors = {
	firstName: 'John',
	lastName: 'Doe',
	location: 'London',
	fullTimeEmployee: true,
	numberOfReports: 17,
  };
  console.log(director1);

  interface printTeacherFunction {
	(firstName: string, lastName: string): string,
  }

  export const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
	return `${firstName[0]}. ${lastName[0]}`
  }

// class interface
interface StudentClassInterface {
	firstName: string;
	lastName: string;

	workOnHome(): string;
	displayName(): string;
}

// student constructor interface
interface StudentConstructorInterface {
	new (firstName: string, lastName: string): string;
}



class StudentClass {
	firstName: string
	lastName: string
	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	workOnHomework(): string {
		return 'Currently working';
	}

	displayName(): string {
		return `${this.firstName}`;
	}
}