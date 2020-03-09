// CLIENTE 1
google.charts.load("current", {
    packages: ['corechart']
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ["Element", "Quantidade", {
            role: "style"
        }],
        ["Recebidas", 300, "#17a2b8"],
        ["Atendidas", 150, "#28a745"],
        ["Abandonadas", 19, "#dc3545"],
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1, {
            calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation"
        },
        2
    ]);

    var options = {

        width: 150,
        height: 210,
        bar: {
            groupWidth: "70%"
        },
        legend: {
            position: "none"
        },
        backgroundColor: 'white',
    };
    var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
    chart.draw(view, options);
    var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values2"));
    chart.draw(view, options);
    var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values3"));
    chart.draw(view, options);
    var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values4"));
    chart.draw(view, options);
    var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values5"));
    chart.draw(view, options);
    var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values6"));
    chart.draw(view, options);
    var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values7"));
    chart.draw(view, options);
    var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values8"));
    chart.draw(view, options);

}