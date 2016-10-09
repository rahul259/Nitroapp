appModule.controller('homeCtrl',['$scope','$rootScope','serverService','dataRepo',
                                 'spinner','localeString'
                                 , function(
                                 $scope,$rootScope,serverService,dataRepo,spinner,localeString
                                 
                                 ){
    $scope.localeString = localeString;                               
    spinner.showSpinner();
    $scope.totalLikes = 0;
    $scope.itemsLoaded = 0;
    $scope.getStars = function getStars(rating){
        if(!rating)
            return 0;

        return (((parseFloat(rating))*100)/5)+'%';
            
    } 
    $scope.tagsList = [];
    $scope.getTags = function(item){
        if(!item)
            return '';
        return item.tags.join(", ");
    }
    
    function errorInFetchingData(err){
        console.log(err);
    }                               
    function refreshDealData(){
        spinner.showSpinner();
        serverService.fetchDeals().then(function(resp){
         //console.log(resp.);
         $scope.items = dataRepo.dealsData = resp.data.deals;
         angular.forEach($scope.items, function(item){
             $scope.tagsList.push.apply($scope.tagsList, item.tags);
             item.likes = 0;
             item.rating = parseFloat(item.rating);
         })
         console.log(resp.data.deals)
         refreshApiData();
    },errorInFetchingData);
    }
                                     
                                     
    function refreshApiData(){
        serverService.fetchHits().then(function(resp){
            console.log(resp.data.api_hits);
            $scope.dataHits = dataRepo.apiHitsData = resp.data.api_hits;
            spinner.hideSpinner();
                    
        },errorInFetchingData)  
        
    }
    function init(){
        if(!dataRepo.dealsData){
           refreshDealData();
            
        }        
    }
    
    init();
    
    $scope.addLikes = function(item){
        item.likes+=1;
        $scope.totalLikes+=1;
    }
    
    $scope.sortBy={
        name:"rating"
    }
          
    $scope.refreshDealData = refreshDealData;
                                
    
    
}])