var libraryApp = angular.module('libraryApp', []);

libraryApp.controller("libraryCtrl", LibraryController);

function LibraryController(){
    this.books = [
        Book(100, 'Harry Potter', 'Mary', true),
        Book(200, 'Lord of the Rings', 'John', false),
        Book(300, 'Legend of Condor Heroes', 'Pater', true),
        Book(400, 'AngularJS', 'Susie', false)
    ];
    
    alert('book 1 = ' + this.books.length);
}

function Book(id, title, author, available) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.available = available;
}

LibraryController.prototype.hello = function () {
  alert('Welcome to the Library!');  
};