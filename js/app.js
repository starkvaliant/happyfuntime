$(".container form").submit(function (event) {
	event.preventDefault();
	var inputValue = $("input", this).val();
	$("#tasks ol").append("<li>" + inputValue + "</li>");
});