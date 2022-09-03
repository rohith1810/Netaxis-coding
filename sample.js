var generatebutton = document.getElementById('genebtn');
var addtopbutton = document.getElementById('addtop');
var addbottombutton = document.getElementById('addbtm')
var removetopbutton = document.getElementById('removetop')
var removebottombutton = document.getElementById('removebtm')
var colordisplay = document.getElementById('displaycolor')
var color = colordisplay.style.background;
var redsort = document.getElementById('rdsort');
var greensort = document.getElementById('grsort');
var bluesort = document.getElementById('blsort');
var copyfrom = document.getElementById('fromnum');
var copyto = document.getElementById('tonum');
var copylist = document.getElementById('copy');
var nextpagecopy = document.getElementById('copycontent');
var printtext = [];
var text = document.getElementById('textdisplay');
var cutfrom = document.getElementById('cutnum');
var cutto = document.getElementById('numto');
var cutcontent = document.getElementById('cut');
textneeddisplay = document.getElementById('textcontentdisplay');
function genercolors()
{
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var bg="rgb("+r+", "+g+", "+b+")"; 
    document.getElementById('displaycolor').style.background=bg;
    fullnamecolor="Red: "+r+" ,Green:"+g+" ,Blue:"+b+"";
   
}
addtopbutton.addEventListener("click",function(){
    var newdiv = document.createElement("div");
    newdiv.style.cssText="color:purple;font-size:25px; border:2px solid black;text-align:center;"
    printtext.unshift(fullnamecolor);
    newdiv.textContent= printtext[0];
    text.prepend(newdiv);
})
addbottombutton.addEventListener("click",function(){
    var newdiv = document.createElement("div");
    newdiv.style.cssText="color:purple;font-size:25px; border:2px solid black;text-align:center;"
    printtext.push(fullnamecolor);
    newdiv.textContent= printtext[printtext.length-1];
    text.append(newdiv);
})
removetopbutton.addEventListener("click",function(){
    var list = document.getElementById("textdisplay");
    list.removeChild(list.firstElementChild);
})
removebottombutton.addEventListener("click",function(){
    var divelement = document.getElementById("textdisplay");
    divelement.removeChild(divelement.lastElementChild);
})
copylist.addEventListener("click",function(){
    var a = copyfrom.value;
    var b = copyto.value;
    for(var i = a; i<b;i++){
        var newdivcontainer = document.createElement("div");
        newdivcontainer.textContent = printtext[i];
        nextpagecopy.append(newdivcontainer);  
    }
})
cutcontent.addEventListener("click",function(){  
    text.style.cssText="display:none;"
    var a = cutnum.value;
    var b = cutto.value;
    var d = b-a; 
    for(var j = a; j<b;j++){
        var newdivcontain = document.createElement("div");
        newdivcontain.textContent = printtext[j];
        nextpagecopy.appendChild(newdivcontain);
        }
        printtext.splice(a, d);
        console.log(printtext);
        var c=printtext.length;
    for(var i = 0; i<c+1;i++){

        var newdiv = document.createElement("div");
        newdiv.style.cssText="color:purple;font-size:25px; border:2px solid black;text-align:center;"
        newdiv.textContent= printtext[i];
        textneeddisplay.prepend(newdiv);
        }
    }
)
redsort.addEventListener("click",function(){
    text.style.cssText="display:none;"
    var sortedprint = printtext.sort((b, c)=>{
        if(b>c)return 1;
        else if(c>b) return-1;
        else return 0;
        });
        console.log(sortedprint);
    for(var i = 0;i<sortedprint.length;i++){
        var newdiv = document.createElement("div");
        newdiv.style.cssText="color:purple;font-size:25px; border:2px solid black;text-align:center;"
        newdiv.textContent= sortedprint[i];
        textneeddisplay.prepend(newdiv);
    }
})
