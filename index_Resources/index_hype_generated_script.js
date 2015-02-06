//	HYPE.documents["index"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "index_Resources";
	var documentName = "index";
	var documentLoaderFilename = "index_hype_generated_script.js";

	// find the URL for this script's absolute path and set as the resourceFolderName
	try {
		var scripts = document.getElementsByTagName('script');
		for(var i = 0; i < scripts.length; i++) {
			var scriptSrc = scripts[i].src;
			if(scriptSrc != null && scriptSrc.indexOf(documentLoaderFilename) != -1) {
				resourcesFolderName = scriptSrc.substr(0, scriptSrc.lastIndexOf("/"));
				break;
			}
		}
	} catch(err) {	}

	// Legacy support
	if (typeof window.HYPE_DocumentsToLoad == "undefined") {
		window.HYPE_DocumentsToLoad = new Array();
	}
 
	// load HYPE.js if it hasn't been loaded yet
	if(typeof HYPE_100 == "undefined") {
		if(typeof window.HYPE_100_DocumentsToLoad == "undefined") {
			window.HYPE_100_DocumentsToLoad = new Array();
			window.HYPE_100_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js?hype_version=100';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_100_DocumentsToLoad.push(HYPE_DocumentLoader);
		}
		return;
	}
	
	var hypeDoc = new HYPE_100();
	
	var attributeTransformerMapping = {b:"i",c:"i",bC:"i",aS:"i",d:"i",M:"i",e:"f",N:"i",f:"d",aT:"i",O:"i",g:"c",aU:"i",P:"i",Q:"i",aV:"i",R:"c",aW:"f",aI:"i",S:"i",T:"i",l:"d",aX:"i",aJ:"i",m:"c",n:"c",aK:"i",X:"i",aZ:"i",A:"c",Y:"i",aL:"i",B:"c",C:"c",D:"c",t:"i",E:"i",G:"c",bA:"c",a:"i",bB:"i"};

var scenes = [{timelines:{kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[{t:0,p:1,i:"Video Track",d:21.054367,o:"18",f:"2"},{f:"2",t:19.566668,d:1.4333324,i:"a",e:292,r:1,s:-129,o:"8"}],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:21.054367}},sceneIndex:0,perspective:"600px",oid:"1",initialValues:{"13":{o:"content-box",h:"online1.png",x:"visible",a:629,q:"100% 100%",b:863,j:"absolute",r:"inline",aA:{type:4,javascriptOid:"15"},k:"div",z:"6",d:29,c:201,i:"online1",aP:"pointer"},"21":{c:234,d:15,I:"Solid",e:"0.000000",J:"Solid",bD:"auto",K:"Solid",g:"#DDEEFF",L:"Solid",aP:"pointer",M:1,N:1,A:"#A0A0A0",x:"visible",aA:{type:5,goToURL:"http://gatewebdev.com.sg/clients/ADT/ADT_hands/ADT_SecurityTips.html",openInNewWindow:false},B:"#A0A0A0",k:"div",O:1,C:"#A0A0A0",z:"11",P:1,D:"#A0A0A0",j:"absolute",a:332,b:770},"8":{c:121,d:39,I:"Solid",e:"0.000000",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",aP:"pointer",M:1,N:1,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",k:"div",aA:{goToURL:"http://gatewebdev.com.sg/clients/ADT/ADT_hands/ADT_page2.html",type:5,openInNewWindow:false},C:"#A0A0A0",z:"8",O:1,D:"#A0A0A0",P:1,a:-129,b:242},"19":{c:234,d:22,I:"Solid",e:"0.000000",J:"Solid",bD:"auto",K:"Solid",g:"#DDEEFF",L:"Solid",aP:"pointer",M:1,N:1,A:"#A0A0A0",x:"visible",aA:{type:5,goToURL:"http://gatewebdev.com.sg/clients/ADT/ADT_hands/ADT_Start.html",openInNewWindow:false},B:"#A0A0A0",k:"div",O:1,C:"#A0A0A0",z:"9",P:1,D:"#A0A0A0",j:"absolute",a:332,b:674},"9":{o:"content-box",h:"ADT_footer.jpg",x:"visible",a:0,q:"100% 100%",b:537,j:"absolute",r:"inline",c:830,k:"div",z:"4",d:356},"12":{o:"content-box",h:"online_panel.png",x:"visible",a:629,q:"100% 100%",b:610,j:"absolute",r:"none",aA:{type:4,javascriptOid:"14"},k:"div",z:"7",d:286,c:205,i:"online_panel",aP:"pointer"},"20":{c:234,d:15,I:"Solid",e:"0.000000",J:"Solid",bD:"auto",K:"Solid",g:"#DDEEFF",L:"Solid",aP:"pointer",M:1,N:1,A:"#A0A0A0",x:"visible",aA:{type:5,goToURL:"http://gatewebdev.com.sg/clients/ADT/ADT_hands/ADT_Packages.html",openInNewWindow:false},B:"#A0A0A0",k:"div",O:1,C:"#A0A0A0",z:"10",P:1,D:"#A0A0A0",j:"absolute",a:332,b:698},"10":{o:"content-box",h:"online_bubble.png",x:"visible",a:639,q:"100% 100%",b:804,j:"absolute",r:"inline",aA:{type:4,javascriptOid:"15"},k:"div",z:"5",d:65,c:182,i:"online_bubble",aP:"pointer"},"18":{aR:"0",x:"visible",bE:[{filename:"Main2%20-%20Wi-Fi-1.m4v"}],a:0,b:0,j:"absolute",c:830,k:"video",aO:"0",z:"3",d:537,aQ:"0",aH:"1"}},backgroundColor:"#FFFFFF",name:"Untitled Scene"}];


	
	var javascripts = [{name:"hidePanel",source:"function(hypeDocument, element, event) {\n\thypeDocument.getElementById(\"online_panel\").style.display = \"none\";\n\t\n\t\n}",identifier:"14"},{name:"showPanel",source:"function(hypeDocument, element, event) {\nhypeDocument.getElementById(\"online_panel\").style.display = \"block\";\n\t\n\t\n}",identifier:"15"}];


	
	var Custom = {};
	var javascriptMapping = {};
	for(var i = 0; i < javascripts.length; i++) {
		try {
			javascriptMapping[javascripts[i].identifier] = javascripts[i].name;
			eval("Custom." + javascripts[i].name + " = " + javascripts[i].source);
		} catch (e) {
			hypeDoc.log(e);
			Custom[javascripts[i].name] = (function () {});
		}
	}
	
	hypeDoc.setAttributeTransformerMapping(attributeTransformerMapping);
	hypeDoc.setScenes(scenes);
	hypeDoc.setJavascriptMapping(javascriptMapping);
	hypeDoc.Custom = Custom;
	hypeDoc.setCurrentSceneIndex(0);
	hypeDoc.setMainContentContainerID("index_hype_container");
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(true);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;

	hypeDoc.documentLoad(this.body);
}());

