$(document).ready(function(){
	
    if (window.localStorage.getItem('usuario') !== null | window.localStorage.getItem('senha') != null){

    	logar();

   }else{
    	
    	logout();
   }
	
});

function logout(){

	window.localStorage.clear();
	$("#PaginaInicial").show();
	$("#PaginaLogin").hide();
	$("#divMenu").css("display", "none");
	$("#HomePage").hide();
}

function logar(){

	$("#PaginaLogin").hide();
	$("#HomePage").show();
	$("#divMenu").css("display", "block");
}

function abreLogin(){

	$("#PaginaInicial").hide();
	$("#HomePage").hide();
	$("#PaginaLogin").show();
}

/*function logar(){
	$("#PaginaInicial").hide();
	$("#HomePage").show();
	$("#divMenu").css("display", "block");
	listaPerguntas();
	listaPalavras();
}

function abreLogin(){
	$("#FormLogin, #divTogglePagina").toggle();

	logar(); //retirar esta linha
}*/

function pageChange(idNewPage){
	$(".pageView").hide();//esconde as páginas
	$(" " + idNewPage).show();//mostra a página selecionada no menu
	
if (!$("#btnMenuMobile").hasClass("collapsed"))
	$("#btnMenuMobile").click();//fecha o menu (fechar manualmente irrita)
	scrollToAnchor(idNewPage);//força a página à subir até o elemento
}

function scrollToAnchor(id) {
    var aTag = $(" " + id);
    $('html,body').animate({ scrollTop: aTag.offset().top/* - 30 <margem adicional>*/ }, 'normal');    
}

function abreModal(id){
	$("#" + id).modal('show');
}

