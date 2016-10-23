'use strict';

describe("Tests for Home Controller", function(){
    beforeEach(module('nitroApp'));
    
    var $controller;
    beforeEach(inject(function(_$controller_){
       $controller = _$controller_;
    }));
 describe('testing $scope.totalLikes', function(){
     var $scope, controller
     beforeEach(function(){
         $scope = {};
         controller = $controller('homeCtrl',{$scope:$scope});
     });
     
     it('initialise totalLikes to 0', function(){
         expect($scope.totalLikes).toEqual(0);
     });
     it('initialize tagsList to be empty array', function(){
         expect($scope.tagsList).toEqual([]);
     });
     it('locale data is setup',function(){
         expect($scope.localeString.cart).toEqual('Cart');
     })
 })
});