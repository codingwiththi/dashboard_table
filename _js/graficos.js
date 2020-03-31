google.charts.load('current', {'packages': ['corechart']});

$('.graph').each(function(){     
    google.charts.setOnLoadCallback($(this).attr('id'));
    cliente($(this).attr('id'));
});

function dados() {
    return new Array(["Element", "Quantidade", { role: "style"}], 
                     ["", (Math.floor(Math.random() * 100)), "#30499B"],
                     ["", (Math.floor(Math.random() * 100)), '#F0A32F'], 
                     ["", (Math.floor(Math.random() * 100)), "#56B949"],                      
                     ["", (Math.floor(Math.random() * 100)), "#EE4035"]);
}
function cliente(identifica) {   
    setTimeout(function(){grafico(identifica);} ,4000);
}
function grafico(identifica){      
    var data = google.visualization.arrayToDataTable(dados());   
    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1, {calc: "stringify", sourceColumn: 1, type: "string", role: "annotation" },2]);
    var options = {
        width: 200,
        height: 200,
        chartArea: {'width': '60%', 'height': '99%', left: "3%"},
        bar: {
            groupWidth: "85%"
        },
        legend: {
            position: "none"
        },
        backgroundColor: 'white',
        annotations: {
            textStyle: {
                fontName: 'Times-Roman',
                fontSize: 33,
                bold: true,
                //italic: true,               
                color: '#000',               
                //auraColor: '#d799ae',               
                opacity: 0.99
            }
        },
        hAxis: {gridlines: {
            color: 'transparent'
        }}

    };
    var chart = new google.visualization.BarChart(document.getElementById(identifica));

    chart.draw(view, options);
}
