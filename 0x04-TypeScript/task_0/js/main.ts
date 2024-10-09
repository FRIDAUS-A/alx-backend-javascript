interface Student {
	firstName: string,
	lastName: string,
	age: number,
	location: string,
}
const firstStudent: Student = {
	firstName: 'fridaus',
	lastName: 'okoya',
	age: 21,
	location: 'lagos'
}

const secondStudent: Student = {
	firstName: 'bolu',
	lastName: 'seidu',
	age: 22,
	location: 'ikorodu'
}

const studentsList: Student[] = [firstStudent, secondStudent];

const table = document.createElement('table')
document.body.appendChild(table) // Drew the main table node on the document

let thead = table.createTHead();
let headerRow = thead.insertRow();
const headers = ['First Name', 'Last Name', 'Age', 'Location'];
headers.forEach(header => {
    let th = document.createElement('th');
    th.innerText = header;
    headerRow.appendChild(th);
});

studentsList.forEach((student) => {
    let tr = table.insertRow();
    let values = Object.values(student);
    values.forEach((value) => {
        let td = tr.insertCell();
        td.innerText = value.toString();
    });
});