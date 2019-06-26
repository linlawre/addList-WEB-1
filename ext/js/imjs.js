$("ul").on("click", "li", function()
{
	$(this).toggleClass("itemClick");
})


$("ul").on("click", "span", function(event)
{
	$(this).parent().fadeOut(500, function(){ $(this).remove(); });
	event.stopPropagation();
})

$("input[type='text']").keypress(function(event){
	if(event.which === 13)
	{
		var text = $(this).val();
		$("ul").append("<li>" + "<span><i class='far fa-trash-alt'></i></span>" + " " + text + "</li>");
		$(this).val("");
	}
})