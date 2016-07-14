angular.module('CakeApp')
    .factory('CheeseCakeFactory', CheeseCakeFactory)
    
    function CheeseCakeFactory(){
        console.log('Factory loaded!')
        
        var menuItems = [{
            calories: 6000,
            deliciousness: 3,
            price: 50,
            flavor: 'South Western',
            name: 'Egg Roll'
        },
        {
            calories: 1500,
            deliciousness: 9,
            price: 9.95,
            flavor: 'Vanilla Strawberry',
            name: 'Strawberry'
        },
        {
            calories: 1800,
            deliciousness: 10,
            price: 13,
            flavor: 'Chocolate Turtle',
            name: 'Turtle'
        }]
        
        return {
            menuItems: menuItems
            
        }
    }