var arrayTituloPergunta = [
"Se tudo necessita de um criador, então quem ou o que criou Deus?",
"Já que existem incontáveis religiões no mundo hoje afirmando ser a única religião verdadeira, por que você pensa que a sua é mais verdadeira do que a deles?",
"Por que Deus interveio tantas vezes nos assuntos humanos durante a antiguidade (de acordo com a Bíblia) e, porém, nada durante o Holocausto da Segunda Guerra Mundial?",
"Se Deus é onisciente, e sabe de todas as coisas, porque deixou Lúcifer ser líder dos anjos sabendo que ele gostaria de ser igual a Deus? Precisava deixá-lo chegar a esse ponto?",
"",
"",
"",
"",
""
];
var arrayRespostaPergunta = [
/*1*/
"<p>Na Bíblia não há nenhuma evidência de que Deus foi criado. Pelo contrário, ela revela Deus como sendo o Criador não tendo alguém maior que si mesmo.</p><p>“Porque, quando Deus fez a promessa a Abraão, visto que não tinha outro maior por quem jurar, jurou por si mesmo” <br /><u class='versiculo-0'>Hb 6:13</u></p><p>Tudo necessita de um criador, menos o Criador. Pois se alguém criou Deus, então quem criou o Criador de Deus? E quem que criou o criador do criador de Deus? Entraríamos numa contagem infinita em busca de um ser que NECESSARIAMENTE não foi criado.</p><p>Este ser que não foi criado é o Deus que se revela na Bíblia. Ele não teve um início, sempre existiu, como está escrito “de eternidade em eternidade Tu és Deus” (<u class='versiculo-1'>Sl 90:2</u>).</p>\
<p>Ele se revela como O Alfa e o Ômega (<u class='versiculo-2'>Ap 22:13</u>, <u class='versiculo-3'>Ap 1:17</u>) sendo Alfa a primeira letra do alfabeto grego e Ômega a ultima.</p><p>“...antes de mim deus nenhum se formou, e depois de mim nenhum haverá.” <u class='versiculo-4'>Is 43:10</u></p><p>O fato de Deus ser infinito (existir desde sempre e para sempre) é de impossível compreensão para nós que temos uma mente finita. Porém, chegará o tempo em que iremos compreender plenamente, como está escrito:</p><p>Porque, agora, vemos como em espelho, obscuramente; então, veremos face a face. Agora, conheço em parte; então, conhecerei como também sou conhecido.” (<u class='versiculo-5'>1 Co 13:12</u>).</p>",
/*2*/
"<p>O Cristianismo é diferente de todas as outras religiões por ensinar completamente o oposto do que elas ensinam e também pela Ressurreição de seu líder, Jesus Cristo.</p><p>Basicamente todas as demais religiões ensinam que o homem pode alcançar a divindade por meio de seu próprio esforço. Por exemplo: pra mim ter a vida após a morte, nessa vida eu precisarei seguir as regras que a divindade impôs ás criaturas. Também para se alcançar a divindade ainda nesta vida, eu preciso ser obediente. Tudo depende de mim e do meu esforço para chegar à divindade, não há outro caminho. É uma relação de mérito e recompensa.</p>\
<p>Mas o Cristianismo ensina sobre Deus vindo até o homem (<u class='versiculo-0'>Jo 1:1</u>, <u class='versiculo-1'>1:14</u>, <u class='versiculo-2'>Fp 2:5-6</u>). Ensina sobre Deus criando um plano para salvar o homem que não consegue obedecer e está condenado por isso (<u class='versiculo-3'>Rm 3:23-26</u>, <u class='versiculo-4'>Rm 5:6-8</u>). É uma mensagem de esperança para aqueles que reconhecem que um dia pecaram e que ainda cometem pecados. É graça sobre graça (<u class='versiculo-5'>Jo 1:16</u>), favor imerecido, Deus se revelando como amor para com todos e sendo condenado no lugar dos que estavam condenados (<u class='versiculo-6'>Gl 3:13</u>), e isso para os salvar. Diz respeito a você crer e ser salvo por crer, como o ladrão que estava ao lado de Jesus e apenas creu diante da morte, e recebeu a vida eterna (<u class='versiculo-7'>Lc 23:43</u>). Como está escrito “quem crê não é condenado” (<u class='versiculo-8'>Jo 3:18</u>) e “Deus amou o mundo de tal forma que deu seu único Filho para que todo aquele que Nele crer não pereça mas tenha a vida eterna” (<u class='versiculo-9'>Jo 3:16</u>).</p>\
<p>E a ressurreição de Cristo, fato que só o cristianismo carrega. “Ele ressuscitou!” (<u class='versiculo-10'>Mt 28:6-7</u>). Todas as religiões foram fundadas por homens que, hoje, estão sepultados, cujos túmulos são locais visitados pelos adeptos de suas religiões. A ressurreição é uma das maiores provas da existência de Deus e da eternidade. Diante disso você pode acreditar que os discípulos levaram o corpo (<u class='versiculo-11'>Mt 28:13</u>) ou que Ele ressuscitou. Algo importante a se questionar é: como os guardas afirmaram que os discípulos levaram o corpo se estavam dormindo? Como sabiam que eram os discípulos? <br />\
Porém, se Ele ressuscitou nada mais importa. Ele está vivo agora mesmo e voltará outra vez conforme disse!</p>\
<p>O maior de todos os mistérios bíblicos é a gloriosa Ressurreição de Jesus, da qual depende toda a estrutura da fé cristã, da Teologia cristã e até da Igreja cristã. Isto qualquer cristão sabe. Além do mais, a Ressurreição é dogma intocável, e todo o universo perderia o sentido sem ela, sem contar que constitui a mais pungente esperança para um mundo decaído, onde a depressão e o desespero estão batendo em todas as portas e em todas as nações, sem poupar ninguém.</p>\
<p>O apóstolo Paulo faz duas declarações importantes acerca da ressurreição, que resumem e definem o pilar mais importante da nossa fé:<br />\
<p>“Ora, se a nossa esperança em Cristo se restringe apenas a esta vida, somos os mais miseráveis de todos os seres humanos.” <u class='versiculo-12'>1 Cor 15:19</u></p>\
<p>“Por seu poder, Deus ressuscitou o Senhor e também nos ressuscitará.”<u class='versiculo-13'>1 Cor 6:14</u></p>\
<h4>Trata-se de:</h4>\
<ul style='list-style: disc'><li>Uma mensagem de esperança, muito além de frases de efeito ou textos reflexivos; baseado em fatos reais (e há incontáveis evidências históricas que reafirmam fatos bíblicos, basta pesquisar usando o Google);</li>\
	<li>Um ensino sobre a Eternidade, muito além da breve vida que temos; a ressurreição dos mortos comprovada pela ressurreição de Jesus.</li>\
	<li>Um conjunto de 66 livros, escritos por pessoas diferentes,  de épocas diferentes, que juntos, compõem uma única obra que se completa revelando Deus e Sua vontade ao mundo.</li>\
</ul><h4>Conclusão:</h4>\
<p>Não existem religiões melhores ou mais verdadeiras. Cremos que existe uma única Verdade e essa verdade é Jesus, como Ele disse “Eu sou a Verdade” (<u class='versiculo-14'>Jo 14:6</u>).<br />\
Não cremos que há outro caminho para irmos até Deus, senão Jesus “Eu sou o Caminho”, e que em nós mesmos não temos  como nos salvarmos. Cremos sim que é através da obediência e morte de Jesus que temos a vida eterna.</p>\
<p>A vida eterna por meio da obediência de Cristo, e a ressurreição de Jesus fazem do Cristianismo totalmente diferente de qualquer religião.</p>",
/*3*/
"",
/*4*/
"<p>Jesus sabia que Judas iria roubar (<u class='versiculo-0'>Jo 12:6</u>) mas ainda assim o constituiu tesoureiro (Jo 13:29). Pois se não o constituísse, talvez Judas nunca iria revelar o coração.</p>\
<p>Quando Deus percebeu no anjo o desejo de ser Deus, oque Deus fez? Potencializou isso. Colocou ele em uma posição elevada, como querubim ungido (<u class='versiculo-1'>Ez 28:14</u>) para ele pensar que tinha uma chance. Deus assim fez para que as intenções do coração fossem reveladas. Depois de o constituir, “elevou-se o teu coração por causa da tua formosura, corrompeste a tua sabedoria por causa do teu resplendor” (<u class='versiculo-2'>Ez 28:17</u>)</p>\
<p>“Eu, o Senhor, esquadrinho a mente, eu provo o coração; e isso para dar a cada um segundo os seus caminhos e segundo o fruto das suas ações.” <u class='versiculo-3'>Je 17:10</u></p>\
<p>Jesus mesmo sabendo que Judas roubava, acreditava que ele pudesse vir a mudar, a se arrepender. Até os momentos anteriores à crucificação, quando estavam na mesa, o próprio Judas se revelou, saiu da mesa e foi traí-lo. Assim também creio que Deus, embora conhecesse Lúcifer, acreditava em sua mudança.  (muito embora a Bíblia não detalhe isso). “Vivo Eu, Diz o Senhor: Não tenho prazer na morte do ímpio, mas em que se converta” <u class='versiculo-4'>Ez 33:11</u>.<br />\
Por fim, ambos se rebelaram.</p>",
"",
"",
"",
"",
"",
""
];


