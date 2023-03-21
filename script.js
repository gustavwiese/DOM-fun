"use strict";

const harry = {
  firstName: "Harry",
  lastName: "Potter",
};

const ron = {
  firstName: "Ron",
  lastName: "Weasly",
};

const hermione = {
  firstName: "Hermione",
  lastName: "Granger",
};

const tobias = {
  firstName: "Tobias",
  middleName: '"Fantastic Kisser"',
  lastName: "Rasmussen",
};

function showStudent(student) {
  document.querySelector("#firstName").textContent = student.firstName;
  document.querySelector("#middleName").textContent = student.middleName;
  document.querySelector("#lastName").textContent = student.lastName;
}

harry.middleName = "James";
ron.middleName = "Biluius";
hermione.middleName = "Jean";

function addStudent(student) {
  const liste = document.createElement("li");
  liste.textContent = student.firstName + " " + student.middleName + " " + student.lastName;

  document.querySelector("#students").appendChild(liste);
}
