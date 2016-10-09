var appModule = angular.module('nitroApp',['serverServiceModule','appLocaleDataModule','dataRepoModule']);
appModule.controller('homeCtrl',['$scope','$rootScope','serverService','dataRepo', function(
                                 $scope,$rootScope,serverService,dataRepo
                                 
                                 ){
                                     
    
                                     
                                     
    function errorInFetchingData(err){
        console.log(err);
    }                               
    function refreshDealData(){
        serverService.fetchDeals().then(function(resp){
         //console.log(resp.);
         dataRepo.dealsData = resp.data.deals;
         console.log(resp.data.deals)
         refreshApiData();
    },errorInFetchingData);
    }
                                     
                                     
    function refreshApiData(){
        serverService.fetchHits().then(function(resp){
            console.log(resp.data.api_hits);
            dataRepo.apiHitsData = resp.data.api_hits;
                    
        },errorInFetchingData)  
        
    }
    function init(){
        if(!dataRepo.dealsData){
           refreshDealData();
            
        }        
    }
    
    init();
                                     
    $scope.deals = dataRepo.dealsData;
                                
    
    
}])


appLocaleDataModule.value('localeString',{
    dealsUrl:'http://hackerearth.0x10.info/api/nitro_deals?type=json&query=list_deals',
    apiHitsUrl:'http://hackerearth.0x10.info/api/nitro_deals?type=json&query=api_hits',
    
})
var dataRepoModule = angular.module('dataRepoModule',[])
.value('dataRepo',{
    dealsData:'',
    apiHitsData:''
})
var appLocaleDataModule = angular.module('appLocaleDataModule',[]);
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
var serverServiceModule = angular.module('serverServiceModule',['appLocaleDataModule']);