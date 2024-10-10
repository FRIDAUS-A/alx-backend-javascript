namespace Subjects {
	export class Subject {
		teacher: Teacher;
		constructor(teacher: Teacher | null) {
			this.teacher = teacher;
		}
		set setTeacher(teacher: Teacher) {
			this.teacher = teacher;
		}
	}
}