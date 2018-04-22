$(document).ready(function(){
	
    if (window.localStorage.getItem('usuario') !== null | window.localStorage.getItem('senha') != null){

    	logar();

   }else{
    	
    	logout();
   }
   //alert(navigator.connection.type);
	
});

function logout(){

	window.localStorage.clear();
	$("#PaginaInicial").show();
	$("#PaginaLogin").hide();
	$("#PaginaPerfil").hide();
	$("#divMenu").css("display", "none");
	$("#HomePage").hide();
	$(".footer").hide();
}

function logar(){

	$("#PaginaLogin").hide();
	$("#HomePage").show();
	$("#divMenu").css("display", "block");
	$(".footer").show();
}

function abreLogin(){

	$("#PaginaInicial").hide();
	$(".footer").hide();
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

	if(idNewPage == "#PaginaPerfil"){

		carregaPerfil();

	}

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
"Todos nós sabemos ou ouvimos dizer que existe um Deus Triúno (Deus Pai, Filho e Espírito Santo), porém, por que na bíblia não há nenhuma citação da trindade divina?",
"Se Deus ama à todos e quer salvar a todos, porque não salva todos? Por que ele só se mostra Deus para alguns poucos?",
"Se a homossexualidade é uma abominação, então por que você não fica escandalizado com a relação homossexual entre Davi e Jonatas (I Samuel 20:41 e II Samuel 1: 26)?",
"Se Deus é onipotente (todo-poderoso), por que ele levou seis dias para criar tudo? Por que não criou tudo de uma vez?",
"Se Jesus é amor, então por que ele mandou que sejamos inimigos de nossos entes queridos (Mt 10:34-36)?",
"Se Deus proíbe o assassinato, por que ele próprio decidiu assassinar todos os homens e animais do planeta (Gênesis 6:7)?"
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
/*5*/
"<p>No Antigo Testamento Deus se revela como sendo único Senhor (<u class='versiculo-0'>Dt 6:4</u>). Porém isso não vai contra o conceito da Trindade, pois em vários textos Deus se revela no plural:</p>\
<p>“Façamos” (plural) o homem à nossa imagem. (<u class='versiculo-1'>Gn 1:26</u>)</p> \
<p> “Eis que o homem se tornou como um de NÓS” (<u class='versiculo-2'>Gn 3:22</u>)</p> \
<p>“Desçamos (plural) para confundirmos alí a sua linguagem” (<u class='versiculo-3'>Gn 11:7</u>)</p> \
<p>Jesus, um pouco antes de ascender aos céus, trouxe a revelação desses textos. Ele revelou que Deus são três pessoas, e três pessoas são Deus: Pai, Filho e Espírito Santo (<u class='versiculo-4'>Mt 28:19</u>). Inúmeras vezes o Espírito Santo é tratado como uma pessoa, inclusive o texto que nos exorta a não entristecermos o Espírito Santo (<u class='versiculo-5'>Ef 4:30</u>).</p>",
"<p>Primeiramente, Deus não se mostra para alguns poucos. Deus se mostra pra todas as pessoas através da Criação (<u class='versiculo-0'> Rm 1:19-21</u>). Oque acontece é que muitos, embora percebam a Glória de Deus nas coisas criadas, não reconhecem que há um Criador.</p>\
<p>Quando Deus criou o homem à sua imagem, conforme à sua semelhança (<u class='versiculo-1'> Gn 1:26</u>), ele deu ao homem o direito de decisão, pois em sua Palavra Deus se revela como Juiz (<u class='versiculo-2'> Sl 7:11</u>,<u class='versiculo-3'> Jr 11:20</u>). O juiz decide quem condenar ou inocentar; se for um justo juiz ele fará justiça, se for um juiz injusto ele absolverá culpados e  condenará inocentes. Esse poder de escolha e decisão é característica apenas do homem, pois é a imagem de Deus. Ainda que Deus queira salvar o homem, não pode decidir por ele. Tudo oque Deus podia fazer para salvar o homem, Ele fez: enviou seu único Filho para morrer no lugar dos que estavam condenados (<u class='versiculo-4'> Jo 3:16-18</u>).</p>\
<p>Deus deseja que todos se arrependam (<u class='versiculo-5'> 2 Pe 3:9</u>) pois Jesus morreu não só pelos nossos pecados mas pelos pecados de todo o mundo (<u class='versiculo-6'> 1 Jo 2:2</u>).</p>\
<p>Quando o homem nasce ele recebe o direito de escolher. Porém, quando morre, ele o perde pois não poderá escolher pra onde ir (<u class='versiculo-7'> Lc 13:27</u>). Quem decidirá é Deus pois “todos haveremos de comparecer ante ao Tribunal de Cristo” (<u class='versiculo-8'> Rm 14:10-12</u>, <u class='versiculo-9'> Ap 20:11-15</u>)</p>\
<p>Seu destino será consequência de sua escolha enquanto ainda estava vivo.</p>",
/*6*/
"<p>Afirmar que o relacionamento entre eles era homossexual ou que estes dois textos são prova disso é querer forçar os textos não analisando seus contextos ou até mesmo usando-os para que se enquadrem em desejos e pensamentos pecaminosos contrários à própria Bíblia.</p>\
<p>Segundo à Lei, a homossexualidade é condenável (<u class='versiculo-0'> Lv 20:13</u>, <u class='versiculo-1'>Lv  18:22</u>). Caso se tratasse de um relacionamento homossexual ambos teriam seu pecado condenado conforme estipulava a Lei de Moisés, ainda mais considerando a natureza pública desse relacionamento (vemos claramente essa realidade quando Davi foi punido por adultério).</p>\
<p>A palavra ligou usada no texto de  <u class='versiculo-2'>2 Sm 1:26</u> “...a alma de Jônatas se ligou com a de Davi, e Jônatas o amou como a sua própria alma” é a mesma palavra usada em <u class='versiculo-3'> Gn 44:30</u> para expressar a ligação de Jacó para com seu filho Benjamim. Ou seja, não era uma palavra comumente usada para indicar relacionamentos eróticos ou de  homossexualidade pois foi usada na Bíblia pra indicar uma ligação especial fraterna. </p>\
<p>No mesmo texto, diz “Excepcional era o teu amor ultrapassando o amor de mulheres”. Minha pergunta é: desde quando a relação homossexual ultrapassa o amor de uma relação heterossexual? Quem definiu isso? Davi não teve a intenção de colocar o amor de amigos sendo superior ao amor conjugal hétero, mas o de destacar a impressionante abnegação de Jônatas para com ele.</p>\
<p><u class='versiculo-4'>Pv 17:17</u> diz “...na angústia nasce (ou surge) o irmão” e <u class='versiculo-5'>Pv 18:24</u> “...há amigo mais chegado do que irmão”. </p>\
<p>Percebemos o momento de angústia que Davi vivia quando lemos o contexto: Saul, pai de Jônatas o estava perseguindo. Porém ele se opôs ao próprio pai por amor e lealdade à Davi. Na angústia “nasceu” o irmão, e Jônatas foi o amigo mais chegado que irmão para Davi.</p>\
<p>Eles amaram-se conforme à Lei e não contrário à ela. “..Mas amarás o teu próximo como a ti mesmo” (<u class='versiculo-7'>Lv 19:18</u>). É um exemplo de obediência ao segundo mandamento, semelhante ao primeiro e maior mandamento (<u class='versiculo-8'>Mt 22:37-39</u>).</p>",
/*7*/
"<p>Perguntas semelhantes à essa poderiam ser feitas: se Deus não se cansa (<u class='versiculo-0'> Isa 40:28</u>), porque descansou no sétimo dia (<u class='versiculo-1'> Gn 2:2</u>,<u class='versiculo-2'> Ex 20:11</u>)? Se Jesus nunca pecou (<u class='versiculo-3'> 2 Cor 5:21</u>), porque foi batizado por João Batista (<u class='versiculo-4'> Mt 3:14-15</u>) sendo que ele batizava para arrependimento (<u class='versiculo-5'> Mt 3:11</u>)?</p>\
<p>A resposta para todas essas perguntas é: para nos ensinar princípios não apenas com ordenanças mas com o exemplo.</p>\
<p>Deus poderia criar o mundo num estalar de dedos mas quis nos ensinar o princípio da contemplação: “e viu Deus que era bom” (<u class='versiculo-6'> Gn 1:4</u>,<u class='versiculo-7'> Gn 1:10</u>,<u class='versiculo-8'> Gn 1:12</u>, <u class='versiculo-9'> Gn 1:18</u>,<u class='versiculo-10'> Gn 1:21</u> , <u class='versiculo-11'> Gn 1:25</u>, <u class='versiculo-12'> Gn 1:31</u>) </p>\
<p>Deus nunca pede algo ao homem que Ele mesmo não fez. Quando ele pede para que amemos uns aos outros como a nós mesmos, é porque Ele nos amou de semelhante forma nos dando a vida eterna (<u class='versiculo-13'> 1 Jo 3:16</u>); quando Ele pede para amarmos à Ele com toda a força, entendimento e alma (<u class='versiculo-14'> Dt 6:5</u>) é porque Ele nos amou a tal ponto de entregar seu único filho (<u class='versiculo-15'>Jo 3:16</u>).</p>\
<p>A palavra de Deus diz “ensina a criança No Caminho” e não “o caminho” (<u class='versiculo-16'>Pv 22:6</u>). Esse é o modelo de paternidade e Deus também nos ensina dessa forma.</p>\
<p>Por isso que Jesus se batizou, não porque precisava se arrepender mas para ensinar-nos “no caminho”; por isso Deus descansou,  não porque estava cansado mas para deixar um modelo estabelecido não só com um mandamento mas com o exemplo.</p>",
/*8*/
"<p>Jesus não mandou sermos inimigos dos nossos entes queridos, até por uma questão de coerência: Jesus me ensina a amar até meus inimigos (<u class='versiculo-0'>Mt 5:44</u>). Essa é uma interpretação equivocada e caso fosse verdadeira, seria incoerente com os outros ensinamentos de Cristo. </p>\
<p>Ele nos ensina a possível reação que sua mensagem causaria em uma mesma casa: a divisão. Em uma mesma família pode haver um filho que crê e um pai que não crê. Essas convicções são tão profundas que elas superam os laços familiares.</p>\
<p>Não se trata do convertido passar a ser inimigo dos seus entes, mas os entes se oporem e escolherem ser inimigos daquele que creu. A inimizade não parte daquele que creu na mensagem, mas dos que não creram. </p>\
<p>O contexto do capítulo 10 nos dá clareza quanto ao que Jesus está dizendo:</p>\
<p>Israel esperava um Messias que os libertasse do domínio dos romanos e que trouxesse paz; que acabasse com as guerras e unificasse as nações num relacionamento fraterno. Mas quando Jesus veio, declarou: “não penseis que vim trazer paz a Terra pois vim trazer espada” (<u class='versiculo-1'> Mt 10:34</u>). A espada é símbolo de separação, uma separação inevitável que haveria entre aqueles que cressem no Senhor e aqueles que não cressem. </p>\
<p>Neste capítulo temos as instruções de Jesus aos seus discípulos acerca do trabalho que eles haveriam de fazer: evangelizar o mundo. Jesus diz “onde” ir, “com quem” falar e “oque” falar. </p>\
<p>Também os ensina acerca das possíveis reações que haveriam de receber. Por isso, diz sobre os inimigos do cristão serem os da sua própria casa pois esta é uma das reações quanto à conversão daquele que ouviu o evangelho e creu.</p>\
<p>Jesus também pede uma dedicação e uma fidelidade sem qualificações, incondicional. O amor à Ele e ao Reino maior do que qualquer outro relacionamento ou qualquer outra afeição humana. Jesus não está ensinando a não amá-los, mas que meu amor à Ele deve ser maior que tudo.</p>"
];


