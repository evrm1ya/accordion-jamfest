
/**
 *
 * Concat Stuff - much primitive
 *
 * src dir
 * end file 
 * get src dir listing
 * loop through listing
 *    read stream each file
 *    write to outfile
 *
 */

var fs = require('fs');

var writableCSS = fs.createWriteStream(__dirname + '/styles.css');
var writableJS = fs.createWriteStream(__dirname + '/index.js');

concat('./styles', writableCSS);
concat('./plugins', writableJS);
concat('./src', writableJS);

function concat(srcDir, writable) {
  fs.readdir(srcDir, function(err, files) {
    readWrite(err, files, srcDir, writable);
  });
}

function readWrite(err, files, srcDir, writable) {
  'use strict';
  if (err)
    console.log(err);
  let filesLength = files.length;
  for(let i = 0; i < filesLength; i++) {
    let readable = createReadable(srcDir, files[i]);
    readable.on('data', function(chunk) {
      writable.write(chunk);
    });
  }
}

function createReadable(srcDir, file) {
  var readable = fs.createReadStream(srcDir + '/'  + file, {
    encoding: 'utf8',
    highWaterMark: 1024
  });
  return readable;
}


