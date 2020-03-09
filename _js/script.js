google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work', 11],
        ['Eat', 2],
        ['Commute', 2],
        ['Watch TV', 2],
        ['Sleep', 7]
    ]);

    var options = {
        title: 'My Daily Activities'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}

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
        ["", 300, "#F4E76E"],
        ["", 150, "#82E198"],
        ["", 19, "#4AAAE7"],
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

        width: 200,
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

}


//AMCHARTS GAUNGE
// am4core.ready(function() {

//     // Themes begin
//     am4core.useTheme(am4themes_animated);
//     // Themes end

//     // create chart
//     var chart = am4core.create("chartdiv", am4charts.GaugeChart);
//     chart.innerRadius = am4core.percent(82);

//     /**
//      * Normal axis
//      */

//     var axis = chart.xAxes.push(new am4charts.ValueAxis());
//     //axis.min = 0;
//     //axis.max = 100;
//     axis.strictMinMax = true;
//     axis.renderer.radius = am4core.percent(80);
//     axis.renderer.inside = true;
//     axis.renderer.line.strokeOpacity = 1;
//     axis.renderer.ticks.template.disabled = false
//     axis.renderer.ticks.template.strokeOpacity = 1;
//     axis.renderer.ticks.template.length = 10;
//     axis.renderer.grid.template.disabled = true;
//     axis.renderer.labels.template.radius = 40;
//     axis.renderer.labels.template.adapter.add("text", function(text) {
//         return text + "%";
//     })

//     /**
//      * Axis for ranges
//      */

//     var colorSet = new am4core.ColorSet();

//     var axis2 = chart.xAxes.push(new am4charts.ValueAxis());
//     axis2.min = 0;
//     axis2.max = 100;
//     axis2.renderer.innerRadius = 10
//     axis2.strictMinMax = true;
//     axis2.renderer.labels.template.disabled = true;
//     axis2.renderer.ticks.template.disabled = true;
//     axis2.renderer.grid.template.disabled = true;

//     var range0 = axis2.axisRanges.create();
//     range0.value = 0;
//     range0.endValue = 50;
//     range0.axisFill.fillOpacity = 1;
//     range0.axisFill.fill = colorSet.getIndex(0);

//     var range1 = axis2.axisRanges.create();
//     range1.value = 50;
//     range1.endValue = 100;
//     range1.axisFill.fillOpacity = 1;
//     range1.axisFill.fill = colorSet.getIndex(2);

//     /**
//      * Label
//      */

//     var label = chart.radarContainer.createChild(am4core.Label);
//     label.isMeasured = false;
//     label.fontSize = 25;
//     label.x = am4core.percent(50);
//     label.y = am4core.percent(100);
//     label.horizontalCenter = "middle";
//     label.verticalCenter = "top";
//     label.text = "50%";


//     /**
//      * Hand
//      */

//     var hand = chart.hands.push(new am4charts.ClockHand());
//     hand.axis = axis2;
//     hand.innerRadius = am4core.percent(20);
//     hand.startWidth = 10;
//     hand.pin.disabled = true;
//     hand.value = 50;

//     hand.events.on("propertychanged", function(ev) {
//         range0.endValue = ev.target.value;
//         range1.value = ev.target.value;
//         label.text = axis2.positionToValue(hand.currentPosition).toFixed(1);
//         axis2.invalidate();
//     });

//     setInterval(function() {
//         var value = Math.round(Math.random() * 100);
//         var animation = new am4core.Animation(hand, {
//             property: "value",
//             to: value
//         }, 1000, am4core.ease.cubicOut).start();
//     }, 2000);

// }); // end am4core.ready()