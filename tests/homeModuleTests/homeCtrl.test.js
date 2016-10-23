'use strict';

describe("Tests for Home Controller", function(){
    beforeEach(module('nitroApp'));
    
    var $controller;
    beforeEach(inject(function(_$controller_){
        debugger;
       $controller = _$controller_;
    }));
 describe('testing $scope.totalLikes', function(){
     var $scope, controller
     beforeEach(function(){
         $scope = {};
         controller = $controller('homeCtrl',{$scope:$scope});
     });
     
     it('sets totalLikes to 0', function(){
         expect($scope.totalLikes).toEqual(0);
     });
 })
});