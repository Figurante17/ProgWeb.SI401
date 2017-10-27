var jogador = 'xis';
var jogada = 0;
function checkJogo(id){
	var src = checkSrc(id);
	if (src == "branco.jpg"){
		document.getElementById(id).src = "img/" + jogador + ".jpg";
		jogada++;
		if(checkVitoria()){
			alert("FIM DE JOGO! VITORIA DE " +jogador);
			location.reload();
		}
		if(jogada >=9){
			alert("EMPATE, FIM DE JOGO");
			location.reload();
		}
		if (jogador == 'xis'){
			jogador = 'bola';
		}else{
			jogador = 'xis';
		}
	}
}

function checkSrc(id){
	var src = document.getElementById(id).src;
	return src.substring(src.length - 10, src.length);
}

function checkVitoria(){
	if((checkSrc('c1') == checkSrc('c2')) && (checkSrc('c1') == checkSrc('c3')) && (checkSrc('c1') != 'branco.jpg')) {
		return true;
	}
	if((checkSrc('c4') == checkSrc('c5')) && (checkSrc('c4') == checkSrc('c6')) && (checkSrc('c4') != 'branco.jpg')) {
		return true;
	}
	if((checkSrc('c7') == checkSrc('c8')) && (checkSrc('c7') == checkSrc('c9')) && (checkSrc('c7') != 'branco.jpg')) {
		return true;
	}
	if((checkSrc('c1') == checkSrc('c4')) && (checkSrc('c1') == checkSrc('c7')) && (checkSrc('c1') != 'branco.jpg')) {
		return true;
	}
	if((checkSrc('c2') == checkSrc('c5')) && (checkSrc('c2') == checkSrc('c8')) && (checkSrc('c2') != 'branco.jpg')) {
		return true;
	}
	if((checkSrc('c3') == checkSrc('c6')) && (checkSrc('c3') == checkSrc('c9')) && (checkSrc('c3') != 'branco.jpg')) {
		return true;
	}
	if((checkSrc('c1') == checkSrc('c5')) && (checkSrc('c1') == checkSrc('c9')) && (checkSrc('c1') != 'branco.jpg')) {
		return true;
	}
	if((checkSrc('c3') == checkSrc('c5')) && (checkSrc('c3') == checkSrc('c7')) && (checkSrc('c3') != 'branco.jpg')) {
		return true;
	}
	return false;
}