angular.module('Zordon', [])

angular.module('Zordon')
    .controller('alpha', ['$scope', alphaCtrl])
    
    function alphaCtrl($scope){
        console.log('Controller is working!')
        
        $scope.greeting = 'Welcome to the Command Center!'
        
        $scope.subGreeting = 'Power Rangers ONLY!'
        
        $scope.fightPutty = function(){
            $scope.subGreeting = 'Punch Noises! The putty disappears'
        }
    }