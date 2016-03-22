var express = require('express');
var app = express();


/** DB CONNECTION LOGIC **/
var mariasql = require('mysql'); //currently using the mysql binding since can't get the mariasql to work properly
var connection = mariasql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'PenguinMariaDB',
    database: 'library'
});


app.get('/', function (req, res) {
    console.log('in /');
    res.send('Hello World!');
});

app.use(express.static(__dirname + '/public'));

app.get('/index', function(req, res){
    console.log('in /index');
    res.redirect('/index.html');
});

app.get('/test', function(req, res){
    console.log('in /test');
    res.redirect('/test.html');
});



app.listen(3000, function () {
  console.log('http://localhost:3000 is ready');
});


app.get('/binarysearch', function(req, res){
   console.log('sorting');

    var inputArry = [1, 6, 34, 69, 20, 18, 4, 7];
    console.log(inputArry);
    var index = binarysearch(inputArry, 18);
    console.log(index);

   res.redirect('/index.html');
});


app.get('/quicksort', function(req, res){
   console.log('sorting');

    var inputArry = [1, 6, 34, 69, 20, 18, 4, 7];
    console.log(inputArry);
    quickSort(inputArry, 0, inputArry.length-1);
    console.log(inputArry);

   res.redirect('/index.html');
});


app.get('/bubblesort', function(req, res){
   console.log('bubble sorting');

    var inputArry = [1, 6, 34, 69, 20, 18, 4, 7];
    console.log(inputArry);
    bubbleSort(inputArry);
    console.log(inputArry);

   res.redirect('/index.html');
});

app.post('/getLibrarians', function(req, res){
    console.log('getting librarians from DB');

    console.dir('request: ' + req.body.username);

    getLibrarians(connection);

    console.log('finished');

    res.redirect('/library_index.html');
});


function getLibrarians(connection){
    var results;

    connection.connect();

    connection.query('SELECT * FROM librarian', function(err, rows, field){
        if(!err){
            results = rows;
            console.dir('rows: ' + rows);
        } else {
            results = 'error';
            console.log('error');
        }
    });

    connection.end();

    return results;
}

/** RANDOM CODE SNIPPETS **/

function bubbleSort(inputArry){
    for(var i = 0; i < inputArry.length - 1; i++){
        if(inputArry[i] > inputArry[i+1] && i+1 < inputArry.length){
            inputArry.exchangeValue(i, i+1);
        }
    }
}


function quickSort(inputArry, lowerIndex, higherIndex){

    console.log(inputArry);

    var middleIndex = sort(inputArry, lowerIndex, higherIndex);
    console.log(middleIndex);

    //sort the left side recursively
    if(lowerIndex < middleIndex - 1){
        quickSort(inputArry, lowerIndex, middleIndex - 1);
    }

    if(middleIndex < higherIndex){
        quickSort(inputArry, middleIndex, higherIndex);
    }
}


function sort(inputArry, lowerIndex, higherIndex){

    //first, find the pivot value
    var pivotIndex = Math.round(lowerIndex + ((higherIndex - lowerIndex) / 2));

    var i = lowerIndex;
    var j = higherIndex;

    var pivotValue = inputArry[pivotIndex];

    while (i <= j){
        //search in the left side of the pivot, and look for the first greater value compare to pivot
        while(inputArry[i] < pivotValue){
            i++;
        }

        //search in the right side of the pivot, and look for the first greater value compare to pivot
        while(inputArry[j] > pivotValue){
            j--;
        }

        //if lowerIndex is still smaller than higherIndex (meaning the sort hasn't complete), swap values and move the indexes forward
        if(i <= j){
            exchangeValue(inputArry, i, j);
            i++;
            j--;
        }
    }

    return i;

}

function exchangeValue(inputArr, index1, index2){
    var tempValue = inputArr[index1];
    inputArr[index1] = inputArr[index2];
    inputArr[index2] = tempValue;
}
