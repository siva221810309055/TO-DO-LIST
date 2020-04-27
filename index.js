$("span").click(function()
{
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
        
    })
});
$("li").click(function()
{
    $(this).css("text-decoration","line-through");
});
$("input").keypress(function()
{
    if(event.which===13)
    {
       var value=$(this).val();
       console.log(value);
       $("ul").append("<li><span><i class='fa fa-trash'></i></span>"+value+"</li>");
       $(this).val("");
    }
    $("span").click(function()
{
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
        
    })
});
$("li").click(function()
{
    $(this).css("text-decoration","line-through");
});
    });
    

$(".fa-plus").click(function()
{
    $("input").focus(); 
});
