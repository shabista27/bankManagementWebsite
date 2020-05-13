function validate()
{
let accountNumber=document.getElementById('accountNumber').value;
let branchName=document.getElementById('branchName').value;
let ifscCode=document.getElementById('ifscCode').value;
console.log(accountNumber);
if(accountNumber=='1000' && ifscCode=='120')
{
alert('Going for validation');
}
else
{
alert('Improper data');
}

}

/*
const xhr = new XMLHttpRequest();

// 2. Configure it: GET-request for the URL /article/.../load
xhr.open('POST', 'http://localhost:8001/getDetails',false);

// 3. Send the request over the network
xhr.send();

// 4. This will be called after the response is received
xhr.onload = function() {
  if (xhr.status != 200) { // analyze HTTP status of the response
    alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
  } else { // show the result
    alert(`Done, got ${xhr.response.length} bytes`); // response is the server
  }
};

xhr.onprogress = function(event) {
  if (event.lengthComputable) {
    alert(`Received ${event.loaded} of ${event.total} bytes`);
  } else {
    alert(`Received ${event.loaded} bytes`); // no Content-Length
  }

};

xhr.onerror = function() {
  alert("Request failed");
};
*/


$.ajax({
	url : "http://localhost:8004/getDetails",
	datatype : "jsonp",
	type: "POST",
	body: "Heello",
	success : function(response)
	{
		document.getElementById('accountNumber').value=response;
		alert(response);
	},
	complete : function(xhr,status){
	alert("My life is awesome");	
	}

});
