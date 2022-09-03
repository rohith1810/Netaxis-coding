// $("input[type=text]").keypress(
//     (firstclick)=>{
//         if(firstclick.which===13){
//             alert("enter clicked");
//         }
//     }
// );
$("input[type=text]").keypress(yhg);
function yhg (rohit){
    // if(rohit.which===13){
    //     alert("enter clicked");
    // }
}
$("h2").on("mouseenter",function(){
    $(this).css("color","red")
});
$("h2").on("mouseout",function(){
    $(this).css("color","green")
});
$("#bt1").on("click",btnclick);
function btnclick(){
    newtodo = $('#text1').val();
    if(newtodo.length == 0){
        alert("please enter something");
    }else{
    $('.div1').append($('<li>').html($("#text1").val()).append($('<button><i class="fa-solid fa-trash"></i></button>').addClass('delete')).append($('<button><i class="fa-solid fa-eraser"></i></button>').addClass('edit')));
    $("#text1").val("");
   
    $('.delete').css({ "width":"50px",'color':"red",'height':'50px','border-radius':'50%','float':'right'});
    $('.edit').css({"width":"50px",'color':"green",'height':'50px','border-radius':'50%','float':'right'});
    $('li').css({
            'width':'400px',
            'height':'50px',
            'margin-top':'20px',
            "list-style":"decimal",
            "font-size": "30px",
            "font-style": "italic",
            "color": "orangered"         
    })
    $('li').on('click',".delete",function(){
       $(this).parent().remove(); 
    });   
    $('li').on('click','.edit',function(){
        // alert("Are you sure ! for edit");
       $('#text1').val($(this).parent().text());
       $(this).parent().fadeOut(); 
       
    })
}}































