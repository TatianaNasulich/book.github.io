angular.module("test").controller("AuthorCtrl",function ($scope,authorService) {
    $scope.authors = authorService.list();
    $scope.bookInfo = authorService.listBook();
    $scope.currentView='Authors';


    $scope.createOrUpdateBook = function (id) {
        authorService.get(id);
        $scope.newBook = {};
    };


    $scope.createOrUpdateAuthor = function () {
        $scope.newauthor ={};
    };

    $scope.saveAuthor = function () {
        authorService.save($scope.newauthor);
        $scope.newauthor = {};
    };

    $scope.delete = function (id) {
        $scope.test = confirm("Are you sure you want to delete?");
        if($scope.test == true){
            authorService.delete(id);
        }

    };

    $scope.edit = function (id) {
        $scope.currentView = 'edit';
        $scope.newauthor = angular.copy(authorService.get(id));

    };

    $scope.cancel = function () {
        $scope.newauthor = {};
    };


    //сортировка таблиц
    $scope.sortType = '';
    $scope.sortReverse = false;


});