var arrayTituloPalavra = [
"Quem é Jesus?",
"Perdão",
"oi"
];

var arrayConteudoPalavra = [
"Jesus é um cara legal, para muitos, mais chegado que um irmão",
"Libere perdão sobre a vida das outras pessoas, o que te faz pensar que só ela errou? Você nunca fez nada de errado?"
];




function selecionaPergunta(id){

	//this method returns a boolean value; (But is TO DO)

	if (checkConnection()) {
		bodyModal = arrayRespostaPergunta[id];
		i = 0;
		//pra garantir que não entre em loop, não vai permitir mais de 15 versículos (não, eu não confio em whiles);
		while (bodyModal.toLowerCase().indexOf("<u class='versiculo-" + i + "'>") >= 0){

			caminho = bodyModal.substring(bodyModal.indexOf("<u class='versiculo-" + i + "'>"), bodyModal.indexOf("</u>"));
			caminho = caminho.replace("<u class='versiculo-" + i + "'>", "");

			livro = caminho.substring(0, caminho.lastIndexOf(" ")).trim();
			capitulo = caminho.substring(caminho.lastIndexOf(" ") +1, caminho.indexOf(":"));
			versiculo = caminho.substring(caminho.indexOf(":") + 1, caminho.length);
			alert(livro);

			//alert("livro - " + livro + "\n\rcap - " + capitulo + "\n\rversiculo - " + versiculo + "\n\rcaminho = " + caminho);
			
			bodyModal = bodyModal.replace("<u class='versiculo-" + i + "'>" + caminho + "</u>", "<a target='_blank' class='linkVersiculoModal' alt='Veja o versículo online' href='https://www.bibliaonline.com.br/acf/" + livro.replace(" ", "") + "/" + capitulo + "/" + versiculo +"'>"+ caminho +"</a>");	
					
			if (i > 16) {break;}
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

	window.localStorage.setItem('endereco', 'json.dados.endereco');
	window.localStorage.setItem('usuario', 'json.dados.usuario');
	window.localStorage.setItem('senha', 'json.dados.senha');
	window.localStorage.setItem('idescola', 'json.dados.idescola');
	window.localStorage.setItem('nome', 'json.dados.nome');
	logar();

	/*if(checkConnection()){
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

	}*/
});


function carregaPerfil(){


	$("#endereco").html('<i class="glyphicon glyphicon-map-marker"></i>Endereço: ' + window.localStorage.getItem('endereco'));
	$("#escola").html('<i class="fa fa-building-o"></i> Escola: ' + window.localStorage.getItem('nome'));
	$("#user").html('<i class="fa fa-user"></i> Usuário: ' + window.localStorage.getItem('usuario'));

   
}

//tens que adicionar o plugin no seu projeto
//cordova plugin add cordova-plugin-network-information
//aqui nesse link da documentação explica sobre o network information
//testei na maquina virtual do android e deu certo
//https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-network-information/index.html
//se a conexao for 'none', não está conectado com a internet
//quando for testar no navegador, ele vai retornar 'undefinied'
//esse plugin para obter a conexao com a internet, não funciona no navegador pois é um recurso do cordova que pega a informação do dispositivo
function checkConnection(){

    return navigator.connection.type != "none";
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
