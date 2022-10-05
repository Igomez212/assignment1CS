var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));
app.use(bodyParser.json());

var fs = require('fs');


//global variable for tweet data
var tweetinfo = []

//load the input file
fs.readFile('favs.json', 'utf8', function readFileCallback(err,data ){
  if(err){
    req.log.info('cannot load a file:' + fileFolder + '/' + _file_name)
    throw err;
  }
  else{
    //TODO: store loaded data into a global variable for tweet data
    tweetinfo = JSON.parse(data);
   

  }
});
 


//Get functions
//Shows user info
app.get('/tweets', function(req, res) {
  //TODO: send all users' IDs
  res.send({tweetinfo: tweetinfo});
});

//Shows tweet info
app.get('/tweetinfo', function(req, res) {
  //TODO: send tweet info
  res.send({tweetinfo: tweetinfo});
});

//Shows searched tweets
app.get('/searchinfo', function(req, res){
  //TODO: send searched tweets
  res.send({tweetinfo: tweetinfo})

});

//Post functions
//Posts created tweets
app.post('/tweetinfo', function(req, res) {
  //TODO: create a tweet.
  var tweetCreate = req.body.text;
  
  tweetinfo.push(({
    id: tweetCreate[0],
    text: tweetCreate[1]

  }))
  res.send('Successfully created');

});

//Posts searched tweets
app.post('/searchinfo', function(req, res) {
  //TODO: search a tweet
});

//Update
app.put('/tweets/:name', function(req, res) {
  //TODO: update tweets
    var name = req.params.name;
    var newName= req.body.newName;
    var found = false;

    tweetinfo.forEach(function(tweetinfo, name) {
      if (!found && tweetinfo.name === name){
      tweetinfo.name = newName;

      } 
  
    });
  res.send(name + newName);
});

//Delete 
app.delete('/tweetinfo/:id', function(req, res) {
  //TODO: delete a tweet
  var id = req.params.id;
  var found = false;

  tweetinfo.forEach(function(tweetinfo, index) {
    if (!found && tweetinfo.id === Number(id)){
      tweetinfo.splice(index, 1);

    } 
    res.send('success')
  });
});


app.listen(PORT, function() {
  console.log('Server listening on ' + PORT);
});