var arrayTituloPalavra = [
"Quem é Jesus?",
"Perdão"
];

var arrayConteudoPalavra = [
"Jesus é um cara legal, para muitos, mais chegado que um irmão",
"Libere perdão sobre a vida das outras pessoas, o que te faz pensar que só ela errou? Você nunca fez nada de errado?"
];




function selecionaPergunta(id){

	//this method returns a boolean value; (But is TO DO)
	//boolean temInternet = temInternet();

	temInternet = true;//apagar essa linha após o método "temInternet()" ser feito;

	if (temInternet) {
		bodyModal = arrayRespostaPergunta[id];
		i = 0;
		//pra garantir que não entre em loop, não vai permitir mais de 15 versículos (não, eu não confio em whiles);
		while (bodyModal.toLowerCase().indexOf("<u class='versiculo-" + i + "'>") >= 0){

			caminho = bodyModal.substring(bodyModal.indexOf("<u class='versiculo-" + i + "'>"), bodyModal.indexOf("</u>"));
			caminho = caminho.replace("<u class='versiculo-" + i + "'>", "");

			livro = caminho.substring(0, caminho.lastIndexOf(" ")).trim();
			capitulo = caminho.substring(caminho.lastIndexOf(" ") +1, caminho.indexOf(":"));
			versiculo = caminho.substring(caminho.indexOf(":") + 1, caminho.length);

			//alert("livro - " + livro + "\n\rcap - " + capitulo + "\n\rversiculo - " + versiculo + "\n\rcaminho = " + caminho);
			
			bodyModal = bodyModal.replace("<u class='versiculo-" + i + "'>" + caminho + "</u>", "<a target='_blank' class='linkVersiculoModal' alt='Veja o versículo online' href='https://www.bibliaonline.com.br/acf/" + livro.replace(" ", "") + "/" + capitulo + "/" + versiculo +"'>"+ caminho +"</a>");	
					
			if (i > 15) {break;}
			i++;
		}
		$("#ModalPerguntaResposta").html(bodyModal);
	} else {
		$("#ModalPerguntaResposta").html(arrayRespostaPergunta[id]);
	}

	$("#ModalShareLink").attr("href", "whatsapp://send?text=" + bodyModal.replace(' ', '%20'));


	//$("#ModalShareLink").html($("#ModalShareLink").html().replace("text=", bodyModal.replace(' ', '%20')));



//<a class="pull-left" id="ModalShareLink" href='whatsapp://send?text=StackOverflow'>Compartilhar via WhatsApp</a>
	


	$("#ModalPerguntaTitulo").text(arrayTituloPergunta[id]);
	abreModal("ModalPergunta");
}



