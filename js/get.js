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

var info=store.getAll();
info.onsuccess=function(data){
  console.log(data.target.result);
  display(data.target.result);
}
var parent=document.querySelector(".parent");
function display(d){
  for(var i=0;i<d.length;i++){
    var child=document.createElement("div");
    child.classList.add("child");
    var image=document.createElement("img");
    image.src="images/pic1.svg";
    image.alt=d[i].name;
    child.append(image);
    var link=document.createElement("a");
    link.classList.add("link");
    link.href="resume.html?id="+d[i].id;
    link.textContent="viewprofile";
    child.append(link);
    var head=document.createElement("h3");
    head.innerHTML=d[i].name;
    child.append(head);
    parent.append(child);

    }
  }

}
