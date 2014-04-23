//Browser Support Code
//var fid=1;
function godown(){
//alert(window.location.hostname);
	var fid=document.getElementById("hidden").src;
        fid=fid.replace(/http:\/\/localhost\//ig, "");
//alert(fid);
	var ajaxRequest;  // The variable that makes Ajax possible!
	try{
		// Opera 8.0+, Firefox, Safari
		ajaxRequest = new XMLHttpRequest();

	} catch (e){
		// Internet Explorer Browsers
		try{
			ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try{
				ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e){
				// Something went wrong
				alert("Your browser broke!");
				return false;
			}
		}
	}
	// Create a function that will receive data sent from the server
	ajaxRequest.onreadystatechange = function(){
		if (ajaxRequest.readyState == 4) {
			if (ajaxRequest.status == 200) {

				//alert(ajaxRequest.responseText);
				var xmlDoc = ajaxRequest.responseXML;
			        var showElements = xmlDoc.getElementsByTagName("field");
				var lea =xmlDoc.getElementsByTagName("leaf");
				var fname=xmlDoc.getElementsByTagName("fname");
                                newHTML="";
                                
var newHTML1   = new Array(); 

                               
                              
			      	for (var y=0; y<showElements.length; y++) 

                               {
                              
                                 

 
 var filename=fname[y].childNodes[0].nodeValue; 
 var fileid = showElements[y].childNodes[0].nodeValue;                                              
  var leafid=lea[y].childNodes[0].nodeValue;  


//newHTML1[y]=fname[y].childNodes[0].nodeValue; 



//alert(newHTML1[y]);
//alert(fileid);

                             // var nam= document.getElementById('txt');

//alert(fname[0].childNodes[0].nodeValue );                                   
 //nam.innerHTML=fname[0].childNodes[0].nodeValue;
//nam.innerHTML=newHTML1[y];

//this.fid=fileid;

//alert(fid);
//alert(leafid);
//var ni = document.getElementById('op').value;

 //ni=fid;
                               
//var a= document.ElementById("rname");

//alert(a);

                       
if(leafid==0)
{



                                //ajaxDisplay.innerHTML=

                                      newHTML=newHTML+"<div id=\"im\"<img  onmousedown=\"whichButton(event)\"id="+fileid+" name="+filename+" src=\"folder.gif\"> <div id=\"fna\"</div><table ><td id=\"tb\"onclick=\"editCell(this)\"> "+filename+"</td></table><\div>" ;

  
         //alert(document.getElementById('men'));  
//<div class="menuitems" id="men" url="javascript:ajaxFunction("+fileid+")">Open</div>


     // var s=document.getElementById("fna");
//alert(s);                          	                        
                             
//fid=fileid;
//alert(leafid);
//ajaxRequest.onreadystatechange = callback; 

}
else 
{
newHTML=newHTML+"<img src\=file.png\>"+filename+"";
}


     
				       //alert(this.fileid);
}
                   
                               
                                 var ajaxDisplay = document.getElementById('result');
                  
                               // alert(newHTML);
                                ajaxDisplay.innerHTML=newHTML;

 
//alert(newHTML);
//alert(fileid);
//ajaxDisplay .addEventListener("click",ajaxFunction(),true);

			 }
		  }
	}
  
                             
                        //alert(ajaxRequest.responseText);
 			//var ajaxDisplay = document.getElementById('result');
                       //ajaxDisplay.innerHTML =  ajaxRequest.responseText;


                              //document.getElementByclass('').style.visibility = 'hidden';
                      //document.getElementById('tab').style.visibility = 'hidden';
		        //document.getElementById('fid').value;
	//var pass = document.getElementById('pass').value;
	//var sex = document.getElementById('sex').value;
	var queryString = "fid=" + fid  ;
        //var q1="id="+fid;
        //alert(queryString);
	ajaxRequest.open("GET", "res.php?" + queryString, true);
        //ajaxRequest.onreadystatechange = callback;  
	ajaxRequest.send(null); 
 
                                
}


                         
