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
boords_Animatic_Data.version = 'V 1.2';
writeLn(boords_Animatic_Data.scriptName + " - " + boords_Animatic_Data.version);

boords_Animatic_Data.frameRate = 25;
boords_Animatic_Data.boordsFolderPath = '';
boords_Animatic_Data.soundFile = '';
boords_Animatic_Data.soundLayer = null;
boords_Animatic_Data.boordsJsonName = '/ae.json';
boords_Animatic_Data.frames = null;
boords_Animatic_Data.animaticLength = 20;
boords_Animatic_Data.comp = app.project.activeItem;
boords_Animatic_Data.frameFiles = [];

boords_Animatic_Data.topDown = true;

// Promps
boords_Animatic_Data.prompt_1 = "Select the storyboard folder that contains your JPG or PNG sequence";
boords_Animatic_Data.prompt_2 = "How long in seconds would you like your animatic to be?";
boords_Animatic_Data.prompt_3 = "Select a sound file if you have one. Cancel if not.";



// Errors
boords_Animatic_Data.err1 = "Select a master null and master particle.";
boords_Animatic_Data.err2 = "You have selected 2 layers however one must be the null and one the particle.";
boords_Animatic_Data.err4 = "All trackers updated";


// Naming
boords_Animatic_Data.nameOfComp = "Animatic";
boords_Animatic_Data.storyboardName = "Boords Import";



// Expressions
boords_Animatic_Data.textExpressionPart1 = 	"if(time < comp('"+boords_Animatic_Data.nameOfComp+"').layer('frame-";
boords_Animatic_Data.textExpressionPart2 = 	"').inPoint && time >= comp('"+boords_Animatic_Data.nameOfComp+"').layer('frame-";
boords_Animatic_Data.textExpressionPart3 =	"').inPoint){100}else{0};";
boords_Animatic_Data.textExpressionPart4 = 	"if(time >= comp('"+boords_Animatic_Data.nameOfComp+"').layer('frame-";

//boords_Animatic_Data.csvFile = app.project.file.fsName;
//boords_Animatic_Data.csvFile = boords_Animatic_Data.csvFile.substr(0, boords_Animatic_Data.csvFile.lastIndexOf("/"));
//boords_Animatic_Data.csvFile = boords_Animatic_Data.csvFile + boords_Animatic_Data.csvFolder;


// Main function
if (boords_Animatic_Data.comp){
	app.beginUndoGroup("Boords Animatic");
}

// POP UP SET BOORDS FOLDER
boords_Animatic_popup_setFolder();

function boords_Animatic_popup_setFolder(){

	var folder = Folder.selectDialog(boords_Animatic_Data.prompt_1);
	if (folder !== null)
	{
		boords_Animatic_Data.boordsFolderPath = folder.fsName;
		
	}

}



// Set the sound file
boords_Animatic_popup_setFile();

function boords_Animatic_popup_setFile(){

	var tempFile = File.openDialog(boords_Animatic_Data.prompt_3,undefined,true);

	if (tempFile !== null)
	{
		boords_Animatic_Data.soundFile = tempFile;

		var io = new ImportOptions(File(boords_Animatic_Data.soundFile)); 

		io.importAs = ImportAsType.FOOTAGE;
		boords_Animatic_Data.soundLayer = app.project.importFile(io);
		//frame.parentFolder = frameFold;
		boords_Animatic_Data.animaticLength = boords_Animatic_Data.soundLayer.duration;

	}else{
		// POP UP SET LENGTH
		boords_Animatic_Data.animaticLength  = prompt(boords_Animatic_Data.prompt_2,"60");
	}

}



// // Pull JSON data
 
var jsonFile = boords_Animatic_Data.boordsFolderPath + boords_Animatic_Data.boordsJsonName;
var myFile = new File(jsonFile);

if(myFile.open("r")){
	myFile.encoding = "UTF-8";
	var myJson = myFile.read();

	var myObject = JSON.parse(myJson);

	boords_Animatic_Data.frames = myObject.frames;
	boords_Animatic_Data.storyboardName = myObject.name;

	myFile.close();
}



// CREATE THE COMPS AND PROJECT FOLDERS
var fold = app.project.items.addFolder("Boords Animatic");
var boordsComp = fold.items.addComp("Animatic", 1920, 1080, 1, boords_Animatic_Data.animaticLength, boords_Animatic_Data.frameRate);
boordsComp.label = 9;
boordsComp.openInViewer();
var frameFold = fold.items.addFolder("Frames");

