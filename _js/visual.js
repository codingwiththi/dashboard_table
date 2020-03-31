$(document).ready(function(){
    var mapIdInterval = new Object();  
    $("body").on('DOMSubtreeModified', ".info_fila", function() { 
        var chamada = $.trim($(this).text());
        var idContador = "#coc"+$.trim($(this).attr("id").replace(/[^\d]/g, ''));
        if(chamada >= 1){             
            chamaTempo(idContador, new Date(), 1000);                     
        }       
        if(chamada >= 2){
            $(this).addClass('bg-danger').removeClass('bg-warning').removeClass('bg-success');
            $(idContador).addClass('bg-danger').removeClass('bg-warning').removeClass('bg-success');                   
        }else if(chamada >= 1){           
            $(this).addClass('bg-warning').removeClass('bg-danger').removeClass('bg-success');
            $(idContador).addClass('bg-warning').removeClass('bg-danger').removeClass('bg-success');
        }else if(chamada == 0){            
            $(this).addClass('bg-success').removeClass('bg-danger').removeClass('bg-warning');
            $(idContador).addClass('bg-success').removeClass('bg-danger').removeClass('bg-warning');    
            $(idContador).text("00:00:00");
            clearInterval(mapIdInterval[idContador]);            
            delete mapIdInterval[idContador];
        }
    }); 
    $("body").on('DOMSubtreeModified', ".info_agentes", function() { 
        if($(this).text() <= 0){
            $(this).addClass("bg-danger").removeClass('bg-success');
        }  else{
            $(this).addClass("bg-success").removeClass('bg-danger');
        }  
    });
    setInterval(function(){
        $(".info_fila").each(function(){
            var fila        = $.trim($(this).text());
            var n           = $.trim($(this).attr("id").replace(/[^\d]/g, ''));
            var idAgente    = "#ag"+n; 
            var agente      = $.trim($(idAgente).text());
            var idContador  = "#coc"+n;
            if( fila >= 2 && agente == 0){
                $(this).hasClass("bg-danger") ? 
                    $(this).addClass("bg-warning").removeClass("bg-danger"): 
                    $(this).addClass("bg-danger").removeClass("bg-warning");                
                $(idContador).hasClass("bg-danger") ? 
                    $(idContador).addClass("bg-warning").removeClass("bg-danger"): 
                    $(idContador).addClass("bg-danger").removeClass("bg-warning");
                $(idAgente).hasClass("bg-danger") ? 
                    $(idAgente).addClass("bg-warning").removeClass("bg-danger"): 
                    $(idAgente).addClass("bg-danger").removeClass("bg-warning");     
            }
        });
    },1000);        
    function temporizador(idContador, inicio){
        var tempFinal       = new Date();
        var monstrar        = new Date();
        var tempoCorrido    = tempFinal - inicio;
        tempoCorrido       /= 1000;
        monstrar.setSeconds(Math.round(tempoCorrido % 60));
        tempoCorrido = Math.floor(tempoCorrido / 60);
        monstrar.setMinutes(Math.round(tempoCorrido % 60));
        tempoCorrido = Math.floor(tempoCorrido / 60);
        monstrar.setHours(Math.round(tempoCorrido % 24));
        tempoCorrido = Math.floor(tempoCorrido / 24);        
        $(idContador).text(monstrar.toLocaleTimeString());
    }
    function sleep(goTime) {
        return new Promise(resolve => setTimeout(resolve, goTime));
    }  
    async function chamaTempo(idContador, inicio, goTime) {  
        var id                      = setInterval(function(){temporizador(idContador, inicio);},1000); 
        mapIdInterval[idContador]   = id;        
        await sleep(goTime);
        temporizador(idContador, inicio);
    }    
});