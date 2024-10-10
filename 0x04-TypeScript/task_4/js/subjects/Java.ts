namespace Subjects {
	export interface Teacher {
		experienceTeachingJava?: number;
	}
	export class Java extends Subject {
		constructor(teacher: Teacher | null){
			super(teacher);
		}
		getRequirements(): string {
			return 'Here is the list of requirements for Java';
		}

		getAvailableTeacher() {
			if (!this.teacher && this.teacher.experienceTeachingJava > 0) {
				return 'No available teacher';
			}
			return `Available Teacher: ${this.teacher.firstName}`;
		}
	}
}