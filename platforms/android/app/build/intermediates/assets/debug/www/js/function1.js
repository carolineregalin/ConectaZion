$(document).ready(function(){

	//$("#HomePage").show();
	//$("#divMenu").css("display", "block");
	$("#PaginaInicial").show();
	

    /*if (window.localStorage.getItem('usuario') !== null | window.localStorage.getItem('senha') != null){
    	alert('oi');

    	logar();
    	//isConnected();
    }
    else{
    	
    	$("#PaginaInicial").show();
    	$("#HomePage").show();
		$("#divMenu").css("display", "block");
    }*/
	
});

function logout(){

	window.localStorage.clear();
	$("#PaginaInicial").show();
	$("#HomePage").hide();
	$("#divMenu").css("display", "none");
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

function pageChange(idNewPage){
	$(".pageView").hide();//esconde as páginas
	$(" " + idNewPage).show();//mostra a página selecionada no menu
	$("#btnMenuMobile").click();//fecha o menu (fechar manualmente irrita)
	scrollToAnchor(idNewPage);//força a página à subir até o elemento
}

function scrollToAnchor(id) {
    var aTag = $(" " + id);
    $('html,body').animate({ scrollTop: aTag.offset().top/* - 30 <margem adicional>*/ }, 'normal');    
}

var arrayTituloPergunta = [
"Se tudo necessita de um criador, então quem ou o que criou Deus?",
"",
""
];
var arrayRespostaPergunta = [
"<p>Na Bíblia não há nenhuma evidência de que Deus foi criado. Pelo contrário, ela revela Deus como sendo o Criador não tendo alguém maior que si mesmo.</p><p>“Porque, quando Deus fez a promessa a Abraão, visto que não tinha outro maior por quem jurar, jurou por si mesmo” <br /><u class='versiculo-0'>Hb 6:13</u></p><p>Tudo necessita de um criador, menos o Criador. Pois se alguém criou Deus, então quem criou o Criador de Deus? E quem que criou o criador do criador de Deus? Entraríamos numa contagem infinita em busca de um ser que NECESSARIAMENTE não foi criado.</p><p>Este ser que não foi criado é o Deus que se revela na Bíblia. Ele não teve um início, sempre existiu, como está escrito “de eternidade em eternidade Tu és Deus” (<u class='versiculo-1'>Sl 90:2</u>).</p><p>Ele se revela como O Alfa e o Ômega (<u class='versiculo-2'>Ap 22:13</u>, <u class='versiculo-3'>Ap 1:17</u>) sendo Alfa a primeira letra do alfabeto grego e Ômega a ultima.</p><p>“...antes de mim deus nenhum se formou, e depois de mim nenhum haverá.” <u class='versiculo-4'>Is 43:10</u></p><p>O fato de Deus ser infinito (existir desde sempre e para sempre) é de impossível compreensão para nós que temos uma mente finita. Porém, chegará o tempo em que iremos compreender plenamente, como está escrito:</p><p>Porque, agora, vemos como em espelho, obscuramente; então, veremos face a face. Agora, conheço em parte; então, conhecerei como também sou conhecido.” (<u class='versiculo-5'>1 Co 13:12</u>).</p>",
"",
""
];

function selecionaPergunta(id){

	bodyModal = arrayRespostaPergunta[id];
	i = 0;
	//pra garantir que não entre em loop, não vai permitir mais de 15 versículos (não, eu não confio em whiles);
	while (bodyModal.toLowerCase().indexOf("<u class='versiculo-" + i + "'>") >= 0){

		posU = bodyModal.indexOf("<u class='versiculo-" + i + "'>");
		
		alert(posU);		
		bodyModal = bodyModal.replace("<u class='versiculo-" + i + "'>", "<u class='versiculo'>");

		var myContent = '<div id="test">Hello <span>world!</span></div>';
		alert($(myContent).text());
		//todo here

		// eu ia fazer o replace dos versiuiculos;

		//a ideia é colocar um 'class=current' pra dar replace por loop;
		versiculo = bodyModal.substring(posU + 21, posU + 30);
		
		alert(versiculo);
		
		livro = (versiculo.substring(0, versiculo.lastIndexOf(" "))).trim();
		
		capitulo = (versiculo.substring(versiculo.indexOf(" ")+1, versiculo.indexOf(":"))).trim();
		
		versiculo = versiculo.substring(versiculo.indexOf(":")+1);
		
		caminho = livro + " " + capitulo + ":" + versiculo;	
		bodyModal = bodyModal.replace("<u class='versiculo'>" + caminho + "</u>", "<a target='_blank' class='linkVersiculoModal' alt='Veja o versículo online' href='https://www.bibliaonline.com.br/acf/" + livro + "/" + capitulo + "/" + versiculo +"'>"+ caminho +"</a>");	
		alert(bodyModal);
		
		if (i > 15) {break;}
		i++;
	}

	$("#ModalPerguntaTitulo").text(arrayTituloPergunta[id]);
	$("#ModalPerguntaResposta").html(bodyModal);
	abreModal("ModalPergunta");

}

function abreModal(id){
	$("#" + id).modal('show');
}

$( "#FormLogin" ).submit(function(e) {
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

                	$("#PaginaLogin").append("<a>"+json.msg+"</a>");
                  // alert(json.msg);
                   logout();
                  
                }
            },error: function(e,xhr,t){
                alert(xhr.responseText);                
            }
        });
});

function selecionaAbordagem(id){

	$("#abordagem0").show(3000);
	$(".abordagem1").hide("slow");
}


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
