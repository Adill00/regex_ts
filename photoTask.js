
const text = "The rain in Spain stays mainly in the plain. In Spain, in April, the rain is a pain.";


//TASK 1 
const spaniya = text.match(/Spain/g);
console.log(spaniya);


//TASK 2
const raining = text.matchAll(/rain/g);

for (findedWords of raining){
    console.log(findedWords);
}


//TASK 3
const replacio = text.replace(/Spain/ , 'France');
console.log(replacio);


//TASK 4
const replacciTout = text.replaceAll(/rain/g , 'sun');
console.log(replacciTout);


//TASK 5
const searchedWord = text.search(/plain/);
console.log(searchedWord);

