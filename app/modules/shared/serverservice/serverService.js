serverServiceModule.factory('serverService', ['$rootScope','$http',
                                              'localeString',function($rootScope,$http,localeString){
   // var listDealsUrl = 'http://hackerearth.0x10.info/api/nitro_deals?type=json&query=list_deals';
    function fetchDeals(url){
      return $http({
            method:'POST',
            data:'',
            url:localeString.dealsUrl
        });
    };
    
    function fetchApiHits(url){
        return $http({
            method:'POST',
            data:'',
            url:localeString.apiHitsUrl
        });
    }
    
    return {
        fetchDeals:fetchDeals,
        fetchHits:fetchApiHits
    }
    
}]);