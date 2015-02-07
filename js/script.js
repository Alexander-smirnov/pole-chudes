
$("#submit").submit (function () {
var x=document.forms["myForm"]["name"].value;
var y = Math.round((Math.random() * (10 - 1) + 1));
console.log (y);
if (x==null || x=="")
  {
  alert("You must write somesing here");
  return false;
  } else {
	  x = parseInt(x);
	  if ( x < 1 || x > 10) {
		alert("Incorrect number. Number must be greater than 1 and less than 10");
	  } else {
	  
	  if (x === y) {
		 alert("Success!"); 
	  } else {
		  alert("Failed!");
	  }
	  
	 return false; 
  }
  }
});


