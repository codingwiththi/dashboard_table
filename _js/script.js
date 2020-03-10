//GRAFICOS PIZZA
google.charts.load('current', {
    'packages': ['corechart']
});

// Draw the pie chart for Sarah's pizza when Charts is loaded.
google.charts.setOnLoadCallback(cliente1SLA);

// Draw the pie chart for the Anthony's pizza when Charts is loaded.
google.charts.setOnLoadCallback(cliente2SLA);

google.charts.setOnLoadCallback(cliente3SLA);

google.charts.setOnLoadCallback(cliente4SLA);

google.charts.setOnLoadCallback(cliente5SLA);

google.charts.setOnLoadCallback(cliente6SLA);

google.charts.setOnLoadCallback(cliente7SLA);

google.charts.setOnLoadCallback(cliente8SLA);

// Callback that draws the pie chart for Sarah's pizza.
function cliente1SLA() {

    // Create the data table for Sarah's pizza.
    var data = new google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['20s', 10],
        ['5s', 45],
        ['10s', 45],
    ]);

    // Set options for Sarah's pie chart.
    var options = {
        legend: 'top',
    };

    // Instantiate and draw the chart for Sarah's pizza.
    var chart = new google.visualization.PieChart(document.getElementById('c1_sla'));
    chart.draw(data, options);
}

// Callback that draws the pie chart for Anthony's pizza.
function cliente2SLA() {

    // Create the data table for Anthony's pizza.
    var data = new google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['20s', 20],
        ['5s', 30],
        ['10s', 50],
    ]);

    // Set options for Anthony's pie chart.
    var options = {
        legend: 'top',
    };

    // Instantiate and draw the chart for Anthony's pizza.
    var chart = new google.visualization.PieChart(document.getElementById('c2_sla'));
    chart.draw(data, options);
}

function cliente3SLA() {

    // Create the data table for Anthony's pizza.
    var data = new google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['20s', 20],
        ['5s', 30],
        ['10s', 50],
    ]);

    // Set options for Anthony's pie chart.
    var options = {
        legend: 'top',
    };

    // Instantiate and draw the chart for Anthony's pizza.
    var chart = new google.visualization.PieChart(document.getElementById('c3_sla'));
    chart.draw(data, options);
}

function cliente4SLA() {

    // Create the data table for Anthony's pizza.
    var data = new google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['20s', 20],
        ['5s', 30],
        ['10s', 50],
    ]);

    // Set options for Anthony's pie chart.
    var options = {
        legend: 'top',
    };

    // Instantiate and draw the chart for Anthony's pizza.
    var chart = new google.visualization.PieChart(document.getElementById('c4_sla'));
    chart.draw(data, options);
}

function cliente5SLA() {

    // Create the data table for Anthony's pizza.
    var data = new google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['20s', 20],
        ['5s', 30],
        ['10s', 50],
    ]);

    // Set options for Anthony's pie chart.
    var options = {
        legend: 'top',
    };

    // Instantiate and draw the chart for Anthony's pizza.
    var chart = new google.visualization.PieChart(document.getElementById('c5_sla'));
    chart.draw(data, options);
}

function cliente6SLA() {

    // Create the data table for Anthony's pizza.
    var data = new google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['20s', 20],
        ['5s', 30],
        ['10s', 50],
    ]);

    // Set options for Anthony's pie chart.
    var options = {
        legend: 'top',
    };

    // Instantiate and draw the chart for Anthony's pizza.
    var chart = new google.visualization.PieChart(document.getElementById('c6_sla'));
    chart.draw(data, options);
}

function cliente7SLA() {

    // Create the data table for Anthony's pizza.
    var data = new google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['20s', 20],
        ['5s', 30],
        ['10s', 50],
    ]);

    // Set options for Anthony's pie chart.
    var options = {
        legend: 'top',
    };

    // Instantiate and draw the chart for Anthony's pizza.
    var chart = new google.visualization.PieChart(document.getElementById('c7_sla'));
    chart.draw(data, options);
}

function cliente8SLA() {

    // Create the data table for Anthony's pizza.
    var data = new google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['20s', 20],
        ['5s', 30],
        ['10s', 50],
    ]);

    // Set options for Anthony's pie chart.
    var options = {
        legend: 'top',
    };

    // Instantiate and draw the chart for Anthony's pizza.
    var chart = new google.visualization.PieChart(document.getElementById('c8_sla'));
    chart.draw(data, options);
}



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
        ["", 90, '#014034'],
        ["", 38, "#736865"],
        ["", 64, "#260101"],
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
    var chart = new google.visualization.ColumnChart(document.getElementById("c1_raa"));
    chart.draw(view, options);
}

function cliente2RAA() {

    var data = google.visualization.arrayToDataTable([
        ["Element", "Quantidade", {
            role: "style"
        }],
        ["", 90, '#014034'],
        ["", 38, "#736865"],
        ["", 64, "#260101"],
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
    var chart = new google.visualization.ColumnChart(document.getElementById("c2_raa"));
    chart.draw(view, options);
}

function cliente3RAA() {

    var data = google.visualization.arrayToDataTable([
        ["Element", "Quantidade", {
            role: "style"
        }],
        ["", 90, '#014034'],
        ["", 38, "#736865"],
        ["", 64, "#260101"],
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
    var chart = new google.visualization.ColumnChart(document.getElementById("c3_raa"));
    chart.draw(view, options);
}

function cliente4RAA() {

    var data = google.visualization.arrayToDataTable([
        ["Element", "Quantidade", {
            role: "style"
        }],
        ["", 90, '#014034'],
        ["", 38, "#736865"],
        ["", 64, "#260101"],
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
    var chart = new google.visualization.ColumnChart(document.getElementById("c4_raa"));
    chart.draw(view, options);
}

function cliente5RAA() {

    var data = google.visualization.arrayToDataTable([
        ["Element", "Quantidade", {
            role: "style"
        }],
        ["", 90, '#014034'],
        ["", 38, "#736865"],
        ["", 64, "#260101"],
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
    var chart = new google.visualization.ColumnChart(document.getElementById("c5_raa"));
    chart.draw(view, options);
}

function cliente6RAA() {

    var data = google.visualization.arrayToDataTable([
        ["Element", "Quantidade", {
            role: "style"
        }],
        ["", 10, '#014034'],
        ["", 20, "#736865"],
        ["", 30, "#260101"],
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
    var chart = new google.visualization.ColumnChart(document.getElementById("c6_raa"));
    chart.draw(view, options);
}