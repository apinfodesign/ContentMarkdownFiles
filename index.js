//NODE MODULE FOR PUTTING HTML RENDERED JADE FILES IN AN ARRAY
//index.js for gathering jade files from directory and returning array of their content
var express = require('express');
var fs = require('fs');		
var jade = require('jade');
 
///give contentFilepath as argument when calling gatherPostFiles
var gatherPostFiles = function(arg){ 
	var contentFilepath = arg;
  	//below reads array of file names into blogPostFiles
  	var blogPostFiles = fs.readdirSync(contentFilepath ); 
 	var fileCollector=[];  //collects file contents
	// regex find all .jade content files in posts directory 
	blogPostFiles.forEach(function cleanFiles (value, index, array){
		var infile;  //takes fs incoming file
//		var pattern = new RegExp(".jade");   //match file .jade
		var jsonPattern = new RegExp(".json"); //match file .json
		if ( jsonPattern.test(value)  )  // file IS dot json
			{
			console.log("found json at index " + index);
//			inFile = jade.render(fs.readFileSync(contentFilepath + blogPostFiles[index]) );
 			inFile = JSON.parse(fs.readFileSync(contentFilepath + blogPostFiles[index]) );
 			console.log("inFile is: " + inFile);
			fileCollector.push(inFile);//push html from jade into array  		
			}
console.log("fileCollector is: "+fileCollector);

 	});
return fileCollector;
};  //close gatherPostFiles

module.exports.fileimport2 = gatherPostFiles;


//use require to parse as json
//or use json.parse


