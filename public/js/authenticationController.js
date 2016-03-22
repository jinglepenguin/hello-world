var myApp=angular.module("myApp", []);
myApp.controller('AuthenticationCtrl', AuthenticationCtrl);

function AuthenticationCtrl($http){
    this.http = $http;

    this.username = '';
    this.password = '';

}

AuthenticationCtrl.prototype.hello = function(username) {
    alert('hello ' + username);
};

AuthenticationCtrl.prototype.login = function(username, password){

    alert('logging in..');

    var data = {"username":username, "password":password}

    var config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    //connect to nodejs server to verify username/password
    // this.http({
    //     url: '/getLibrarians',
    //     method: 'GET',
    //     params: {username: this.username, password: this.password}
    // }).then(function(response){
    //     alert('response: ' + response);
    // });

    this.http.post('/getLibrarians', data, config).success(function(response){
        alert('trying to get some librarians! response:' + response);
    })

    // if(username == "x" && password == "x"){
    //     window.location = "/library_index.html";
    // } else if (username != '' && password != ''){
    //     alert('Please try again');
    // }
};

function User(username, password){
    this.username = username;
    this.password = password;
}
