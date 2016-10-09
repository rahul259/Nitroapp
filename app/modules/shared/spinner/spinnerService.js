var spinnerModule = angular.module('spinnerMoule',[])
.factory('spinner', function(){
   var spinner = $('.mask');
   function showSpinner(){
       spinner.height($(document).height())
       spinner.show();
   };
    
    function hideSpinner(){
        spinner.hide();
    }
    
    return {
        showSpinner:showSpinner,
        hideSpinner:hideSpinner
    }
})