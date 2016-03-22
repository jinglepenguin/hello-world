var libraryApp = angular.module('libraryApp', []);

libraryApp.controller("libraryCtrl", LibraryController);

function LibraryController($scope){
    $scope.books = [
        new Book(100, 'Harry Potter', 'Mary', 'I'),
        new Book(200, 'Lord of the Rings', 'John', 'O'),
        new Book(300, 'Legend of Condor Heroes', 'Pater', 'I'),
        new Book(400, 'AngularJS', 'Susie', 'B')
    ];

}

function Book(id, title, author, status) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.status = status;
}

LibraryController.prototype.hello = function () {
  alert('Welcome to the Library!');
};
