angular.module('TodoApp', [])

angular.module('TodoApp').controller('todoCtrl', ['todoFactory',todoCtrl])

function todoCtrl(todoFactory){
    var tdCtrl = this;
    
    todoFactory.todoreq().then(function(response){
        console.log(response.data)
        
        tdCtrl.data = response.data
    })
}


angular.module('TodoApp').factory('todoFactory', ['$http', todoFactory])

function todoFactory($http){
    return {
        todoreq: function(){
            return $http.get('https://jsonplaceholder.typicode.com/todos')
        }
    }
}