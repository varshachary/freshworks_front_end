//function to create an element
function createElement(element){
    return document.createElement(element);
}
//function for apppending the elements
function append(parent,child){
 return parent.appendChild(child);
}
function setClassName(element , name){
  element.className=name;
  return element;
}
function fetchAPI(link,input){
 const container=document.getElementById('container');
//fetches the api from the browser
 fetch(link)
 .then((resp) => resp.json())
 .then(function(data){

    return data.map(function(country){
      //create elements div,img and anchor tag to store the information
       let div=setClassName(createElement("div"),"box");
       let a=setClassName(createElement("a"),"");
       let img=createElement("img","");
       let span=createElement("span","");
//store the data in their elements
       img.src=country.flag;

       span.innerHTML=country.name;
//append the elements to the div
       append(div,img);
       append(div,span);

       append(a,div);
       //store it in the container
       append(container,a);
    })
 })
 //incase of a fail in full text match
 .catch(function(error){
      console.log(link + " "+error);
//for partial matching countries
             const url="https://restcountries.eu/rest/v2/name/united";
            let input=document.getElementById('search').value;
            fetchAPI(url,input);
 })
}
//countries that exactly match
function country_hunt(){
 const url="https://restcountries.eu/rest/v2/name/";
 let input=document.getElementById('search').value;
let link = url + input + "?fullText=true";
 fetchAPI(link,input);
}
