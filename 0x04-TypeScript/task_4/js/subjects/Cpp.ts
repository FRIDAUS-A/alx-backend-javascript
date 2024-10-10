namespace Subjects {
	export interface Teacher {
		experienceTeachingC?: number;
	}

	export class Cpp extends Subject {

		constructor(teacher: Teacher | null){
			super(teacher);
		}
		getRequirements(): string {
			return 'Here is the list of requirements for Cpp';
		}

		getAvailableTeacher() {
			if (!this.teacher && this.teacher.experienceTeachingC > 0) {
				return 'No available teacher';
			}
			return `Available Teacher: ${this.teacher.firstName}`;
		}
	}
}