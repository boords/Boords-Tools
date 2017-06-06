// ∞
//
// boords_Animatic.jsx
// Copyright (c) 2017 Boords. All rights reserved.
// www.Boords.com
// 
// Name:  boords_Animatic
// Version: 1
// 
if(typeof JSON!=="object"){JSON={}}(function(){"use strict";function f(e){return e<10?"0"+e:e}function quote(e){escapable.lastIndex=0;return escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return typeof t==="string"?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var n,r,i,s,o=gap,u,a=t[e];if(a&&typeof a==="object"&&typeof a.toJSON==="function"){a=a.toJSON(e)}if(typeof rep==="function"){a=rep.call(t,e,a)}switch(typeof a){case"string":return quote(a);case"number":return isFinite(a)?String(a):"null";case"boolean":case"null":return String(a);case"object":if(!a){return"null"}gap+=indent;u=[];if(Object.prototype.toString.apply(a)==="[object Array]"){s=a.length;for(n=0;n<s;n+=1){u[n]=str(n,a)||"null"}i=u.length===0?"[]":gap?"[\n"+gap+u.join(",\n"+gap)+"\n"+o+"]":"["+u.join(",")+"]";gap=o;return i}if(rep&&typeof rep==="object"){s=rep.length;for(n=0;n<s;n+=1){if(typeof rep[n]==="string"){r=rep[n];i=str(r,a);if(i){u.push(quote(r)+(gap?": ":":")+i)}}}}else{for(r in a){if(Object.prototype.hasOwnProperty.call(a,r)){i=str(r,a);if(i){u.push(quote(r)+(gap?": ":":")+i)}}}}i=u.length===0?"{}":gap?"{\n"+gap+u.join(",\n"+gap)+"\n"+o+"}":"{"+u.join(",")+"}";gap=o;return i}}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()}}var cx,escapable,gap,indent,meta,rep;if(typeof JSON.stringify!=="function"){escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};JSON.stringify=function(e,t,n){var r;gap="";indent="";if(typeof n==="number"){for(r=0;r<n;r+=1){indent+=" "}}else if(typeof n==="string"){indent=n}rep=t;if(t&&typeof t!=="function"&&(typeof t!=="object"||typeof t.length!=="number")){throw new Error("JSON.stringify")}return str("",{"":e})}}if(typeof JSON.parse!=="function"){cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;JSON.parse=function(text,reviver){function walk(e,t){var n,r,i=e[t];if(i&&typeof i==="object"){for(n in i){if(Object.prototype.hasOwnProperty.call(i,n)){r=walk(i,n);if(r!==undefined){i[n]=r}else{delete i[n]}}}}return reviver.call(e,t,i)}var j;text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")}}})()


// Clear info log
clearOutput(); // Clears the info screen each time the script is run

// Global store
var boords_Animatic_Data = new Object();	// Store globals in an object

// Set the version
boords_Animatic_Data.scriptName = 'Boords Tools - Animatic Setup';
boords_Animatic_Data.version = 'V 1.0';
writeLn(boords_Animatic_Data.scriptName + " - " + boords_Animatic_Data.version);

boords_Animatic_Data.boordsFolderPath = '';
boords_Animatic_Data.boordsJsonName = '/boords.json';
boords_Animatic_Data.animaticLength = 20;
boords_Animatic_Data.comp = app.project.activeItem;
boords_Animatic_Data.frameFiles = [];

boords_Animatic_Data.topDown = true;

// Promps
boords_Animatic_Data.prompt_1 = "Select the storyboard folder downloaded from boords";
boords_Animatic_Data.prompt_2 = "How long in seconds would you like your animatic to be?";



// Errors
boords_Animatic_Data.err1 = "Select a master null and master particle.";
boords_Animatic_Data.err2 = "You have selected 2 layers however one must be the null and one the particle.";
boords_Animatic_Data.err4 = "All trackers updated";

// set the CSV file path
//boords_Animatic_Data.csvFile = app.project.file.fsName;
//boords_Animatic_Data.csvFile = boords_Animatic_Data.csvFile.substr(0, boords_Animatic_Data.csvFile.lastIndexOf("/"));
//boords_Animatic_Data.csvFile = boords_Animatic_Data.csvFile + boords_Animatic_Data.csvFolder;


// POP UP SET BOORDS FOLDER
boords_Animatic_popup_setFolder();

function boords_Animatic_popup_setFolder(){

	var folder = Folder.selectDialog(boords_Animatic_Data.prompt_1);
	if (folder !== null)
	{
		boords_Animatic_Data.boordsFolderPath = folder.fsName;
		
	}

}


// POP UP SET LENGTH
boords_Animatic_Data.animaticLength  = prompt(boords_Animatic_Data.prompt_2, "");


// // Pull JSON data

// var jsonFile = boords_Animatic_Data.boordsFolderPath + boords_Animatic_Data.boordsJsonName;
// var myFile = new File(jsonFile);

// 	if(myFile.open("r")){
// 		myFile.encoding = "UTF-8";
// 		var myJson = myFile.read();
// 		var myObject = JSON.parse(myJson);
// 		myFile.close();
// 	}


// Create a comp
var fold = app.project.items.addFolder("Boords Animatic");
var boordsComp = fold.items.addComp("Animatic", 1920, 1080, 1, boords_Animatic_Data.animaticLength, 25);
boordsComp.label = 9;
boordsComp.openInViewer();
var frameFold = fold.items.addFolder("Frames");


// GET FOLDER
// Get the tools folders
var tempFolder = new Folder(boords_Animatic_Data.boordsFolderPath);
var tempFiles = tempFolder.getFiles();


for (var i = 0; i < tempFiles.length; i++) {
	var fileName = tempFiles[i].name;
	var results = fileName.indexOf('frame');
	if(results > -1){
		boords_Animatic_Data.frameFiles.push(tempFiles[i].name);
	}
}




// IMPORT THE FRAMES

for (var i = 0; i < boords_Animatic_Data.frameFiles.length; i++) {
		
	var tempName = boords_Animatic_Data.frameFiles[i];
	var tempImg = boords_Animatic_Data.boordsFolderPath + "/" + tempName;

	var io = new ImportOptions(File(tempImg)); 

	io.importAs = ImportAsType.FOOTAGE;
	var frame = app.project.importFile(io);
	frame.parentFolder = frameFold;

	// Add Frames to comp
	l = boordsComp.layers.add(frame);
	l.scale.setValue([160, 160]);
	

	if(boords_Animatic_Data.topDown){
		l.inPoint = (boords_Animatic_Data.animaticLength / boords_Animatic_Data.frameFiles.length)*(i);
		l.moveToBeginning();
	}else{
		l.outPoint = (boords_Animatic_Data.animaticLength / boords_Animatic_Data.frameFiles.length)*(i+1);
		l.moveToEnd()
	}


}	


// Main function
if (boords_Animatic_Data.comp){
	app.beginUndoGroup("Boords Animatic");

}

function throwErr(err){
	var title = $.fileName.substring($.fileName.lastIndexOf("/")+1, $.fileName.lastIndexOf("."));
	alert(err, title, true);
}


function stringContains(haystack, needle){

	var results = haystack.indexOf(needle);

	if (results > -1) {
		return true;
	}else{
		return false;
	}

}

//need a regex to handle how characters are wrapped in CSV
function parseCSV(text){

	var i, s;
	var table = new Array();
	var a = text.split(/\r*\n/);
	var version = app.version.substring(0,1);
	var pattern;
	/*
	Regex hack for CS3, CS3 is failing on the $ conditional in (?=,|\\t|$), without a negative look behind assertion,we will kludge
	a positive look behind assertion and delete the beginning , if the text layer begins with a , this is likely to fail so don't start your 
	match layer with a , for now, which is probably something you don't want to do anyway.
	*/

	if(version >= 8){
		pattern = new RegExp("(^|\\t|,)(\"*|'*)(.*?)\\2(?=,|\\t|(?<,)$)", "g");
	}else{
		pattern = new RegExp("(^|\\t|,)(\"*|'*)(.*?)\\2(?=,|\\t|$)", "g");
	}
	  

	for (i=0; i<a.length; i++){
		s = a[i].replace(/""/g, '\"');	 
		
			if (s) {
			var element = s.split(",");
			var count = element.length;
			
			table[i] = new Array(count);
			for (x=0; x < count; x++){
			     if (typeof element[x] != 'undefined'){
					if(version >= 8){
						if(element[x].indexOf(",") == 0) element[x] =  element[x].substring(1, s.length);
					}
					
					table[i][x] = element[x];
				}
			}
		}
	 }
	 return table;

};

