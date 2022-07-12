

function addItem(){
    var ul = document.getElementById("list");
    var item = document.getElementById("input");
    var li = document.createElement("li");
	var span = document.createElement("SPAN");
    span.className = "bi bi-eraser";
    
    span.setAttribute('id',item.value);
	
	console.log("creating id" + item.value);
     
    li.appendChild(document.createTextNode(item.value));
	var span2 = document.createElement("SPAN");
	
	li.appendChild(span);
    li.appendChild(span2);
    ul.appendChild(li);
	  
}


function removeItem(e){
    var ul = document.getElementById("list");
    var li = document.getElementById("item");
	console.log("ele id - delete"+ e.id);
    var item = document.getElementById(e.id);
	console.log("del"+item);
    ul.removeChild(item.parentNode);
	console.log("par"+item.parentNode);
}

document.getElementById("additem").addEventListener("click", function(){ addItem();} );





document.getElementById("input").onkeypress = function (event) {
 
            //if ENTER is pressed add the item
            if (event.which == 13) {
               addItem();
            } };


const parent = document.querySelector(".list-group");
	parent.addEventListener("click", function (e) {
	// e.target is the object that generated the event. 
	// to verify that e.target exists and that it is one of the
	// <img> elements. Note: NodeName always returns 	//upper case
	
	 console.log(e.target.id);
	const myElement = document.getElementById('e.target.nodeName');
    console.log(e.target.nodeName+ " "+e.target+" ");
	
	
	
	if (e.target && e.target.nodeName == "LI")
	{     console.log( e.target.lastChild);
	    e.target.classList.toggle('line');
	 e.target.lastChild.classList.toggle('completed');
       	
        
    }
	if (e.target && e.target.nodeName == "SPAN") {
	    console.log("inside I  ");
	     //strikeListEle(e.target);
		removeItem(e.target);
	}
	});


