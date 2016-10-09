searchModule.directive('searchDir', function($timeout){
    
    return {
        restrict:'E',
        templateUrl:'./modules/shared/searchdirective/searchDir.template.html',
        link: function(scope, elem, attrs){
         var searchText = $('#searchtext');
        $('#searchtext').autocomplete({
            
                source: scope.tagsList,
                select: function() {
                    $timeout(function() {
                      searchText.trigger('input');
                    }, 0);
                }
         
            })
        }
        
    } 
})