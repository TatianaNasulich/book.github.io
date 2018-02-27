angular.module("test").controller("GenresCtrl",function ($scope,authorService) {
    $scope.authors = authorService.list();
    $scope.bookInfo = authorService.listBook();
    $scope.genres = authorService.listGenres();
    $scope.currentView = 'BookGenres';


    $scope.createOrUpdateGenres = function () {
        $scope.newGenre ={};
    };

    $scope.editGenre = function (id) {
        $scope.currentView = 'EditGenres';
        $scope.newGenre = angular.copy(authorService.getGenre(id));

    };
    $scope.saveGenre = function () {
        authorService.saveGenre($scope.newGenre);
        $scope.newGenre = {};
        $scope.currentView = 'BookGenres';
    };
    $scope.deleteGenre = function (id) {
        $scope.test = confirm("Are you sure you want to delete?");
        if($scope.test == true) {
            authorService.deleteGenre(id);
        }

    };
    $scope.cancel = function () {
        $scope.newGenre = {};
        $scope.currentView ='BookGenres';
    };
    //сортировка таблиц
    $scope.sortType = '';
    $scope.sortReverse = false;
    });