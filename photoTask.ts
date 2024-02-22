//added type annotation

const textt: string = 'the rain in Spain stays mainly in the plain. In Spain, in April, the rain is a pain.So,I love Spain . Hola~' ;

//add type annotation to regex

const regex: RegExp = /Spain/g

//union used,so it either can be match or null(in case not matched)
const ispaniya: RegExpMatchArray | null = textt.match(regex);
//regmatch represents result of matching string against regex

console.log(ispaniya);


//Task2

//added type annotation to regex
const regex2 : RegExp = /rain/g;

const rainingg: IterableIterator<RegExpMatchArray> | null = textt.matchAll(regex);
//iterble (used cuz of matchAll): indicates raining is iterable iterator. Allows to go through elements of sequence 1by1 
// <>: built-in type for result of match 


for (let findedWords of rainingg){
    console.log(findedWords);
}


//Task3

const replacement: string = 'France';
//as we cannot give another regex /France/ as 2nd argument of replace, we create it as string

const replacioo : string = textt.replace(regex , replacement) ;  

console.log(replacioo);


//Task4

const replacciTous:string = textt.replaceAll('rain','sun');

console.log(replacciTous);

//Task5
const searchedWordd : number = textt.search(/plain/);
console.log(searchedWordd);