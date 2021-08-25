import { exportNamespaceSpecifier } from "@babel/types";
import heroes from "../data/heroes";

//map
// calback = funcion ejecutandose dentro de otra funcion
//const nuevo = heroes.map((item) => {
//    return {...item, version : 1};    
//});

//filter
//const nuevo = heroes.filter((item) => {
//    return item.owner === "DC";      
//});

//find
const nuevo = heroes.find((item) => {
    return item.owner === "Marvel";   
});

console.log({heroes});
console.log({nuevo});