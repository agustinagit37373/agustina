const alumnos = ["martin", "carlos", "marta", " luciano", "camila"];
alert(alumnos);

console.log(alumnos);

console.log(alumnos[0]);
console.log(alumnos[4]);

console.log(alumnos.length);

alumnos[0] = "martin";
alumnos[1] = "carlos";
alumnos[2] = "marta";
alumnos[3] = "luciano";
alumnos[4] = "camila";

alumnos.shift();
alumnos.pop();

alumnos.push("maria");

for (let index = 0; index < alumnos.length; index++) {
  const alumno = alumnos[index];
  console.log(alumno);
}

console.log(alumnos.includes("martin"));
console.log(alumnos.indexOf("martin"));
