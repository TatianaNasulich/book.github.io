angular.module("test").controller("BookCtrl",function ($scope,authorService) {
    $scope.authors = authorService.list();
    $scope.bookInfo = authorService.listBook();
    $scope.genres = authorService.listGenres();
    $scope.currentView ='AuthorsBooks';
    var biu = 5;

    $scope.saveBook = function () {

        authorService.saveBook($scope.newBook);
        $scope.bookInfo = authorService.listBook();
        $scope.newBook = {};
        $scope.currentView ='AuthorsBooks';
        console.log($scope.authors);
    };

    $scope.cancel = function () {
        $scope.newBook = {};
        $scope.currentView ='AuthorsBooks';
    };

    $scope.editBook  =  function (id) {
        $scope.currentView = 'editBook';
        $scope.newBook = angular.copy(authorService.getBook(id));
        console.log($scope.newBook)
    };

    $scope.deleteBook = function (id) {
        $scope.test = confirm("Are you sure you want to delete?");
        if($scope.test == true) {
            authorService.deleteBook(id);
            $scope.bookInfo = authorService.listBook();

        }
    };

    //сортировка таблиц
    $scope.sortType = '';
    $scope.sortReverse = false;

    });
