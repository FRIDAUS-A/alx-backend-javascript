export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
    if (!Array.isArray(students) || !students.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = students;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be string');
    }
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be number');
    }
    this._length = length;
  }

  get length() {
    return this._length;
  }

  set students(students) {
    if (!Array.isArray(students) || !students.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = students;
  }

  get students() {
    return this._students;
  }
}
