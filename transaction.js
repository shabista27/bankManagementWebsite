function trans()
{
let cid=document.getElementById('cid').value;
let ano=document.getElementById('ano').value;
let anum=document.getElementById('anum').value;
let pwd=document.getElementById('pwd').value;
let amount=document.getElementById('amount').value;
console.log(cid);
if(cid== '')
{
alert("Enter the Customer Id");
}
else if(isNaN(cid))
{
alert("Please Enter the Customer Id Correctly");
}
else if(ano== '')
{
alert("Enter the Account Number");
}
else if(isNaN(ano))
{
alert("Enter the Account Number Properly");
}
else if(anum== '')
{
alert("Enter the Transfer Account Number");
}
else if(isNaN(anum))
{
alert("Enter the Transfer Account Number Properly");
}
else if(pwd== '')
{
alert("Enter the Password");
}else if(amount===''){

alert("Enter the Password");
}
else
{


var myObj = {	
		"TransactionId":cid,
		"FromAccount":ano,
		"ToAccount":anum,
		"TransactionPwd":pwd,
		"TransactionAmt":amount
		};



$.ajax({
	url : "http://localhost:8003/transaction",
	datatype : "text",
	type: "POST",
	data:JSON.stringify(myObj),
	 contentType: 'text/plain',
	success : function(response)
	{
		alert("Transferred Amount: "+amount);
		location.replace("Account_Detail.html");
		
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
