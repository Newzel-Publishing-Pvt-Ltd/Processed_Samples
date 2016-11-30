var el;
$(function () {
	LoadChart(0,100);
});
function LoadChart(varcorrect,varwrong) {
	$("#dvChart").html("");
	$("#dvLegend").html("");
	el = document.createElement('canvas');
	$("#dvChart")[0].appendChild(el);
	
	
	var div = $("<div />");
	div.css("margin-bottom", "10px");
	div.html("<span style = 'display:inline-block;height:10px;width:10px;background-color:" + 'green' + "'></span> " + 'Correct Answer' + '<br/>' +  "<span style = 'display:inline-block;height:10px;width:10px;background-color:" + 'red' + "'></span> " + 'wrong Answer');
	$("#dvLegend").append(div);
	
	$("input.correctAnswer").click(function(){
		
		varcorrect = (((((varcorrect/100)*5) + 1)/5) * 100);
		varwrong = (((((varwrong/100)*5) - 1)/5) * 100);
		chartFunction(varcorrect,varwrong);
	});
	
		
	$("input.wrongAnswer").click(function(){
		varwrong = 100;
		chartFunction(varcorrect,varwrong);
	});
	//Populate data for the chart
}

function chartFunction(varcorrect,varwrong){
	var results = new Array();

	var correct = {};
	correct.text = "Correct Answer";
	correct.value = varcorrect;
	correct.color = "green";

	var wrong = {};
	wrong.text = "Wrong Answer";
	wrong.value = varwrong;
	wrong.color = "red";


	results.push(correct);
	results.push(wrong);

	

	//Fix for IE 8
	if ($.browser.msie && $.browser.version == "8.0") {
		G_vmlCanvasManager.initElement(el);
	}
	var ctx = el.getContext('2d');
	var chart = new Chart(ctx).Pie(results);

}