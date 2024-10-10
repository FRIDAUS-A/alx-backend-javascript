namespace Subjects {
	export interface Teacher {
		experienceTeachingC?: number;
	}

	export class Cpp extends Subject {

		constructor(teacher: Teacher){
			super(teacher);
		}
		getRequirements(): string {
			return 'Here is the list of requirements for Cpp';
		}

		getAvailableTeacher() {
			if (!this.teacher.experienceTeachingC && this.teacher.experienceTeachingJava > 0) {
				return 'No available teacher';
			}
			return `Available Teacher: ${this.teacher.firstName}`;
		}
	}
}