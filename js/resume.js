var para;
var paravalue;
var query=window.location.search.substring(1).split("?");
for(var i in query){
  para=query[i].split("=");
  paravalue=parseInt(para[1]);
}

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
  store=request.createObjectStore
  ("formdata",{keyPath:"id",autoIncrement:true});
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
 var info=store.get(paravalue);
 info.onsuccess=function(data){
   console.log(data);
   persinfo(data.target.result);

 }
}
var left=document.querySelector(".left");
var right=document.querySelector(".right");
function persinfo(pi){
  var head=document.createElement("h1");
  head.textContent="Profile";
  left.append(head);

  var image=document.createElement("img");
  image.src="images/pic1.svg";
  image.alt=pi.name;
  left.append(image);

  left.append(document.createElement("br"));

    var name=document.createElement("name");
  name.textContent=pi.name;
  left.append(name);

  left.append(document.createElement("br"));

    var age=document.createElement("age");
  age.textContent=pi.age;
  left.append(age);

  left.append(document.createElement("br"));

    var gender=document.createElement("gender");
  gender.textContent=pi.gender;
  left.append(gender);

  left.append(document.createElement("br"));

    var address=document.createElement("address");
  address.textContent=pi.address;
  left.append(address);

  left.append(document.createElement("br"));

    var phoneno=document.createElement("phoneno");
  phoneno.textContent=pi.phoneno;
  left.append(phoneno);

  left.append(document.createElement("br"));

    var email=document.createElement("email");
  email.textContent=pi.email;
  left.append(email);

  left.append(document.createElement("br"));

    var h1=document.createElement("h1");
  h1.textContent="Career objective"
  right.append(h1);

  right.append(document.createElement("hr"));

  var career=document.createElement("career");
  career.textContent=pi.career;
  right.append(career);

  var head1=document.createElement("h2");
  head1.textContent="Education Details";
  right.append(head1);

  right.append(document.createElement("hr"));

  var table=document.createElement("table");
  table.border="1";
  var tr1="<tr><th>institute</th><th>branch</th><th>yop</th><th>per</th></tr>";
  var tr2=" ";
  for(var i in pi.education)
  {
    tr2=tr2+"<tr><td>"+pi.education[i].institute+"</td><td>"
    +pi.education[i].branch+"</td><td>"
    +pi.education[i].yop+"</td><td>"
    +pi.education[i].per+"</td></tr>"
  }
  table.innerHTML=tr1+tr2;
  right.append(table);

  var h1=document.createElement("h1");

  h1.textContent="Skills";
  right.append(h1);
  right.append(document.createElement("hr"));

var skills=document.createElement("skills");
skills.textContent=pi.skills;
right.append(skills);

}
