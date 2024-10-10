"use strict";
/// <reference path="subjects/Teacher.ts" />
/// <reference path="subjects/Subject.ts" />
/// <reference path="subjects/Cpp.ts" />
/// <reference path="subjects/Java.ts" />
/// <reference path="subjects/React.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
exports.react = exports.java = exports.cpp = void 0;
exports.cpp = new Subjects.Cpp(null);
exports.java = new Subjects.Java(null);
exports.react = new Subjects.React(null);
var cTeacher = { firstName: 'bolu', lastName: 'seidu', experienceTeachingC: 10 };
exports.cpp.setTeacher = cTeacher;
console.log(exports.cpp.getRequirements());
console.log(exports.cpp.getAvailableTeacher());
