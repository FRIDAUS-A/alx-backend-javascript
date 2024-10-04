export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    if (!Array.isArray(students) || !students.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }
  /**
   * @param {String} name
   */
  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be string');
    }
    this._name = name;
  }

  get name() {
    return this._name;
  }

  /**
   * @param {Number} length
   */
  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be number');
    }
    this._length = length;
  }

  get length() {
    return this._length;
  }

  /**
   * @param {Array[String]} students
   */
  set students(students) {
    if (!Array.isArray(students) || !students.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = students;
  }
}
