/// <reference path="subjects/Teacher.ts" />
/// <reference path="subjects/Subject.ts" />
/// <reference path="subjects/Cpp.ts" />
/// <reference path="subjects/Java.ts" />
/// <reference path="subjects/React.ts" />

export const cpp = new Subjects.Cpp(null)
export const java = new Subjects.Java(null)
export const react = new Subjects.React(null)
const cTeacher: Subjects.Teacher = {firstName: 'bolu', lastName: 'seidu', experienceTeachingC: 10}
cpp.setTeacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());