// GET FOLDER
// Get the tools folders
var tempFolder = new Folder(boords_Animatic_Data.boordsFolderPath);
var tempFiles = tempFolder.getFiles();


for (var i = 0; i < tempFiles.length; i++) {
	var fileName = tempFiles[i].name;
	var results = fileName.indexOf('.jpg');
	if(results > -1){
		boords_Animatic_Data.frameFiles.push(tempFiles[i].name);
	}
	var results2 = fileName.indexOf('.png');
	if(results2 > -1){
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

	var scaleAmount = ((boordsComp.width / l.width)*100) + 1;

	l.scale.setValue([scaleAmount, scaleAmount]);
	l.name = "frame-"+i;

	if(boords_Animatic_Data.topDown){
		l.inPoint = (boords_Animatic_Data.animaticLength / boords_Animatic_Data.frameFiles.length)*(i);
		l.moveToBeginning();
	}else{
		l.outPoint = (boords_Animatic_Data.animaticLength / boords_Animatic_Data.frameFiles.length)*(i+1);
		l.moveToEnd()
	}

}	

// IF SOUND FILE
if(boords_Animatic_Data.soundLayer != null){
	var soundFold = fold.items.addFolder("Sound");
	boords_Animatic_Data.soundLayer.parentFolder = soundFold;
 	var soundLayer = boordsComp.layers.add(boords_Animatic_Data.soundLayer);
 	soundLayer.moveToBeginning();
}

// IF BOORDS JSON FILE
if(boords_Animatic_Data.frames != null){
	var notesFold = fold.items.addFolder("Notes");
	var notesComp = notesFold.items.addComp("Notes Reference", 1920, 1080, 1, boords_Animatic_Data.animaticLength, boords_Animatic_Data.frameRate);

	// SETUP NOTES COMP
	setupNotesComp(notesComp);

 	boordsComp.layers.add(notesComp);
 	
 	notesComp.moveToBeginning();
}



function setupNotesComp(comp) {
	var tempComp = comp;

	// Add the BG
	var tempLayer = tempComp.layers.addShape();
	var tempContents = tempLayer.property("ADBE Root Vectors Group");
	// create the pupil 
	var bgGroup = tempContents.addProperty("ADBE Vector Group");
	bgGroup.name = "BG Group";

	var bgShape = bgGroup.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
	bgShape.name = "BG Shape";

	bgShape.property("ADBE Vector Rect Size").setValue([1400, 1080]);
	tempLayer.property("ADBE Transform Group").property("ADBE Opacity").setValue(65);
	tempLayer.property("ADBE Transform Group").property("ADBE Position").setValue([700,540]);

	bgGroup.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
	var bgFillColour = bgGroup.property("ADBE Vectors Group").property("ADBE Vector Graphic - Fill").property("ADBE Vector Fill Color");
	bgFillColour.setValue([0,0,0,1]);

	var c = [100, 240, 180, 380, 660, 130, 350, 630];


	var titleTextLayer = tempComp.layers.addText();
	titleTextLayer.property("Source Text").setValue(boords_Animatic_Data.storyboardName);
	titleTextLayer.property("ADBE Transform Group").property("ADBE Position").setValue([c[0],c[5]]);
	var titleProp = titleTextLayer.property("Source Text");
	var titleDocument = titleProp.value;
	titleDocument.font = "Verdana";
	titleDocument.fontSize = 50;
	titleDocument.fillColor = [1, 1, 1];
	titleProp.setValue(titleDocument);


	var subTitleTextLayer1 = tempComp.layers.addText();
	subTitleTextLayer1.property("Source Text").setValue("Sound Notes");
	subTitleTextLayer1.property("ADBE Transform Group").property("ADBE Position").setValue([c[0],c[6]]);
	var subTitleProp1 = subTitleTextLayer1.property("Source Text");
	var subTitleDocument1 = subTitleProp1.value;
	subTitleDocument1.font = "Verdana";
	subTitleDocument1.fontSize = 20;
	subTitleDocument1.fillColor = [1, 1, 1];
	subTitleProp1.setValue(subTitleDocument1);

	var subTitleTextLayer2 = tempComp.layers.addText();
	subTitleTextLayer2.property("Source Text").setValue("Directional Notes");
	subTitleTextLayer2.property("ADBE Transform Group").property("ADBE Position").setValue([c[0],c[7]]);
	var subTitleProp2 = subTitleTextLayer2.property("Source Text");
	var subTitleDocument2 = subTitleProp2.value;
	subTitleDocument2.font = "Verdana";
	subTitleDocument2.fontSize = 20;
	subTitleDocument2.fillColor = [1, 1, 1];
	subTitleProp2.setValue(subTitleDocument2);
	
	subTitleTextLayer1.property("ADBE Transform Group").property("ADBE Opacity").setValue(50);
	subTitleTextLayer2.property("ADBE Transform Group").property("ADBE Opacity").setValue(50);



	for (var i = 0; i < boords_Animatic_Data.frames.length; i++) {
		
		var textBoxSize = [1150,200];
		var textExpression = boords_Animatic_Data.textExpressionPart1+(i+1)+boords_Animatic_Data.textExpressionPart2+i+boords_Animatic_Data.textExpressionPart3;

		if(i == boords_Animatic_Data.frames.length-1){
			var textExpression = boords_Animatic_Data.textExpressionPart4+i+boords_Animatic_Data.textExpressionPart3;
		}

		var tempTextLayer = tempComp.layers.addText();
		tempTextLayer.property("Source Text").setValue("Frame "+ (i+1));
		tempTextLayer.property("ADBE Transform Group").property("ADBE Position").setValue([c[0],c[1]]);
		var textProp = tempTextLayer.property("Source Text");
		var textDocument = textProp.value;
		textDocument.font = "Verdana";
		textDocument.fontSize = 30;
		textDocument.fillColor = [1, 1, 1];
		textProp.setValue(textDocument);

		var textOpacity = tempTextLayer.property("ADBE Transform Group").property("ADBE Opacity");
		textOpacity.setValue(0);
		textOpacity.expression = textExpression;


		var tempTextLayer2 = tempComp.layers.addBoxText(textBoxSize);
		tempTextLayer2.property("Source Text").setValue(boords_Animatic_Data.frames[i].label);
		tempTextLayer2.property("Anchor Point").setValue([-(textBoxSize[0]/2),-(textBoxSize[1]/2)]);
		tempTextLayer2.property("ADBE Transform Group").property("ADBE Position").setValue([c[0],c[2]]);
		var textProp2 = tempTextLayer2.property("Source Text");
		var textDocument2 = textProp2.value;
		textDocument2.font = "Verdana";
		textDocument2.fontSize = 20;
		textDocument2.fillColor = [1, 1, 1];
		textProp2.setValue(textDocument2);

		textOpacity = tempTextLayer2.property("ADBE Transform Group").property("ADBE Opacity");
		textOpacity.setValue(0);
		textOpacity.expression = textExpression;


		var tempTextLayer3 = tempComp.layers.addBoxText(textBoxSize);
		tempTextLayer3.property("Source Text").setValue(boords_Animatic_Data.frames[i].voiceover);
		tempTextLayer3.property("Anchor Point").setValue([-(textBoxSize[0]/2),-(textBoxSize[1]/2)]);
		tempTextLayer3.property("ADBE Transform Group").property("ADBE Position").setValue([c[0],c[3]]);
		var textProp3 = tempTextLayer3.property("Source Text");
		var textDocument3 = textProp3.value;
		textDocument3.font = "Verdana";
		textDocument3.fontSize = 30;
		textDocument3.fillColor = [1, 1, 1];
		textProp3.setValue(textDocument3);

		textOpacity = tempTextLayer3.property("ADBE Transform Group").property("ADBE Opacity");
		textOpacity.setValue(0);
		textOpacity.expression = textExpression;

		var tempTextLayer4 = tempComp.layers.addBoxText(textBoxSize);
		tempTextLayer4.property("Source Text").setValue(boords_Animatic_Data.frames[i].direction);
		tempTextLayer4.property("Anchor Point").setValue([-(textBoxSize[0]/2),-(textBoxSize[1]/2)]);
		tempTextLayer4.property("ADBE Transform Group").property("ADBE Position").setValue([c[0],c[4]]);
		var textProp4 = tempTextLayer4.property("Source Text");
		var textDocument4 = textProp4.value;
		textDocument4.font = "Verdana";
		textDocument4.fontSize = 30;
		textDocument4.fillColor = [1, 1, 1];
		textProp4.setValue(textDocument4);

		textOpacity = tempTextLayer4.property("ADBE Transform Group").property("ADBE Opacity");
		textOpacity.setValue(0);
		textOpacity.expression = textExpression;

		//break;

	}
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

