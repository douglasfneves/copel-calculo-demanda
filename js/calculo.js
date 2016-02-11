
var alteraFases = function() {
	if (parseFloat($("input[name='tensao']:checked").val()) == 13.8) {
		$(".mono").hide();
		$(".bifasico").text(" Monofásico");
	} else {
		$(".mono").show();
		$(".bifasico").text(" Bifásico");
	}
}

var limpaDados = function() {
	$("#corrente-calculada").text("");
	$("#elo-recomendado").text("");
};

var eloRecomendado = function(correnteElo) {
	if (correnteElo <= 9) {
		$("#elo-recomendado").text("6 K");
	}
	else if (correnteElo > 9 && correnteElo <= 15) {
		$("#elo-recomendado").text("10 K");
	}
	else if (correnteElo > 15 && correnteElo <= 22.5) {
		$("#elo-recomendado").text("15 K");
	}
	else if (correnteElo > 22.5 && correnteElo <= 37.5) {
		$("#elo-recomendado").text("25 K");
	}
	else if (correnteElo > 37.5 && correnteElo <= 60) {
		$("#elo-recomendado").text("40 K");
	}
	else if (correnteElo > 60 && correnteElo <= 97.5) {
		$("#elo-recomendado").text("65 K");
	}
	else if (correnteElo > 97.5 && correnteElo <= 120) {
		$("#elo-recomendado").text("80 K");
	}
	else if (correnteElo > 120 && correnteElo <= 150) {
		$("#elo-recomendado").text("100 K");
	}
	else {
		$("#elo-recomendado").text("Lâmina");
	}
};

var calculaCorrente = function(event){
	event.preventDefault();
	var tensaoSelecionada = parseFloat($("input[name='tensao']:checked").val());
	var faseSelecionada = parseFloat($("input[name='fases']:checked").val());
	var demanda = parseFloat($("#demanda").val().replace(",","."));
	var tensao = parseFloat(tensaoSelecionada);
	var corrente = ( demanda / tensao ) * faseSelecionada;
	$("#corrente-calculada").text(corrente.toFixed(2).replace(".",",") + " A");
	var correnteElo = corrente.toFixed(2);
	eloRecomendado(correnteElo);
};

$("#calcula").on("click",calculaCorrente);

$("#limpa").on("click", limpaDados);

$("#13, #34").on("click", alteraFases);
		