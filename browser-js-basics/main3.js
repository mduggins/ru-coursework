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
