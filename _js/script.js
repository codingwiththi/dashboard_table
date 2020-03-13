//GRAFICOS PIZZA
google.charts.load('current', {
    'packages': ['corechart']
});



// CLIENTE 1
google.charts.setOnLoadCallback(cliente1RAA);

google.charts.setOnLoadCallback(cliente2RAA);

google.charts.setOnLoadCallback(cliente3RAA);

google.charts.setOnLoadCallback(cliente4RAA);

google.charts.setOnLoadCallback(cliente5RAA);

google.charts.setOnLoadCallback(cliente6RAA);

function cliente1RAA() {

    var data = google.visualization.arrayToDataTable([
        ["Element", "Quantidade", {
            role: "style"
        }],
        ["", 20, '#F0A32F'],
        ["", 38, "#56B949"],
        ["", 64, "#30499B"],
        ["", 70, "#EE4035"],
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

        width: 265,
        height: 200,
        bar: {
            groupWidth: "70%"
        },
        legend: {
            position: "none"
        },
        backgroundColor: 'white',
    };
    var chart = new google.visualization.BarChart(document.getElementById("c1_raa"));
    chart.draw(view, options);
}

function cliente2RAA() {

    var data = google.visualization.arrayToDataTable([
        ["Element", "Quantidade", {
            role: "style"
        }],
        ["", 20, '#F0A32F'],
        ["", 38, "#56B949"],
        ["", 64, "#30499B"],
        ["", 70, "#EE4035"],
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
        height: 200,
        bar: {
            groupWidth: "70%"
        },
        legend: {
            position: "none"
        },
        backgroundColor: 'white',
    };
    var chart = new google.visualization.BarChart(document.getElementById("c2_raa"));
    chart.draw(view, options);
}

function cliente3RAA() {

    var data = google.visualization.arrayToDataTable([
        ["Element", "Quantidade", {
            role: "style"
        }],
        ["", 20, '#F0A32F'],
        ["", 38, "#56B949"],
        ["", 64, "#30499B"],
        ["", 70, "#EE4035"],
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
        height: 200,
        bar: {
            groupWidth: "70%"
        },
        legend: {
            position: "none"
        },
        backgroundColor: 'white',
    };
    var chart = new google.visualization.BarChart(document.getElementById("c3_raa"));
    chart.draw(view, options);
}

function cliente4RAA() {

    var data = google.visualization.arrayToDataTable([
        ["Element", "Quantidade", {
            role: "style"
        }],
        ["", 20, '#F0A32F'],
        ["", 38, "#56B949"],
        ["", 64, "#30499B"],
        ["", 70, "#EE4035"],
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
        height: 200,
        bar: {
            groupWidth: "70%"
        },
        legend: {
            position: "none"
        },
        backgroundColor: 'white',
    };
    var chart = new google.visualization.BarChart(document.getElementById("c4_raa"));
    chart.draw(view, options);
}

function cliente5RAA() {

    var data = google.visualization.arrayToDataTable([
        ["Element", "Quantidade", {
            role: "style"
        }],
        ["", 20, '#F0A32F'],
        ["", 38, "#56B949"],
        ["", 64, "#30499B"],
        ["", 70, "#EE4035"],
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
        height: 200,
        bar: {
            groupWidth: "70%"
        },
        legend: {
            position: "none"
        },
        backgroundColor: 'white',
    };
    var chart = new google.visualization.BarChart(document.getElementById("c5_raa"));
    chart.draw(view, options);
}

function cliente6RAA() {

    var data = google.visualization.arrayToDataTable([
        ["Element", "Quantidade", {
            role: "style"
        }],
        ["", 20, '#F0A32F'],
        ["", 38, "#56B949"],
        ["", 64, "#30499B"],
        ["", 70, "#EE4035"],
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
        height: 200,
        bar: {
            groupWidth: "70%"
        },
        legend: {
            position: "none"
        },
        backgroundColor: 'white',
    };
    var chart = new google.visualization.BarChart(document.getElementById("c6_raa"));
    chart.draw(view, options);
}


google.charts.setOnLoadCallback(drawVisualization);

function drawVisualization() {
    // Some raw data (not necessarily accurate)
    var data = google.visualization.arrayToDataTable([
        ['SLA', '20s', '40s', '5s', 'SLA'],
        ['TJES', 40, 30, 10, 60],
        ['UNIMED', 20, 10, 15, 25],
        ['SEGER', 25, 20, 24, 15],
        ['SULGAS', 50, 30, 25, 20],
        ['SUNCOKE', 25, 30, 15, 20],
        ['TECHNIP PTG', 20, 20, 20, 15],
    ]);

    var options = {
        vAxis: { title: '%' },
        hAxis: { title: 'Clientes' },
        seriesType: 'bars',
        series: { 3: { type: 'line' } },
        colors: ['#28a745', '#ffc107', '#dc3545', 'red']
    };

    var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}

// am4core.ready(function() {

//     // Themes begin
//     am4core.useTheme(am4themes_kelly);
//     am4core.useTheme(am4themes_animated);
//     // Themes end

//     // create chart
//     var chart = am4core.create("chartdiv", am4charts.GaugeChart);
//     chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect

//     chart.startAngle = 0;
//     chart.endAngle = 360;

//     function createAxis(min, max, start, end, color) {
//         var axis = chart.xAxes.push(new am4charts.ValueAxis());
//         axis.min = min;
//         axis.max = max;
//         axis.strictMinMax = true;
//         axis.renderer.useChartAngles = false;
//         axis.renderer.startAngle = start;
//         axis.renderer.endAngle = end;
//         axis.renderer.minGridDistance = 100;

//         axis.renderer.line.strokeOpacity = 1;
//         axis.renderer.line.strokeWidth = 10;
//         axis.renderer.line.stroke = am4core.color(color);

//         axis.renderer.ticks.template.disabled = false;
//         axis.renderer.ticks.template.stroke = am4core.color(color);
//         axis.renderer.ticks.template.strokeOpacity = 1;
//         axis.renderer.grid.template.disabled = true;
//         axis.renderer.ticks.template.length = 10;

//         return axis;
//     }

//     function createHand(axis) {
//         var hand = chart.hands.push(new am4charts.ClockHand());
//         hand.fill = axis.renderer.line.stroke;
//         hand.stroke = axis.renderer.line.stroke;
//         hand.axis = axis;
//         hand.pin.disabled = true;
//         hand.startWidth = 10;
//         hand.endWidth = 0;
//         hand.radius = am4core.percent(90);
//         hand.innerRadius = am4core.percent(70);
//         hand.value = 0;
//         return hand;
//     }

//     var axis1 = createAxis(0, 100, -85, -5, "#EF6F6C");
//     var axis2 = createAxis(0, 200, 5, 85, "#426A5A");
//     var axis3 = createAxis(0, 20, 95, 175, "#7FB685");
//     var axis4 = createAxis(0, 100, 185, 265, "#DDAE7E");

//     var hand1 = createHand(axis1);
//     var hand2 = createHand(axis2);
//     var hand3 = createHand(axis3);
//     var hand4 = createHand(axis4);

//     setInterval(function() {
//         hand1.showValue(Math.random() * hand1.axis.max, 1000, am4core.ease.cubicOut);
//         hand2.showValue(Math.random() * hand2.axis.max, 1000, am4core.ease.cubicOut);
//         hand3.showValue(Math.random() * hand3.axis.max, 1000, am4core.ease.cubicOut);
//         hand4.showValue(Math.random() * hand4.axis.max, 1000, am4core.ease.cubicOut);
//     }, 2000);

// }); // end am4core.ready()