var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');

import {checkDTD,dtdValid,reduceByKey,transformToDict,transformDTDToDict,toDirectory,checkWellFormed,generateTree} from "./core"

var swig  = require('swig');
var React = require('react');
var Router = require('react-router');
var routes = require('./app/routes');

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.route('/api/check').post(async(req,res,next)=>{
var startq = new Date().getTime(); 
  var isFormed = true;
  var isValid = true;
  var data = JSON.parse(req.body.data);
  var dtd = JSON.parse(req.body.dtd);
  data = data.map(i=>transformToDict(i));
  if(data.includes(null))
    isFormed = false;
  else
    isFormed = (checkWellFormed(data));
  if(isFormed == false) res.send("This is not a well-Formed XML file. Stop checking!!!");
  else{
    var tree = await generateTree(data);
    var nodeArray = [];
    tree.traverseDF(function(node) {
      nodeArray = node;
    });
    var newArr = reduceByKey(nodeArray);
    dtd = dtd.map(i=>transformDTDToDict(i));
    var dtdResult = await toDirectory(dtd);
    if(!checkDTD(dtdResult))
      res.send("This is a well-Formed XML file, But not a well-formed DTD file.");
    else{
      try{
        isValid =(dtdValid(newArr,dtdResult));
        var end = new Date().getTime(); // ????
        console.log(end - startq);
        if(isValid) res.send("This is a well-Formed XML file, And this can be valided by your DTD file.");
        else res.send("This is a well-Formed XML file, And this cannot be valided by your DTD file.");
      }
      catch(e){res.send("Opps!! "+e)}
    }
  }
})

app.use(function(req, res) {
  Router.run(routes, req.path, function(Handler) {
    var html = React.renderToString(React.createElement(Handler));
    var page = swig.renderFile('views/index.html', { html: html });
    res.send(page);
  });
});

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
