'use strict'

/*Dada una cadena de texto (string) separe y muestre en consola los caracteres de forma desordenada uno por línea, 1 caracter a la vez.*/

let testWord = "esternocleidomastoideo";

function wordCutter(word) {
   const newWordArray = word.split("")
   const desordenadoArray = newWordArray.sort()
   console.log("Ejercicio 1")
   desordenadoArray.forEach(letra => {
       console.log(letra)
   })
   
}
wordCutter(testWord);
wordCutter("Profe");

/*Dado un string buscar en un listado e indicar si se encuentra o no
ahí contenido, debe soportar mayúsculas y minúsculas sin importar
la variación, es lo mismo Carro, CARRO o carro.*/

let testTargetWordA = "Sabrosura";
let testTargetWordB = "Sazón";
let testTargetWordC = "Tempurado";
let testWordsList = [
    "Sabr0sura",
    "Gozadera",
    "ritmo",
    "TEMPURADO",
    "SAZON",
    "Chevere",
    "Meneo",
];

// pruebe para cada palabra A, B y C
function wordSearcherIgnoreCase(targetWord, wordsList) {
    const newWordlist = wordsList.map(word => word.toUpperCase())
   if (newWordlist.includes(targetWord.toUpperCase())){
       console.log("La palabra " + targetWord + " SI está incluída")
   }
   else{
        console.log("La palabra " + targetWord + " NO está incluída")
   }
}

console.log("Ejercicio 2")
wordSearcherIgnoreCase(testTargetWordA, testWordsList);
wordSearcherIgnoreCase(testTargetWordB, testWordsList);
wordSearcherIgnoreCase(testTargetWordC, testWordsList);




/*Dado un arreglo de strings, retornar la palabra más larga,
la más corta y el tamaño promedio, el arreglo debe ser
entregado por parámetro y puede variar en cantidad de palabras
del arreglo de entrada libremente, debe retornar un objeto
con los valores mencionados*/

let testSampleList = [
    "Capitan",
    "Comandante",
    "Teniente",
    "Cabo",
    "Brigadier",
    "Coronel",
    "Zar",
];

function wordLengthClassifier(wordsList) {
    const ordenadoArray = wordsList.sort(function(a, b) {return b.length - a.length});
    const tamañoArray = ordenadoArray.length
    let sumatoriaPalabras = 0
    wordsList.forEach(word => {
        sumatoriaPalabras += word.length
        
    })
    return {palabraLarga: ordenadoArray[0], palabraCorta: ordenadoArray[tamañoArray-1], promedio: sumatoriaPalabras/tamañoArray}
}
console.log("Ejercicio 3");
console.log(wordLengthClassifier(testSampleList));

/*Dado un string retorna si este es o no un palíndromo. No debe diferenciar entre mayúsculas y minúsculas*/

let onVerificationWordA = "reconocer";
let onVerificationWordB = "querer";
let onVerificationWordC = "Gomosos";
let onVerificationWordD = "Somos"; 

function palindromeVerifier(word) {
   const palabraDerecho = word.toLowerCase()
   const palabraReves = word.toLowerCase().split("").reverse().join("")
   
   if (palabraDerecho === palabraReves) {
       console.log("La palabra " + word + " SI es palíndromo")
   }
   else {
    console.log("La palabra " + word + " NO es palíndromo")
   }
}

console.log("Ejercicio 4")
palindromeVerifier(onVerificationWordA);
palindromeVerifier(onVerificationWordB);
palindromeVerifier(onVerificationWordC);
palindromeVerifier(onVerificationWordD);


/*Dado un objeto que contiene una lista de palabras contar el
número de letras vocales y consonantes y retornarlo en un arreglo de 2 posiciones.*/
let containerTestObject = {
    list:["Cumbamba", "Oreja", "Nariz", "Ojo", "Lengua", "Diente"]
}
function lettersCounter(objectContainer) {
   let vocales = 0
   let consonantes = 0
   objectContainer.list.forEach(word => {
       word.toLowerCase().split("").forEach(letra => {
           if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
               vocales += 1
           }
           else{
               consonantes += 1
           }
       })
   })
   return [vocales,consonantes]
}

console.log("Ejercicio 5");
console.log(lettersCounter(containerTestObject));


/*Dado 2 arreglos de strings retornar un arreglo con todos los strings.*/
let wordArrayA = ["hola", "¿" ,"cómo", "estás", "?"];
let wordArrayB = ["te", "ves" ,"igual", "te", "ves", "igual"];

function arrayJoiner(listA, listB) {
 let juntarArreglos = listA.concat(listB);
 return juntarArreglos
}

console.log("Ejercicio 6");
console.log(arrayJoiner(wordArrayA,wordArrayB));


/*Dado un arreglo de strings indicar qué posiciones del arreglo
son anagramas de una palabra base (recibida como parámetro), retorne las posiciones en un arreglo.*/

let testWordToExplore = "amar";
let wordsToVerify = ["amar", "arma", "rana" , "mara", "rama", "roma", "amor", "ramon", "omar"];

function anagramVerifier(wordToExplore, listOfWords) {
   let posicionesAnagrama = []
   listOfWords.forEach((word,num) => {
       const palabraArrayOrdenada = word.split("").sort().join("")
       const palabraMetodoOrdenada = wordToExplore.split("").sort().join("")
       if (palabraArrayOrdenada === palabraMetodoOrdenada) {
           posicionesAnagrama.push(num)
       }
   })
   return posicionesAnagrama
}

console.log("Ejercicio 7");
console.log(anagramVerifier(testWordToExplore, wordsToVerify));

/*Dado un objeto que contiene 2 arreglos, retornar un objeto con 1
arreglo que contiene las palabras sin vocales.*/

let testObjMultiContainer = {
    listA : ["piraña", "cachama", "tilapia", "trucha", "carpa", "salmón"],
    listB : ["rinoceronte", "elefante", "jirafa", "tigre", "gacela", "ñú"],
};


function vocalsRemoverFromObject(objectMultiContainer) {
    let ArrayCombinao = objectMultiContainer.listA.concat(objectMultiContainer.listB)
    console.log(ArrayCombinao)
    let arregloCorregido = ArrayCombinao.map(word => word.normalize('NFD').replace(/[\u0300-\u036f]/g,""))
    console.log(arregloCorregido)
}

vocalsRemoverFromObject(testObjMultiContainer);
//console.log(vocalsRemoverFromObject(testObjMultiContainer));

/*Dado un arreglo de palabras reemplazar la última vocal por una x y retornar dicho arreglo.*/

let someWordsToTest = ["compañeros", "estudiantes", "señores", "amigos", "graduandos", "artistas", "universitarios"];

function lastVocalReplacer(words) {
    // :)
}


/*Dada una lista de palabras verificar si alguna de las palabras es la
versión al revés de alguna de las palabras de una segunda lista,
debe contar las identificadas y retornar un objeto con ese conteo.*/


let testListA = ["amor", "sabor", "calor","firma", "mara"];
let testListB = ["roma", "robar", "portar", "arma", "mora"];

function doubleListVerifier(listA, listB) {
    // :)
}