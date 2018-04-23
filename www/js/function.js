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

	}else if(idNewPage == "#PaginaPergunta"){
		listaPerguntas();
	}else if(idNewPage == "#PaginaDinamica"){
		listaDinamicas();
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
"<p> Deus não é culpado pelo pecado, suas consequências e maldições. Ele pode e deseja intervir. Porém, o que move a intervenção divina é o clamor acompanhado de sincero arrependimento. Foi assim em toda intervenção divina na Bíblia, e assim é nos nossos dias pois Deus não muda (<u class='versiculo-0'>Ml 3:6</u>).</p>\
<p>Todas às vezes que Deus interveio na história, foi em resposta ao clamor do seu povo que veio acompanhado de arrependimento de pecados. Deus interveio para libertar o povo do Egito em resposta do seu clamor (<u class='versiculo-1'>Ex 3:9</u>,<u class='versiculo-2'>Ex 6:5</u>) e inúmeras vezes no livro de Juízes. </p>\
<p>Não estou afirmando com isso que não houve clamor por parte dos judeus durante o Holocausto. Porém, quero chamar a atenção para a maldição descrita em Deuteronômio 28, caso os judeus decidissem seguir seus próprios caminhos ao invés dos mandamentos de Deus. É um texto extenso, porém, muito usado hoje por rabinos para explicar oque foi o Holocausto pois, segundo eles, esse texto da Torá descreve em detalhes oque aconteceu neste período. É como se tivesse acontecido no Holocausto exatamente oque está descrito nesse texto.</p>\
<p><u class='versiculo-3'>Dt 28:15-68</u></p>\
<p>Será, porém, que, se não deres ouvidos à voz do Senhor teu Deus, para não cuidares em cumprir todos os seus mandamentos e os seus estatutos, que hoje te ordeno, então virão sobre ti todas estas maldições, e te alcançarão:</p>\
<p>Maldito serás tu na cidade, e maldito serás no campo.</p>\
<p>Maldito o teu cesto e a tua amassadeira.</p>\
<p>Maldito o fruto do teu ventre, e o fruto da tua terra, e as crias das tuas vacas, e das tuas ovelhas.</p>\
<p>Maldito serás ao entrares, e maldito serás ao saíres.</p>\
<p>O Senhor mandará sobre ti a maldição; a confusão e a derrota em tudo em que puseres a mão para fazer; até que sejas destruído, e até que repentinamente pereças, por causa da maldade das tuas obras, pelas quais me deixaste.</p>\
<p>O Senhor fará pegar em ti a pestilência, até que te consuma da terra a que passas a possuir.</p>\
<p>O Senhor te ferirá com a tísica e com a febre, e com a inflamação, e com o calor ardente, e com a secura, e com crestamento e com ferrugem; e te perseguirão até que pereças.</p>\
<p>E os teus céus, que estão sobre a cabeça, serão de bronze; e a terra que está debaixo de ti, será de ferro.</p>\
<p>O Senhor dará por chuva sobre a tua terra, pó e poeira; dos céus descerá sobre ti, até que pereças.</p>\
<p>O Senhor te fará cair diante dos teus inimigos; por um caminho sairás contra eles, e por sete caminhos fugirás de diante deles, e serás espalhado por todos os reinos da terra.</p>\
</p>E o teu cadáver servirá de comida a todas as aves dos céus, e aos animais da terra; e ninguém os espantará.</p>\
<p>O Senhor te ferirá com as úlceras do Egito, com tumores, e com sarna, e com coceira, de que não possas curar-te;</p>\
<p>O Senhor te ferirá com loucura, e com cegueira, e com pasmo de coração;</p>\
<p>E apalparás ao meio-dia, como o cego apalpa na escuridão, e não prosperarás nos teus caminhos; porém somente serás oprimido e roubado todos os dias, e não haverá quem te salve.</p>\
<p>Desposar-te-ás com uma mulher, porém outro homem dormirá com ela; edificarás uma casa, porém não morarás nela; plantarás uma vinha, porém não aproveitarás o seu fruto.</p>\
<p>O teu boi será morto aos teus olhos, porém dele não comerás; o teu jumento será roubado diante de ti, e não voltará a ti; as tuas ovelhas serão dadas aos teus inimigos, e não haverá quem te salve.</p>\
<p>Teus filhos e tuas filhas serão dados a outro povo, os teus olhos o verão, e por eles desfalecerão todo o dia; porém não haverá poder na tua mão.</p>\
<p>O fruto da tua terra e todo o teu trabalho, comerá um povo que nunca conheceste; e tu serás oprimido e quebrantado todos os dias.</p>\
<p>E enlouquecerás com o que vires com os teus olhos.</p>\
<p>O Senhor te ferirá com úlceras malignas nos joelhos e nas pernas, de que não possas sarar, desde a planta do teu pé até ao alto da cabeça.</p>\
<p>O Senhor te levará a ti e a teu rei, que tiveres posto sobre ti, a uma nação que não conheceste, nem tu nem teus pais; e ali servirás a outros deuses, ao pau e à pedra.</p>\
<p>E serás por pasmo, por ditado, e por fábula, entre todos os povos a que o Senhor te levará.</p>\
<p>Lançarás muita semente ao campo; porém colherás pouco, porque o gafanhoto a consumirá.</p>\
<p>Plantarás vinhas, e cultivarás; porém não beberás vinho, nem colherás as uvas; porque o bicho as colherá.</p>\
<p>Em todos os termos terás oliveiras; porém não te ungirás com azeite; porque a azeitona cairá da tua oliveira.</p>\
<p>Filhos e filhas gerarás; porém não serão para ti; porque irão em cativeiro.</p>\
<p>Todo o teu arvoredo e o fruto da tua terra consumirá a lagarta.</p>\
<p>O estrangeiro, que está no meio de ti, se elevará muito sobre ti, e tu mais baixo descerás;</p>\
<p>Ele te emprestará a ti, porém tu não emprestarás a ele; ele será por cabeça, e tu serás por cauda.</p>\
<p>E todas estas maldições virão sobre ti, e te perseguirão, e te alcançarão, até que sejas destruído; porquanto não ouviste à voz do Senhor teu Deus, para guardares os seus mandamentos, e os seus estatutos, que te tem ordenado;</p>\
<p>E serão entre ti por sinal e por maravilha, como também entre a tua descendência para sempre.</p>\
<p>Porquanto não serviste ao Senhor teu Deus com alegria e bondade de coração, pela abundância de tudo.</p>\
<p>Assim servirás aos teus inimigos, que o Senhor enviará contra ti, com fome e com sede, e com nudez, e com falta de tudo; e sobre o teu pescoço porá um jugo de ferro, até que te tenha destruído.</p>\
<p>O Senhor levantará contra ti uma nação de longe, da extremidade da terra, que voa como a águia (perceba que um dos emblemas do nazismo é a águia), nação cuja língua não entenderás;</p>\
<p>Nação feroz de rosto, que não respeitará o rosto do velho, nem se apiedará do moço;</p>\
<p>E comerá o fruto dos teus animais, e o fruto da tua terra, até que sejas destruído; e não te deixará grão, mosto, nem azeite, nem crias das tuas vacas, nem das tuas ovelhas, até que te haja consumido;</p>\
<p>E sitiar-te-á em todas as tuas portas, até que venham a cair os teus altos e fortes muros, em que confiavas em toda a tua terra; e te sitiará em todas as tuas portas, em toda a tua terra que te tem dado o Senhor teu Deus.</p>\
<p>E comerás o fruto do teu ventre, a carne de teus filhos e de tuas filhas, que te der o Senhor teu Deus, no cerco e no aperto com que os teus inimigos te apertarão.</p>\
<p>Quanto ao homem mais mimoso e delicado no meio de ti, o seu olho será maligno para com o seu irmão, e para com a mulher do seu regaço, e para com os demais de seus filhos que ainda lhe ficarem;</p>\
<p>De sorte que não dará a nenhum deles da carne de seus filhos, que ele comer; porquanto nada lhe ficou de resto no cerco e no aperto, com que o teu inimigo te apertará em todas as tuas portas.</p>\
<p>E quanto à mulher mais mimosa e delicada no meio de ti, que de mimo e delicadeza nunca tentou pôr a planta de seu pé sobre a terra, será maligno o seu olho contra o homem de seu regaço, e contra seu filho, e contra sua filha;</p>\
<p>E isto por causa de suas páreas, que saírem dentre os seus pés, e para com os seus filhos que tiver, porque os comerá às escondidas pela falta de tudo, no cerco e no aperto, com que o teu inimigo te apertará nas tuas portas.</p>\
<p>Se não tiveres cuidado de guardar todas as palavras desta lei, que estão escritas neste livro, para temeres este nome glorioso e temível, o SENHOR TEU DEUS,\
Então o Senhor fará espantosas as tuas pragas, e as pragas de tua descendência, grandes e permanentes pragas, e enfermidades malignas e duradouras;</p>\
<p>E fará tornar sobre ti todos os males do Egito, de que tu tiveste temor, e se apegarão a ti.</p>\
<p>Também o Senhor fará vir sobre ti toda a enfermidade e toda a praga, que não está escrita no livro desta lei, até que sejas destruído.</p>\
<p>E ficareis poucos em número, em lugar de haverem sido como as estrelas dos céus em multidão; porquanto não destes ouvidos à voz do Senhor teu Deus.</p>\
<p>E será que, assim como o Senhor se deleitava em vós, em fazer-vos bem e multiplicar-vos, assim o Senhor se deleitará em destruir-vos e consumir-vos; e desarraigados sereis da terra a qual passais a possuir.</p>\
<p>E o Senhor vos espalhará entre todos os povos, desde uma extremidade da terra até à outra; e ali servireis a outros deuses que não conheceste, nem tu nem teus pais; ao pau e à pedra.</p>\
<p>E nem ainda entre estas nações descansarás, nem a planta de teu pé terá repouso; porquanto o Senhor ali te dará coração agitado, e desfalecimento de olhos, e desmaio da alma.</p>\
<p>E a tua vida, como em suspenso, estará diante de ti; e estremecerás de noite e de dia, e não crerás na tua própria vida.</p>\
<p>Pela manhã dirás: Ah! quem me dera ver a noite! E à tarde dirás: ah! quem me dera ver a manhã! pelo pasmo de teu coração, que sentirás, e pelo que verás com os teus olhos.</p>\
<p>E o Senhor te fará voltar ao Egito em navios, pelo caminho de que te tenho dito; nunca jamais o verás; e ali sereis vendidos como escravos e escravas aos vossos inimigos; mas não haverá quem vos compre.”</p>\
<p>Essa maldição foi preparada para o povo de Deus, pouco antes de chegar a terra prometida, para tomar posse dela. Não foi uma maldição lançada para qualquer nação: foi para o povo de Deus. </p>\
<p>Para os judeus que temem a Deus e seguem a Torá, eles afirmam que o Holocausto foi o cumprimento dessa maldição descrita em Deuteronômio: consequência da apostasia e do abandono à Lei do Senhor. Para nós, parece que Deus não interveio, mas acredite: o juízo é a última arma de Deus. </p>\
<p><b>Conclusão</b></p>\
<p>As consequências do pecado e as maldições descritas na Palavra em resposta à desobediência do homem permanecem valendo nos nossos dias. Porém,  Ezequiel 18:32 afirma “Não tenho nenhum prazer na morte de quem quer que seja, afirma Yahweh, o SENHOR Deus. Convertei-vos, pois, e vivei!”. O juízo é a última arma de Deus.</p>",
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
<p>Jesus também pede uma dedicação e uma fidelidade sem qualificações, incondicional. O amor à Ele e ao Reino maior do que qualquer outro relacionamento ou qualquer outra afeição humana. Jesus não está ensinando a não amá-los, mas que meu amor à Ele deve ser maior que tudo.</p>",
"<p>Por princípio só Deus dá a vida e, por princípio, só Deus pode tira-la.</p>\
<p>Devemos entender os papéis. Deus não permite que julguemos uns aos outros (<u class='versiculo-0'> Mt 7:1</u>), no entanto, nos ensina a constituir juízes para julgarem (<u class='versiculo-1'>Ex 18:21-22</u>, <u class='versiculo-2'>1 Cr 17:10</u>,<u class='versiculo-3'>1 Sm 8:1</u>) e autoridades para executarem as penas (<u class='versiculo-4'>Rm 13:4</u>). Deus diz “não assassinarás” (<u class='versiculo-5'>Ex 20:13</u>) mas também disse para os israelitas assassinarem o filho que amaldiçoa seus pais (<u class='versiculo-6'>Lv 20:9</u>).</p>\
<p>Ele não desobedeceu aquilo que Ele mesmo ordenou, mas executou a sentença, por ser Justo Juiz (<u class='versiculo-7'> Sl 7:11</u>) e “Na sua mão está a vida de todo ser vivente, e o espírito de todo o gênero humano.” (<u class='versiculo-8'>Jó 12:10</u>). Ele é o único que pode tirar a vida e julgar a todos pois foi Ele quem deu a vida e criou à todos.</p>"
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

var arrayTituloDinamicas = [
"Juntos somos mais fortes",
"Sal da terra",
"Tiro pela culatra",
"Quem vai pro céu?",
"O Verbo",
"Imagem e semelhança de Deus",
"Rótulos",
"Sonhos",
];

var arrayConteudoDinamicas = [
/*1*/
"<p>O objetivo é que todos entendam a força de quando estamos unidos em uma só unidade.</p>\
<p><b>Material</b>: Papel Sulfite, bolinha de brincar.</p>\
<p><b>Texto-base</b>: <a target='_blank' class='linkVersiculoModal' alt='Veja o versículo online' href='https://www.bibliaonline.com.br/acf/rm/15/5,6'>Romanos 15:5-6</a> e <a target='_blank' class='linkVersiculoModal' alt='Veja o versículo online' href='https://www.bibliaonline.com.br/acf/1co/12/12,13'>1 Coríntios 12:12-13</a></p>\
<p><b>Desenvolvimento</b>: Faça uma roda, pegue o papel e peça para que uma pessoa rasgue. Isso é muito fácil, todos vão conseguir rasgar o papel. Então pegue a bola e revista ela com o papel sulfite. Coloque todos vários papéis em torno da bola.</p>\
<p><b>Conclusão</b>: A bola Representa o Espírito Santo, os papéis nos representa. Quando estamos juntos e ligados em cristo, não há obstáculos que possam nos parar, somos mais fortes, mas quando ficamos sozinhos sem cristo e sem nossos irmãos de nada adianta, facilmente somos abatidos e derrotados pelo inimigo.</p>",
/*2*/
"<p>O objetivo é levar à reflexão sobre o nosso papel como sal da Terra.</p>\
<p><b>Material</b>: Pipoca</p>\
<p><b>Texto base</b>: <a target='_blank' alt='Veja o versículo online' href='https://www.bibliaonline.com.br/acf/mt/5/13' class='linkVersiculoModal'>Mateus 5:13</a></p>\
<p><b>Desenvolvimento</b>: Assim que iniciar o momento da palavra, distribua para cada participante a pipoca em um copo descartável. (A pipoca deve estar completamente sem sal).\
Não diga que é o quebra-gelo de início, deixe que comam a pipoca, enquanto isso continue normalmente a célula até que alguém perceba e diga que a pipoca está sem sal.\
Para estimular eles a dizerem isso pergunte se a pipoca está gostosa, etc. Pois alguns percebendo isso podem ficar com vergonha de dizer.</p>\
<p><b>Conclusão</b>: Quando alguém disser ou pedir sal você já aborda dizendo sobre a importância de sermos sal da terra.</p>",
/*3*/
"<p>O objetivo é todos reflitam sobre a forma que amamos o próximo.</p>\
<p><b>Texto-base</b>: <a target='_blank' alt='Veja o versículo online' href='https://www.bibliaonline.com.br/acf/mt/23/39' class='linkVersiculoModal'>Mateus 22:39</a></p>\
<p><b>Material</b>: Papel e caneta;</p>\
<p><b>Desenvolvimento</b>: Distribua papel e caneta para todos os participantes;</p>\
<ul>\
<li>Peça para que eles escrevam um comando para quem estiver à sua direita executar. Muitos vão escolher micos, e aí que o tiro sai pela culatra;</li>\
	<li>Quando todos terminarem, peça para que o primeiro leia o comando e revele que cada um terá que fazer o que escreveu.</li>\
</ul>\
<p><b>Conclusão</b>: Não queremos constranger a ninguém, lógico, explique de forma muito amorosa a moral da dinâmica.</p>",
"<p><b>Objetivo</b>: Reflexão e descontração.</b></p>\
<p><b>Textos-base</b>:  <a target='_blank' alt='Veja o versículo online' href='https://www.bibliaonline.com.br/acf/jo/14/6' class='linkVersiculoModal'> João 14:6</a>.</p>\
<p><b>Desenvolvimento</b>: Comece explicando que o grupo vai fazer uma viagem para entrar no céu, para isso elas devem escolher somente um coisa para levar. Pode  ser objetos, pessoas ou animais, qualquer coisa, mas somente uma.</p>\
<ul>\
<li>Após escolher o que irá levar, o aplicador da dinâmica deve dizer se ela vai ou não para o céu. Aqui está o segredo: para ir para o céu o participante deve escolher algo que comece com a primeira letra do seu nome.</li>\
<li>Faça várias rodadas até que as pessoas descubram o segredo.</li>\
</ul>\
<p><b>Conclusão</b>: Muitos têm buscado uma forma de entrar e/ou ir para o céu, sendo boazinhas, fazendo obras sociais, obedecendo aos 10 mandamentos, mas esquecem que o único, real e verdadeiro caminho é Jesus.</p>",
"<p>O objetivo é refletirmos sobre como nós não conseguimos viver sem o Verbo.</p>\
<p><b>Texto base</b>: <a target='_blank' alt='Veja o versículo online' href='https://www.bibliaonline.com.br/acf/jo/1/1' class='linkVersiculoModal'> João 1:1</a></p>\
<p><b>Desenvolvimento</b>: Peça para cada pessoa dizer o seu nome, o que mais gosta de fazer, uma pergunta para pessoa ao lado. Ela pode falar qualquer coisa, mas sem usar verbos.</p>\
<p><b>Conclusão</b>: Nossa vida seria muito difícil se não tivéssemos o verbo para nos expressar, porque o verbo é que dá sentido à nossa comunicação. Sem o verbo, tudo que dissermos fica sem sentido e confuso.</p>\
<p>Jesus é o verbo vivo de Deus. Sem Ele a nossa vida é vazia e sem sentido.</p>",
"<p><b>Texto base</b>: <a target='_blank' alt='Veja o versículo online' href='https://www.bibliaonline.com.br/acf/mt/3/16' class='linkVersiculoModal'>Mateus 3:16</a> e <a target='_blank' alt='Veja o versículo online' href='https://www.bibliaonline.com.br/acf/rm/8/16' class='linkVersiculoModal'>Romanos 8:16</a></p>\
<p><b>Material</b>: uma caixa com espelho dentro.</p>\
<p><b>Desenvolvimento</b>: Pegue uma caixa de sapato e coloque um espelho dentro dele, sem que os participantes percebam.</p>\
<ul>\
<li>Peça que cada um se levante, vá até a caixa e diga o que está vendo, o que consegue visualizar ao olhar para si mesmo. É um momento muito propício para que cada um abra o coração. É a oportunidade de se falar sobre identidade. Quem é você?</li>\
</ul>\
<p><b>Conclusão</b>: Falar sobre quem nós somos: filhos de Deus.</p>",
"<p>O objetivo é levar à reflexão sobre como rotulamos as pessoas.</p>\
<p><b>Material</b>: Post-it e caneta.</p>\
<p><b>Texto-base</b>: <a target='_blank' alt='Veja o versículo online' href='https://www.bibliaonline.com.br/acf/je/29/11' class='linkVersiculoModal'> Jeremias 29:11 </a> e <a target='_blank' alt='Veja o versículo online' href='https://www.bibliaonline.com.br/acf/jo/15/12' class='linkVersiculoModal'> João 15:12</a></p>\
<p><b>Desenvolvimento</b>: Cole post- it na testa de cada participante, com títulos como:</p>\
<ul>\
<li>1.Sou carente - Me elogie toda hora.</li>\
<li>2.Sou mentirosa - Não acredite em mim.</li>\
<li>3.Sou perigosa - Tenha medo.</li>\
<li>3.Sou inteligente - Me pergunte o por que de tudo.</li>\
<li>4.Sou surda - Fale gritando.</li>\
<li>5.Sou chata - Me ignore.</li>\
</ul>\
<p>Peça para que eles tratem uns aos outros de acordo com o que está escrito na testa de cada um, mas lembrando, sem falar o que está escrito.</p>\
<p><b>Conclusão</b>: Pergunte se eles conseguiram descobrir quem eram, e fale sobre como rotulamos as pessoas, e que elas se sentem da mesma maneira que nós nos sentimos.</p>\
<p>Compartilhem ocasiões em que alguém foi rotulado.</p>",
"<p>O objetivo é refletir sobre como os planos de Deus são maiores que os nossos.</p>\
<p><b>Material</b>: papel e caneta.</p>\
<p><b>Texto-base</b>:<a target='_blank' alt='Veja o versículo online' href='https://www.bibliaonline.com.br/acf/je/29/11' class='linkVersiculoModal'> Jeremias 29:11 </a>, <a target='_blank' alt='Veja o versículo online' href=' https://www.bibliaonline.com.br/acf/ef/3/20' class='linkVersiculoModal'> Efésio 3:20 </a>e<a target='_blank' alt='Veja o versículo online' href=' https://www.bibliaonline.com.br/acf/pr/16/3' class='linkVersiculoModal'> Provérbios 16:3</a></p>\
<p><b>Desenvolvimento</b>: dê um papel e uma caneta para todos os participantes da célula. Peça a eles para pensar e escrever o sonho deles, o que eles mais desejam alcançar. Quais alvos desejam atingir, peça que escreva. Você pode dizer que ninguém vai ler o que está no papel para a pessoa ficar mais a vontade. E vai ministrando em cima disso para ajudá-los a escrever. Marque um tempo para eles escreverem. Enquanto isso posicione um cesto de lixo, ou pode ser qualquer cesto qualquer.</p>\
<ul>\
<li>terminar o tempo, ou quando todos já terminaram. Lembre-se de dar uma palavra incentivando a correr atras do sonhos, coisa do tipo: 'E lembre que o inimigo pode armar muitas armadilhas para vocês caírem e desistir dos teus sonhos, mas você pode vencer se ouvir a voz de Deus.'</li>\
<li>Nesse momento você pode dizer assim: 'Era isso que eu queria trazer para vocês hoje, pode amassar e rasgar o papel se quiser e jogar aqui nesse cesto de lixo.' E passa com o cesto de lixo para certificar que todos joguem fora. Caso alguém não queira tente insistir de alguma forma.</li>\
<li>Então você finaliza perguntando o que fizeram. Por que jogaram seus sonhos no lixo?</li>\
</ul>\
<p><b>Conclusão</b>: Então, você pode mostrar que é isso que o inimigo quer que você faça. Ele diz isso o tempo todo, através da midia, através dos desejos deste mundo. Se dermos atenção 'às vozes do inimigo' estaremos jogando nosso sonho no lixo.</p>\
<p>Pode acrescentar que muitas pessoas não acredita que você pode alcançar o seu sonho. Dizem ser besteira. Dizem que você não nasceu com dom para tal coisa. Estão querendo que você jogue seu sonho no lixo, as vezes as pessoas fazem isso achando estar protegendo a pessoa.</p>\
<p>Não Joguem o seu sonho no Lixo. Deus diz que você é vitorioso.</p>"
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

function selecionaDinamica(id){

	$("#ModalPerguntaResposta").html(arrayConteudoDinamicas[id]);
	$("#ModalPerguntaTitulo").text(arrayTituloDinamicas[id]);
	abreModal("ModalPergunta");
}
function selecionaPalavra(id){

	$("#ModalPerguntaResposta").html(arrayConteudoPalavra[id]);
	$("#ModalPerguntaTitulo").text(arrayTituloPalavra[id]);
	abreModal("ModalPergunta");
}



function listar(arrayTitulo, idPage) {

	finalResult = "";
	if(idPage =="perguntas"){

		for (var i = 0; i < arrayTitulo.length; i++) {
			finalResult += "<li class='list-group-item' style='list-style-type: circle;' onclick='selecionaPergunta(" + i + ")'>" + arrayTitulo[i] + "</li>"
		}

	}else if(idPage =="palavras"){

		for (var i = 0; i < arrayTitulo.length; i++) {
			finalResult += "<li class='list-group-item' style='list-style-type: circle;' onclick='selecionaPalavras(" + i + ")'>" + arrayTitulo[i] + "</li>"
		}

	}else if(idPage =="dinamicas"){

		for (var i = 0; i < arrayTitulo.length; i++) {
			finalResult += "<li class='list-group-item' style='list-style-type: circle;' onclick='selecionaDinamica(" + i + ")'>" + arrayTitulo[i] + "</li>"
		}

	}

	
	
	if (finalResult.trim() != "")
		return finalResult;
	else
		return "<li class='list-group-item' style='background-color: #ccc'>Não encontrado</li>";
}

function listaPerguntas(){
	$("ul.listaPerguntas").html("");
	$("ul.listaPerguntas").append(listar(arrayTituloPergunta, "perguntas"));
}

function listaPalavras (){
	$("ul.listaPalavras").html("");
	$("ul.listaPalavras").append(listar(arrayTituloPalavra, "palavras"));
}
function listaDinamicas (){
	$("ul.listaDinamicas").html("");
	$("ul.listaDinamicas").append(listar(arrayTituloDinamicas, "dinamicas"));
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
