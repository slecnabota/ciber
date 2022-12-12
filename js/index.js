function init(){

 var text = function makePhrases() {
 var words1 = ["WanTIt,", "PrmWL;s", "93059"];
 var words2 = ["passWO20", "New"];
 var words3 = ["Sl__", "XcYLh7"];
 var words4 = ["year10!", "w23kLSi"];
 
 var rand1 = Math.floor(Math.random() * words1.length);
 var rand2 = Math.floor(Math.random() * words2.length);
 var rand3 = Math.floor(Math.random() * words3.length);
 var rand4 = Math.floor(Math.random() * words4.length);
 var phrase = words1[rand1] + words2[rand2] + words3[rand3] + words4[rand4] + "!";
 return phrase;
 }

 document.getElementById('generate').onclick = 
 function(){ document.getElementById('text').innerHTML = text(); };
 
}
window.onload = init;