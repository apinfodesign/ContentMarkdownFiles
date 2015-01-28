//NODE MODULE FOR PUTTING HTML RENDERED JADE FILES IN AN ARRAY
//index.js for gathering jade files from directory and returning array of their content
var express = require('express');
//var staticlib = require('staticSiteFun');
//var router =  express.Router();
var fs = require('fs');		
var jade = require('jade');
//var contentFilepath = '/../../ContentMarkdownFiles/posts/'; 


///give contentFilepath as argument when calling gatherPostFiles
var gatherPostFiles = function(arg){ 
	var contentFilepath = arg;
 	var blogPostFiles = fs.readdirSync(contentFilepath ); 
 	console.log(blogPostFiles + " is blogPostFiles");
	var collector=[];      //collects file names
	var fileCollector=[];  //collects file contents
	// regex find all .jade content files in posts directory 
	blogPostFiles.forEach(function cleanFiles (value, index, array){
		var infile;  //takes fs incoming file
		var pattern = new RegExp(".jade");   //match file .jade
		if ( pattern.test(value)  )  // file IS dot jade
			{
			inFile= fs.readFileSync(contentFilepath + blogPostFiles[index]  );
			inFile = jade.render(inFile);   //make jade into html
			fileCollector.push(inFile);    //keep file content		
			collector.push(value);         //keep file name, not really needed?
			console.log("Is a dot jade file.");
			}
		// else { //console.log("DID NOT FIND dot jade FILE."); }
	return fileCollector;
	});
	//console.log(" collector is " + collector);
	//console.log(collector.length + " is length");
	//console.log("fileCollector is " + fileCollector);
	//console.log(fileCollector.length + " is fileCollector length");
	console.log("completing gatherPostFile -----");
return fileCollector;
};  //close gatherPostFiles

module.exports.fileimport = gatherPostFiles;


