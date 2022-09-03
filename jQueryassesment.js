    
var d = new Date();
var month = d.getMonth()+1;
var day = d.getDate();
var output = d.getFullYear() + '-' +
    (month<10 ? '0' : '') + month + '-' +
    (day<10 ? '0' : '') + day;

var firstarr = [];
var secondarr = [];


$("#add").click(function(){
    var enter = $("#enter").val();
    var date = $("#date").val();
    if(enter.length == 0 && date.length == 0)
    {
        $("#alert").append("Enter the field");
        console.log(date.length);
    }
    else
    {
        var li1 = enter+"-"+date
        $("#list").append("<tr class='select'><td>"+enter+"</td><td>"+"-"+date+"</td></tr>");
        console.log(date.length);
        var enter = $("#enter").val("");
        var date = $("#date").val("");
        $("#alert").text("")
        firstarr.push(li1);
    }
});

$("#erase").click(function(){
    var enter = $("#enter");
    var date = $("#date");
    enter.val("");
    date.val("");
});

$("#list").on("click","tr",function(){
    var com = $(this).text();
    $("#complite").append("<tr><td>"+com+"</td></tr>");
    secondarr.push(com);
    $("#percent").text("");
    prog();
});

$("#complite").on("click","tr",function(){
    $(this).remove();
});

$("#searchbar").click(function(){
    $("#input1").addClass("dis");
    $("#input2").removeClass("dis");
});
$("#addnew").click(function(){
    $("#input1").removeClass("dis");
    $("#input2").addClass("dis");
});

function prog()
{
    var a = firstarr.length;
    var b = secondarr.length;
    var percent = b / a * 100;
    $("#percent").append(percent);
}