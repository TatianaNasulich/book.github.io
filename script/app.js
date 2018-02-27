var test = angular.module("test",["ngRoute"])
    .config(function ($routeProvider,$locationProvider) {
        $routeProvider.when("/",{
            templateUrl: "view/table.html",
            controller : "AuthorCtrl"
        });
        $routeProvider.when("/edit",{
            templateUrl: "view/edit.html",
            controller : "AuthorCtrl"
        });
        $routeProvider.when("/book",{
            templateUrl: "view/book.html",
            controller: "BookCtrl"
        });
        $routeProvider.when("/editBook",{
            templateUrl: "view/editBook.html",
            controller: "BookCtrl"
        });
        $routeProvider.when("/genres",{
            templateUrl: "view/Genres.html",
            controller: "GenresCtrl"
        });
        $routeProvider.when("/editGenres",{
            templateUrl: "view/EditGenres.html",
            controller: "GenresCtrl"
        });

        $routeProvider.otherwise({
            templateUrl: "view/table.html",
            controller : "AuthorCtrl"
        })
        
    });



