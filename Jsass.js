var div=document.querySelector("div");
var div1=document.createElement("div");
div.append(div1);

var color = [];
for(var i = 0;i<10;i++){
    var h3=document.createElement("h3");
    div1.append(h3);
    var object = {};
    var rgb = [];
    for(var j = 0;j<3;j++){
        var r= Math.floor( Math.random()  * 256);
        var g= Math.floor( Math.random()  * 256); 
        var b= Math.floor( Math.random()  * 256); 
        rgb[j]= "rgb("+r+", "+g+", "+b+")";
        var i1=document.createElement("input");
        i1.setAttribute("for","pickColor");
        var r1=document.createElement("input");
        r1.setAttribute("type","radio");
        r1.setAttribute("name","colorchoice");
        r1.setAttribute("id","pickColor");
        // r1.setAttribute("value",rgb[j]);
        var i4=document.createElement("br");

        div1.append(r1); 
        div1.append(i1);
        i1.style.background=rgb[j];
    }
    object = {c1 : rgb[0],c2 : rgb[1],c3 : rgb[2],
        pickColor : rgb[Math.floor( Math.random()  * 3)]

    }
    h3.textContent=object.pickColor;
    div1.append(i4);
    color.push(object);
}