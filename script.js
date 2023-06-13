//your JS code here. If required.


document.addEventListener("loadDom", function(){
	 let body = document.querySelector("body");
body.innerHTML = "";
	var message = document.createTextNode("DOM load success");
 body.appendChild(message);
});