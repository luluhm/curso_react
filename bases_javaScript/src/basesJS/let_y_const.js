var variableVar= "VAR fuera del if";

let variableLet = "LET fuera del if";
const constante = "lourdes";

if(true) {
    const constante = "Hernandez";
    var variableVar = "VAR dentro del if";
    let variableLet = "LET dentro del if";
    console.log(variableLet);
    console.log(constante);
}



console.log(variableVar);
console.log(variableLet);
console.log(constante);