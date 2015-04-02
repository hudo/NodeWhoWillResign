{"filter":false,"title":"spider-using-async-lib.js","tooltip":"/utils/spider-using-async-lib.js","undoManager":{"mark":0,"position":0,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":58,"column":0},"action":"insert","lines":["var request = require('request');","var fs = require('fs');","var mkdirp = require('mkdirp');","var path = require('path');","var utilities = require('./utilities');","","","function saveFile(filename, contents, callback) {","  mkdirp(path.dirname(filename), function(err) {","    if(err) {","      return callback(err);","    }","    fs.writeFile(filename, contents, callback);","  });","}","","function download(url, filename, callback) {","  console.log(\"Downloading \" + url);","  request(url, function(err, response, body) {","    if(err) {","      return callback(err);","    }","    saveFile(filename, body, function(err) {","      console.log(\"Downloaded and saved: \" + url);","      if(err) {","        return callback(err);","      }","      callback(null, body);","    });","  });  ","}","","function spider(url, callback) {","  var filename = utilities.urlToFilename(url);","  fs.exists(filename, function(exists) {","    if(exists) {","      return callback(null, filename, false);","    }","    download(url, filename, function(err) {","      if(err) {","        return callback(err);","      }","      callback(null, filename, true);","    })","  }); ","}","","","spider(process.argv[2], function(err, filename, downloaded) {","  if(err) {","    console.log(err);","  } else if(downloaded){","    console.log('Completed the download of \"'+ filename +'\"');","  } else {","    console.log('\"'+ filename +'\" was already downloaded');","  }","});","",""]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":58,"column":0},"end":{"row":58,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1427211644808,"hash":"125e6bf693bfa30c3cf2e478371c1663fc9252f1"}