function listar(arrayTitulo, idTxtBusca) {
	finalResult = "";
	if ($("#" + idTxtBusca.replace("#", "")).val().length > 0) {		
		aux = arrayTitulo;
		
		var search_term = $("#" + idTxtBusca.replace("#", "")).val();
		var search = search_term.toUpperCase();
		var arrayResult = jQuery.grep(aux, function(value) {
			return value.toUpperCase().indexOf(search) >= 0;			
		});

		result = "";
		for (var i = 0; i < arrayResult.length; i++) {
			result += "<li class='list-group-item' style='list-style-type: circle;' onclick='selecionaPergunta(" + i + ")'>" + arrayResult[i] + "</li>"
		}

		var regEx = new RegExp(search_term, "ig");
		//var replaceMask = "<label style='background: yellow; margin: 0;' class='lead2'>" + search_term + "</label>";
		finalResult = result.replace(regEx, search_term);

	}else{	
		for (var i = 0; i < arrayTitulo.length; i++) {
			finalResult += "<li class='list-group-item' style='list-style-type: circle;' onclick='selecionaPergunta(" + i + ")'>" + arrayTitulo[i] + "</li>"
		}
	}
	if (finalResult.trim() != "")
		return finalResult;
	else
		return "<li class='list-group-item' style='background-color: #ccc'>Não encontrado</li>";
}

function listaPerguntas(){
	$("ul.listaPerguntas").html("");
	$("ul.listaPerguntas").append(listar(arrayTituloPergunta, "txtBuscaPerguntas"));
}

function listaPalavras (){
	$("ul.listaPalavras").html("");
	$("ul.listaPalavras").append(listar(arrayTituloPalavra, "txtBuscaPalavras"));
}

$("#txtBuscaPerguntas").on("keyup", function(){	
	//if ($("#txtBuscaPerguntas").text().indexOf("?") >= 0) {return false;}
	listaPerguntas();
});
$("#txtBuscaPalavras").on("keyup", function(){	
	listaPalavras();
});

$( "#FormLogin" ).submit(function(e) {

	if((checkConnection()!= "none")){
	   $.ajax({
	   			async: false,
	            type: "POST",
	            url: "https://conectazion.000webhostapp.com/procLogin.php/", 
	            data: {
	                acao: 'LoginWeb',
	                usuario: $("#usuario").val(),
	                senha: $("#senha").val()
	            },
	            dataType: "json", 
	            success: function (json) {

	                if(json.result){
	                	//armazena dados no localstorage, assim, persistindo os dados
						window.localStorage.setItem('endereco', json.dados.endereco);
						window.localStorage.setItem('usuario', json.dados.usuario);
						window.localStorage.setItem('senha', json.dados.senha);
						window.localStorage.setItem('idescola', json.dados.idescola);
						window.localStorage.setItem('nome', json.dados.nome);
	                    logar();

	                }else{

	                	 alert(json.msg);
	    
	                }
	            },error: function(e,xhr,t){
	            	
	            	alert(json.msg);
	               
    
	            }
	        });
	}else{

			alert('Conecte-se na internet e tente novamente');

	}
});

function checkConnection(){

    return navigator.connection.type;
}


//<a href='whatsapp://send?text=StackOverflow'>compartilhar</a>



//$("#btHomeEntrar").click(function(){});

/*function chamaPergunta(id){
	$.ajax({
	  url: "perguntas.js",
	  dataType: "script",
	  success: success,
	  data: id
	});
}
function AjaxParam(arquivo, div, param){
    $.ajax({
      method: "post",
      url: "./" + arquivo,
      datatype: "html",
      data: {
        param: param
      },
      success: function(result){
        $('#' + div).html(result);
      },
      error: function(result){
      	alert("Não foi possível fazer a requisição, tente novamente. Se o erro persistir, reinicie o app");
      }
    })
}
*/
