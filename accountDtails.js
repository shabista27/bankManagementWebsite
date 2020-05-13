
function init() {
      document.getElementById('table_details').style.visibility = "hidden";
    }
window.onload = init;



function appendTOFields(accDetail){
  document.getElementById('table_details').style.visibility = "visible";
var enableFlag=true;
console.log(accDetail);
document.getElementById('cid').disabled = enableFlag;
 document.getElementById('fname').disabled = enableFlag;					
 document.getElementById('lname').disabled = enableFlag;
 document.getElementById('pwd').disabled = enableFlag;
 document.getElementById('accNumber').disabled = enableFlag;
 document.getElementById('email').disabled = enableFlag;
 document.getElementById('dob').disabled = enableFlag;
 document.getElementById('mob').disabled = enableFlag;
 document.getElementById('nat').disabled = enableFlag;
 document.getElementById('ifsccode').disabled = enableFlag;
 document.getElementById('BranchName').disabled = enableFlag;


document.getElementById('cid').value=accDetail.TransactionId;
 document.getElementById('fname').value=accDetail.FName;
 document.getElementById('lname').value=accDetail.LName;
 document.getElementById('pwd').value=accDetail.TransactionPassword;
 document.getElementById('accNumber').value=accDetail.AccountNumber
 document.getElementById('email').value=accDetail.balance;
 document.getElementById('dob').value=new Date(accDetail.DOB).getDate()+" / "+new Date(accDetail.DOB).getMonth()+" / "+new Date(accDetail.DOB).getFullYear();
 document.getElementById('mob').value=accDetail.PhNumber;
 document.getElementById('nat').value=accDetail.Nationality;
 document.getElementById('ifsccode').value=parseInt(accDetail.IFSCcode);
document.getElementById('BranchName').value=accDetail.BranchName;


}

function submit()
{
let flag=0;
let anum=document.getElementById('anum').value;
let tid=document.getElementById('tid').value;
console.log(anum);
console.log(tid);
let number = /^[0-9]+$/ ;

if(anum.length == 0)
{
alert("Enter the Account Number");
flag=1;
}
else if(!(anum.match(number)))
{
alert("Please Enter the Account Number Correctly");
flag=1;
}
else if(tid.length==0)
{
alert("Enter the Transaction Id code");
flag=1;
}

else if(!(tid.match(number)))
{
alert("Please Enter the Transaction Id Correctly");
flag=1;
}





if(flag==0)
{
var myObj = {	
		"TransactionId":tid,
		"AccountNumber":anum
		
		};
console.log(myObj);

$.ajax({
	url : "http://localhost:8003/accountDetails",
	datatype : "text",
	type: "POST",
	data:JSON.stringify(myObj),
	 contentType: 'text/plain',
	success : function(response)
	{
//		alert(response);
		var accDetail = JSON.parse(response);
		appendTOFields(accDetail);
		//alert("Registered Successfully");
		
	},
error : function(jqXHR, exception){
	if(jqXHR.status == 500){
		alert("Transaction Id / Password is incorrect. Please try with correct entries.");
	}
	else{
		alert("There is an issue on the server. Please contact system administrator.");
	}
      document.getElementById('table_details').style.visibility = "hidden";

},
	complete : function(xhr,status){
	//alert("complete");	
	}

});
}

}



