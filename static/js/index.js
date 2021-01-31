/*var li = document.querySelector('li');
console.log(li);*/
var content = document.querySelector('.name');
function setValue(value){
    content.textContent = value;
}
var idx =1;
function getsubstring(value,idx){
    return value.substring(0,idx);
}
var value ='Rashika Dabas.';
var i=1;
setInterval(function(){
    var substring =getsubstring(value,i);
    setValue(substring);
    if(i===value.length){
        idx=-1;
    }
    if(i===0){
        idx=1;
    }
    i=i+idx;
},100);
