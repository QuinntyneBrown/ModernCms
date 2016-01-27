﻿/// <reference path="../typings/angularjs/angular.d.ts" />

angular.module("app", ["ngX"]).config(["$routeProvider", "apiEndpointProvider", ($routeProvider: any, apiEndpointProvider:any) => {

    $routeProvider.when("/", {
        componentName: "homeComponent"
    });

    $routeProvider.when("/brand/list", {
        componentName: "brandListComponent"
    });

    $routeProvider.when("/brand/edit/:id", {
        componentName: "brandListComponent"
    });
        
    $routeProvider.when("/bundle/list", {
        componentName: "bundleListComponent"
    });

    $routeProvider.when("/component/list", {
        componentName: "componentListComponent"
    });
    
    $routeProvider.when("/page/list", {
        componentName: "pageListComponent"
    });

    $routeProvider.when("/provider/list", {
        componentName: "providerListComponent"
    });
    
    $routeProvider.otherwise("/");

    apiEndpointProvider.configure("http://localhost:54965/api");
    //apiEndpointProvider.configure("http://moderncms.azurewebsites.net/api");

}]);