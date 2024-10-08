export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((student) => student.location === city).map((student) => {
    for (const updatedStudent of newGrades) {
      if (updatedStudent.studentId === student.id) {
        student.grade = updatedStudent.grade; // eslint-disable-line no-param-reassign
      }
    }
    student.grade = typeof student.grade === 'undefined' ? 'N/A' : student.grade; // eslint-disable-line no-param-reassign
    return student;
  });
}
