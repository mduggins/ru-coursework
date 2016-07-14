angular.module('CakeApp')
    .controller('MenuController', MenuController)
    .controller('MenuOrderController', ['CheeseCakeFactory',MenuOrderController])
        
    MenuController.$inject = ['CheeseCakeFactory']
        
    function MenuController(CheeseCakeFactory){
        var menuCtrl = this;
        console.info('MenuController:CheeseCakeFactory', CheeseCakeFactory)
        
        menuCtrl.items = CheeseCakeFactory.menuItems;
        menuCtrl.search = ''
        
    }
    
    function MenuOrderController(CheeseCakeFactory){
        var menuOrderCtrl = this;
        console.info('MenuOrderController:CheeseCakeFactory', CheeseCakeFactory)
    }