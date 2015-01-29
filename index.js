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
		var pattern = new RegExp(".jade");   //match file .jade
		if ( pattern.test(value)  )  // file IS dot jade
			{
			inFile = jade.render(
				fs.readFileSync(contentFilepath + blogPostFiles[index]) );
			
			fileCollector.push(inFile);//push html from jade into array  		
			} 
	return fileCollector;
	});
return fileCollector;
};  //close gatherPostFiles

module.exports.fileimport = gatherPostFiles;