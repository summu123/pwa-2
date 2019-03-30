function submitdata(){

  var career=document.querySelector("#career").value;
  var name=document.querySelector("#name").value;
  var age=document.querySelector("#age").value;
  var gender=document.querySelector("#gender").value;
  var address=document.querySelector("#address").value;
  var phoneno=document.querySelector("#phoneno").value;
  var email=document.querySelector("#email").value;
  var institute=document.querySelector("#ginstitute").value;
  var branch=document.querySelector("#gbranch").value;
  var yop=document.querySelector("#gyop").value;
  var gper=document.querySelector("#gper").value;
  var college=document.querySelector("#iinstitute").value;
  var ibranch=document.querySelector("#ibranch").value;
  var iyop=document.querySelector("#iyop").value;
  var igper=document.querySelector("#iper").value;
  var school=document.querySelector("#sinstitute").value;
  var sbranch=document.querySelector("#sbranch").value;
  var syop=document.querySelector("#syop").value;
  var sgper=document.querySelector("#sper").value;
  var skills=document.querySelector("#skills").value;
  // var button=document.querySelector("#button").value;

// IndexedDB implementation

var idb=window.indexedDB || window.mozIndexedDB || window.msIndexedDB || window.webkitIndexedDB ;

if(!idb in window)
{
  console.log("indexedDB is not supported");
}

// IndexedDB creation
var request;
var store;
var open=idb.open("storeData",1);

console.log("IndexedDB is created");

open.onupgradeneeded=function (t){
  request=t.target.result;
  store=request.createObjectStore("formdata",{keyPath:"id",autoIncrement:true});
console.log("store is created");
}
open.onerror=function(e)
{
  console.log("error is occured");
}

open.onsuccess=function(s){
 request=s.target.result;
 var transaction=request.transaction
 ("formdata","readwrite");
 store=transaction.objectStore("formdata");
 store.put({
   career: career,
   name: name,
   age: age,
   gender: gender,
   address: address,
   phoneno: phoneno,
   email: email,

   education:
   [{
   institute:institute,
   branch:branch,
   yop:yop,
   per:gper,
 },
 {
   institute:college,
   branch:ibranch,
   yop:iyop,
   per:igper,
 },
 {
   institute:school,
   branch:sbranch,
   yop:syop,
   per:sgper,
 }],
   skills:skills

 });
}


window.open("index.html");
}
