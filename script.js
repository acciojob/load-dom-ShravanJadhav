//your JS code here. If required.


document.addEventListener("loadDom", function(){
	let h1 = document.createElement("h1");
h1.innerHtml="DOM load success";
document.body.append(h1);
})