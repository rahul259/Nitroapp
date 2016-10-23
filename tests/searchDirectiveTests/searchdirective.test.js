'use strict';

describe('Testing search Directive', function(){
    beforeEach(module('searchModule'));
    var $compileService, $rootScope, template;
    beforeEach(inject(function($templateCache, _$compile_, _$rootScope_){
        template = $templateCache.get('./modules/shared/searchdirective/searchDir.template.html');
        $templateCache.put('./modules/shared/searchdirective/searchDir.template.html',template);
        $compileService = _$compile_;
        $rootScope = _$rootScope_;
    }));
    
    it('Expect diretive to push appropriate content', function(){
        var e = angular.element('<search-dir></search-dir>');
        var elem = $compileService(e)($rootScope);
        
        var str = '<div id="custom-search-input"> <div class="input-group col-md-12"> <input type="search" id="searchtext" ng-model = "$parent.searchitem" class="search-query form-control" placeholder="Search (by tags)" /> <span class="input-group-btn"> <button class="btn btn-danger" type="button"> <span class=" glyphicon glyphicon-search"></span> </button> </span> </div> </div>';
        
        $rootScope.$digest();
        expect(elem.html()).toContain(str);
    })
    
})