/*setTimeout(function(){
    $('.info_fila.c1').html("1");    
},15000);
setTimeout(function(){
    $('.info_fila.c1').html("2");    
},25000);*/

var cha;
setInterval(function(){
    
    var chamada = Math.floor(Math.random() * 10);
    var id = Math.floor(Math.random() * 7);
    cha = $('.info_fila.c'+id).html(); 
    $('.info_fila.c'+id).html(chamada);    
},10000);

setInterval(function(){
    var agentes = Math.floor(Math.random() * 10);
    var id = Math.floor(Math.random() * 7);
    $('.info_agentes.c'+id).html(agentes);    
},10000);

/*setTimeout(function(){
    $('.mic').addClass('mic_off').removeClass('mic_on');    
    $('#mi').html('mic_off');  
     $('#chamado').attr("hidden",false);
},120000);

setTimeout(function(){
    $('.info_agentes.c6').html("02");    
},85000);


setTimeout(function(){
    $('.info_agentes.c1').html("03");    
},92000);*/