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


class Director implements DirectorInterface {
	constructor(){}
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
	constructor(){}

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


function createEmployee(salary: number | string): Teacher | Director {
	if (Number(salary) < 500 ) {
		return new Teacher();
	} else {
		return new Director();
	}
}

function isDirector(employee: Teacher | Director): boolean {
	return employee instanceof Director;
}

type Employee = Director | Teacher;
function executeWork(employee: Employee) {
	if (isDirector(employee)) {
		console.log((employee as Director).workDirectorTasks())
	} else {
		console.log((employee as Teacher).workTeacherTasks())
	}
}

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects) {
	if (todayClass === 'Math') {
		console.log('Teaching Math')
	} else if (todayClass === 'History') {
		console.log('Teaching History')
	}
}
console.log(createEmployee(200));
executeWork(createEmployee(200));
executeWork(createEmployee(1000));
teachClass('Math');
teachClass('History');