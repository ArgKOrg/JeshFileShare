//Browser Support Code
function logon(){
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
		if(ajaxRequest.readyState == 4){
                        //alert(ajaxRequest.responseText);
			var ajaxDisplay = document.getElementById('logon');
                       
		        ajaxDisplay.innerHTML = ajaxRequest.responseText;
                         document.getElementById('login').style.visibility = 'hidden';
                      document.getElementById('tab').style.visibility = 'hidden';
		}
	}
	var user = document.getElementById('username').value;
	var pass = document.getElementById('pass').value;
	//var sex = document.getElementById('sex').value;
	var queryString = "?username=" + user + "&pass=" + pass ;
	ajaxRequest.open("GET", "signin.php" + queryString, true);
	ajaxRequest.send(null); 
}
