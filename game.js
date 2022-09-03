var numsq = 6;
var color = generate(numsq);
var sqr = document.querySelectorAll(".square");
var piccolor = pickcolor();
var coldisplay = document.getElementById("coldis");
var msgdis = document.querySelector("#message");
var resbtn = document.querySelector("#reset");
var h1 = document.querySelector("h1");
var hardbtn = document.querySelector("#hard");
var easybtn = document.querySelector("#easy");

easybtn.addEventListener("click", function(){
    hardbtn.classList.remove("btncol");
    easybtn.classList.add("btncol");
    numsq = 3;
    color = generate(numsq);
    piccolor = pickcolor();
    coldisplay.textContent = piccolor;
    for(var i=0; i<sqr.length; i++)
    {
        if(color[i])
            {
                sqr[i].style.background = color[i];
            }
        else
        {
            sqr[i].style.display = "none";
        }
    }
});

hardbtn.addEventListener("click", function(){
    hardbtn.classList.add("btncol");
    easybtn.classList.remove("btncol");
    numsq = 6;
    color = generate(numsq);
    piccolor = pickcolor();
    coldisplay.textContent = piccolor;
    for(var i=0; i<sqr.length; i++)
    {
        sqr[i].style.background = color[i];
        sqr[i].style.display = "block";
    }
});

resbtn.addEventListener("click", function(){
    color = generate(numsq);
    piccolor = pickcolor();
    coldisplay.textContent = piccolor;
    this.textContent = "New Colors";
    msgdis.textContent = "";
    for(var i=0; i<sqr.length; i++)
    {
        sqr[i].style.background = color[i];
    }
    h1.style.background = "steelblue";
});

coldisplay.textContent = piccolor;

for(var i = 0; i < sqr.length; i++)
{
    sqr[i].style.background = color[i];
    sqr[i].addEventListener("click",function(){
        var clickcol = this.style.background;
        if(clickcol === piccolor)
        {
            msgdis.textContent = "Correct!";
            resbtn.textContent = "Play Again?";
            change(clickcol);
            h1.style.background = clickcol;
        }
        else
        {
            this.style.background = "#232323";
            msgdis.textContent = "Try Again";
        }
    });
}

function change(color)
{
    for(var i = 0; i < sqr.length; i++)
    {
        sqr[i].style.background = color;
    }
}

function pickcolor()
{
    var random = Math.floor(Math.random() * color.length);
    return color[random];
}

function generate(num)
{
    var arr = [];
    for(var i = 0; i<num; i++)
    {
        arr.push(rancol());
    }
    return arr;
}

function rancol()
{
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb("+r+", "+g+", "+b+")";
}