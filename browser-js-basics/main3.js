var words = ["hello", "what", "is", "up", "dude"]
var words2 = []

function lengths(words){
    for(i = 0; i < words.length; i++){
        words2.push(words[i].length);
    }
    console.log(words2);
}

lengths(words);

//*************************************************

function transmogrifier(a,b,c){
    var base = a * b;
    console.log(Math.pow(base, c));
}

transmogrifier(5,4,3);
transmogrifier(13,12,5);
transmogrifier(42,13,7);

//*************************************************

var sentence = "Now I know what a TV dinner feels like"

function wordReverse(sentence){
    var ecnetnes = sentence;
    console.log(ecnetnes.split(" ").reverse().join(" "));
}

wordReverse(sentence);

//***************************************************

function tripleFive(){
    for(i = 0; i < 3; i++){
        console.log("Five!");
    }
}

tripleFive();

//**************************************************

function lastLetter(word){
    console.log(word.slice(-1))
}

lastLetter("Hello")
lastLetter("island")

//************************************************

function square(num){
    console.log(num * num);
}

square(3)
square(5)

//************************************************

function negate(num){
    console.log(num * -1)
}

negate(5)
negate(-8)

//***********************************************

var arr = []

function toArray(a,b,c){
    for(i = 0; i < arguments.length; i++){
    arr.push(arguments[i]);
    }
    console.log(arr)
}

toArray(1,4,5)
toArray(8,9,10)

//***********************************************

function startsWithA(str){
    if(str.charAt(0) == "a" || str.charAt(0) == "A"){
        console.log("true")
    }else{
        console.log("false")
    }
}

startsWithA("Aardvark")
startsWithA("bear")
