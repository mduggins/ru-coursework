// Create a module
angular.module('PokeApp', [])

// Create a controller
angular.module('PokeApp')
    .controller('PallettTown', [pallettCtrl])
    
    function pallettCtrl(){
        var pCtrl = this
        
        pCtrl.welcomeMessage = "Gotta catch them all!"
        
        pCtrl.pokemons = [
            'Charmander',
            'Bulbasaur',
            'Squirtle',
            'Twoscoops',
            'Jigglypuff'
        ]
        
        pCtrl.jigglypuff = {
            squishiness: 7,
            rage: 'irate',
            rockstar: true,
            name: 'jigglypugg'
        }
    }