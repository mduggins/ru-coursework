var victims = prompt("How many disater victims do you need to enter?")
var victim = []

for(var i = 0; i < victims; i++){
    var name = prompt("Enter persons name")
    var tel = prompt("Enter persons phone number")
    var street = prompt("Enter persons street address")
    victim.push([name, tel, street])
}

console.log(victim)

