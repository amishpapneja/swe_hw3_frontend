class Survey {}
$(function() {
});  

function validate(){
  $("#valErrors").empty();
  var invalid = [];
  var alphas = ["FirstName","LastName", "City", "State"];
  var numerics = ["Zip"];
  var alphanumerics = ["Address"];
  var emails = ["email"];
  var radioCount = radio('interest');
  var data = ["Data"];
  if (radioCount ==0){
    invalid.push("<li>Please select how you became interested in the university</li>");
  }
  var checkedCount = checkBoxes('campus');
  if (checkedCount<2){
    invalid.push("<li>Please select 2 or more things you liked about the campus</li>");
  }
  alphas.forEach(function(a){
    if (alphabets($("#"+a).val()) == false){
      invalid.push("<li>" +a + " can only contain alphabet characters </li>");
      $("#"+a).val("");
    }
  })
  numerics.forEach(function(a){
    if (numeric($("#"+a).val()) == false){
      invalid.push("<li>" +a + " can only contain numeric values</li>");
      $("#"+a).val("");
    }
  });
  alphanumerics.forEach(function(a){
    if (alphanumeric($("#"+a).val()) == false){
      invalid.push("<li>" +a + " can only contain alphanumeric values</li>");
      $("#"+a).val("");
    }
  });
  emails.forEach(function(a){
    if (validEmail($("#"+a).val()) == false){
      invalid.push("<li>" +a + ": " + $("#"+a).val() + " is not a valid email address</li>");
      $("#"+a).val("");
    }
  });
  if(invalid.length <1){
	  return true;
  }else{
	  invalid.forEach(element =>
	    $("#valErrors").append(element)
	  )
	  return false; 
  }
}
function checkBoxes(txt){
  var count=0;
  $("input[type='checkbox'][name=" + txt +" ]").each(function(i, element){
    if ($(element).is(":checked")){
      count++;
    }
  });
  return count;
}
function radio(txt){
  var count=0;
  $("input[type='radio'][name=" + txt +" ]").each(function(i, element){
    if ($(element).is(":checked")){
      count++;
    }
  });
  return count;
}
function alphabets(txt)
  {
   var letters = /^[A-Za-z]+$/;
   if(txt.match(letters))
   {return true;}
   else
   {return false;}
}
function alphanumeric(txt)
{
 var chars = /^[0-9a-zA-Z]+$/;
 if(txt.match(chars)) 
  {return true;}
else
  {return false;}
}
function validEmail(txt)
{
 var chars = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 if(txt.match(chars)) 
  {return true;}
else
  {return false;}
}
function numeric(txt)
{
 var chars = /^\d+$/;
 if(txt.match(chars)) 
  {return true;}
else
  {return false;}
}
function validData(txt)
{
	var numbers = txt.split(",");
	var valid;
	if (numbers.length<10){
	  return false;
	}else{
		invalid = numbers.some(function(e){
		  return isNaN(e);
		});
		if (invalid){
		  return false;
		}
	}
}