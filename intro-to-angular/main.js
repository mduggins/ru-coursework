angular.module('AngTest', [])

angular.module('AngTest')
    .controller('button', [buttonCtrl])
    
    function buttonCtrl(){
        var bCtrl = this
        bCtrl.showMsg = function(){
            console.log("The button worked!")
        }
    }
    
angular.module('AngTest')
    .controller('showText', [showTextCtrl])
    
    function showTextCtrl(){
        var stCtrl = this;
        stCtrl.text = 'Hi';
    }