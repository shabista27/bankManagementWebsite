function enableFields(enableFlag){
 document.getElementById('atype').disabled = enableFlag;
 document.getElementById('fname').disabled = enableFlag;					
 document.getElementById('lname').disabled = enableFlag;
 document.getElementById('pwd').disabled = enableFlag;
 document.getElementById('cpwd').disabled = enableFlag;
 document.getElementById('email').disabled = enableFlag;
 document.getElementById('dob').disabled = enableFlag;
 document.getElementById('mob').disabled = enableFlag;
 document.getElementById('nat').disabled = enableFlag;
 document.getElementById('ifsccode').disabled = enableFlag;
 document.getElementById('BranchName').disabled = enableFlag;
}

function init() {
       enableFields(true);
    }
    window.onload = init;



function validate()
{
let cid=document.getElementById('cid').value;
let accNumber=document.getElementById('accNumber').value;

let letters = /^[A-Za-z]+$/;
let number = /^[0-9]+$/ ;
let flag=0;
if(cid.length == 0)
{
alert("Enter the Transaction Id");
flag=1;
}

else if(! (cid.match(number)))
{
alert("Please Enter the Transaction Correctly");
flag=1;
}
else if(accNumber.length == 0)
{
alert("Enter the Account Number");
flag=1;
}

else if(! (accNumber.match(number)))
{
alert("Please Enter the Account Number Transaction Correctly");
flag=1;
}

else
{

console.log(fname+" "+flag);
}

if(flag==0)
{
var myObj = {
		"TransactionId": cid,
		"AccountNumber": accNumber
		};
console.log(myObj);

$.ajax({
	url : "http://localhost:8003/accountValidation",
	datatype : "text",
	type: "POST",
	data:JSON.stringify(myObj),
	 contentType: 'text/plain',
	success : function(response)
	{
		//alert("Registered Successfully")
		enableFields(false);
	},
	error : function(jqXHR, exception){
		enableFields(true);
		if(jqXHR.status == 500){
			alert("Allowance is pending.");
		}
		else{
			alert("There is an issue on the server. Please contact system administrator.");
		}

	},
	complete : function(xhr,status){
	}

});
}


}


function submit()
{
let flag=0;
let atype=document.getElementById('atype').value;
let fname=document.getElementById('fname').value;					
let lname=document.getElementById('lname').value;
let cid=document.getElementById('cid').value;
let pwd=document.getElementById('pwd').value;
let cpwd=document.getElementById('cpwd').value;
let email=document.getElementById('email').value;
let dob=document.getElementById('dob').value;
let mob=document.getElementById('mob').value;
let nat=document.getElementById('nat').value;
let ifsccode=document.getElementById('ifsccode').value;
let BranchName=document.getElementById('BranchName').value;
let accNumber=document.getElementById('accNumber').value;


console.log(dob);
let letters = /^[A-Za-z]+$/;
let number = /^[0-9]+$/ ;
let dobv= /^\d{4}\-\d{1,2}\-\d{1,2}$/;

if(fname.length == 0)
{
alert("Enter the First Name");
flag=1;

}
else if(! (fname.match(letters)))
{
alert("Please Enter the First Name Correctly");
flag=1;
}

else if(lname.length == 0)
{
alert("Enter the Last Name");
flag=1;
}

else if(! (fname.match(letters)))
{
alert("Please Enter the Last Name Correctly");
flag=1;
}

else if(cid.length == 0)
{
alert("Enter the Transaction Id");
flag=1;
}

else if(! (cid.match(number)))
{
alert("Please Enter the Transaction Correctly");
flag=1;
}

else if(pwd.length == 0)
{
alert("Enter the Password");
flag=1;
}
else if(cpwd.length == 0)
{
alert("Enter the Confirm Correctly");
flag=1;
}
else if(pwd!= cpwd)
{
alert("Please Enter the Password Correctly");
flag=1;
}


else if(email.length == 0)
{
alert("Enter the E-mail");
flag=1;
}

else if(dob.length == 0)
{
alert("Enter the Date Of the Birth");
flag=1;
}

else if(! (dob.match(dobv)))
{
alert("Please Enter the Date Of Birth Correctly");
flag=1;
}

else if(mob.length == 0)
{
alert("Enter the Mobile Number");
flag=1;
}
else if(! (mob.match(number)))
{
alert("Please Enter the Mobile Number Correctly");
flag=1;
}

else if(nat.length == 0)
{
alert("Enter the Nationality");
flag=1;
}
else if(! (nat.match(letters)))
{
alert("Please Enter the Nationality Correctly");
flag=1;
}
else if(accNumber.length == 0)
{
alert("Enter the Account Number");
flag=1;
}

else if(! (accNumber.match(number)))
{
alert("Please Enter the Account NumberTransaction Correctly");
flag=1;
}
else if(ifsccode.length == 0)
{
alert("Enter the ifsc code Id");
flag=1;
}

else if(! (ifsccode.match(number)))
{
alert("Please Enter the ifsc code Correctly");
flag=1;
}

else if(BranchName.length == 0)
{
alert("Enter the Branch Name Id");
flag=1;
}

else if(! (BranchName.match(letters)))
{
alert("Please Enter the Branch Name Correctly");
flag=1;
}

else
{

console.log(fname+" "+flag);
}

if(flag==0)
{
var myObj = {
		"AccType":atype,
		"FName":fname,
		"LName":lname,
		"TransactionId":cid,
		"AccountNumber":accNumber,
		"TransactionPassword":pwd,
		"Email":email,
		"DOB":dob,
		"PhNumber":mob,
		"Nationality":nat,
		"BranchName":BranchName,
		"IFSCcode":ifsccode
		};
console.log(myObj);

$.ajax({
	url : "http://localhost:8003/registration",
	datatype : "text",
	type: "POST",
	data:JSON.stringify(myObj),
	 contentType: 'text/plain',
	success : function(response)
	{
		alert("Registered Successfully");
		location.replace("index.html");

	},
	complete : function(xhr,status){
		
	}

});
}
}


