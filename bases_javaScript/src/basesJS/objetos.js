const atributo = "apellido";
const persona = {
    nombre: 'Maria',
    apellido: 'Martinez',
    edad: 50,
    saludar: function () {
        console.log("Hola a todos");
    },
};

console.log(persona[atributo]);
persona.saludar()