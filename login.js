function login()
{

let flag=0;
let tid=document.getElementById('cid').value;
let pwd=document.getElementById('pwd').value;
console.log(cid);
let number = /^[0-9]+$/ ;
let letters = /^[A-Za-z]+$/;
if(tid.length == 0)
{
alert("Enter the Transaction Id");
flag=1;
}
else if(tid.match(letters))
{
alert("Please Enter the Transaction Id Correctly");
flag=1;
}
else if(pwd.length == 0)
{
alert("Enter the Password");
flag=1;
}
/*else
{
alert("Logged in successfully");
}*/

if(flag==0)
{
var myObj = {	
		"TransactionId":tid,
		"Password":pwd
		
		};
console.log(myObj);

$.ajax({
	url : "http://localhost:8003/login",
	datatype : "text",
	type: "POST",
	data:JSON.stringify(myObj),
	 contentType: 'text/plain',
	success : function(response)
	{
//		alert(response);
		location.replace("index.html");
		//alert("Registered Successfully");
		
	},
error : function(jqXHR, exception){
	if(jqXHR.status == 500){
		alert("Transaction Id / Password is incorrect. Please try with correct entries.");
	}
	else{
		alert("There is an issue on the server. Please contact system administrator.");
	}

},
	complete : function(xhr,status){
	//alert("complete");	
	}

});
}

}

