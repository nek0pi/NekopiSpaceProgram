window.onload = function () {

    var chart = new CanvasJS.Chart("CatsPop", {
        animationEnabled: true,
        zoomEnabled: true,
        theme: "dark2",
        backgroundColor: "#0f0e20",
        title:{
            text: "Popularity of Cats over the past years"
        },
        axisX:{
            title: "Year",
            valueFormatString: "####",
            interval: 2
        },
        axisY:{
            logarithmic: true, //change it to false
            title: "Internet Users (Log)",
            titleFontColor: "#6D78AD",
            lineColor: "#6D78AD",
            gridThickness: 0,
            lineThickness: 1,
            includeZero: false,
            labelFormatter: addSymbols
        },
        axisY2:{
            title: "Internet Users",
            titleFontColor: "#51CDA0",
            logarithmic: false, //change it to true
            lineColor: "#51CDA0",
            gridThickness: 0,
            lineThickness: 1,
            labelFormatter: addSymbols
        },
        legend:{
            verticalAlign: "top",
            fontSize: 16,
            dockInsidePlotArea: true
        },
        data: [{
            type: "line",
            xValueFormatString: "####",
            showInLegend: true,
            name: "Log Scale",
            color: "#954aff",
            dataPoints: [
                { x: 1994, y: 25437639 },
                { x: 1995, y: 44866595 },
                { x: 1996, y: 77583866 },
                { x: 1997, y: 120992212 },
                { x: 1998, y: 188507628 },
                { x: 1999, y: 281537652 },
                { x: 2000, y: 414794957 },
                { x: 2001, y: 502292245 },
                { x: 2002, y: 665065014 },
                { x: 2003, y: 781435983 },
                { x: 2004, y: 913327771 },
                { x: 2005, y: 1030101289 },
                { x: 2006, y: 1162916818 },
                { x: 2007, y: 1373226988 },
                { x: 2008, y: 1575067520 },
                { x: 2009, y: 1766403814 },
                { x: 2010, y: 2023202974 },
                { x: 2011, y: 2231957359 },
                { x: 2012, y: 2494736248 },
                { x: 2013, y: 2728428107 },
                { x: 2014, y: 2956385569 },
                { x: 2015, y: 3185996155 },
                { x: 2016, y: 3424971237 }
            ]
        },
        {
            type: "line",
            xValueFormatString: "####",
            axisYType: "secondary",
            showInLegend: true,
            name: "Linear Scale",
            color:"#30a5ff",
            dataPoints: [
                { x: 1994, y: 25437639 },
                { x: 1995, y: 44866595 },
                { x: 1996, y: 77583866 },
                { x: 1997, y: 120992212 },
                { x: 1998, y: 188507628 },
                { x: 1999, y: 281537652 },
                { x: 2000, y: 414794957 },
                { x: 2001, y: 502292245 },
                { x: 2002, y: 665065014 },
                { x: 2003, y: 781435983 },
                { x: 2004, y: 913327771 },
                { x: 2005, y: 1030101289 },
                { x: 2006, y: 1162916818 },
                { x: 2007, y: 1373226988 },
                { x: 2008, y: 1575067520 },
                { x: 2009, y: 1766403814 },
                { x: 2010, y: 2023202974 },
                { x: 2011, y: 2231957359 },
                { x: 2012, y: 2494736248 },
                { x: 2013, y: 2728428107 },
                { x: 2014, y: 2956385569 },
                { x: 2015, y: 3185996155 },
                { x: 2016, y: 3424971237 }
            ]
        }]
    });
    chart.render();
    
    function addSymbols(e){
        var suffixes = ["", "K", "M", "B"];
    
        var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
        if(order > suffixes.length - 1)
            order = suffixes.length - 1;
    
        var suffix = suffixes[order];
        return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
    }
    
    var chart = new CanvasJS.Chart("DoughnutChart", {
        theme: "dark1",
        backgroundColor: "#0f0e20",
        exportFileName: "Doughnut Chart",
        exportEnabled: true,
        animationEnabled: true,
        title:{
            text: "Expenses on a station"
        },
        legend:{
            cursor: "pointer",
            itemclick: explodePie
        },
        data: [{
            type: "doughnut",
            innerRadius: 90,
            showInLegend: true,
            toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
            indexLabel: "{name} - #percent%",
            dataPoints: [
                { y: 73000, name: "Food" },
                { y: 25000, name: "Insurance?" },
                { y: 80000, name: "Launch Operations" },
                { y: 100000, name: "Station Modules" },
                { y: 240000, name: "Equipment" },
                { y: 147000, name: "Robotics"},
                { y: 12400, name: "Others" }
            ]
        }]
    });
    chart.render();
    
    function explodePie (e) {
        if(typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
            e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
        } else {
            e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
        }
        e.chart.render();
    }
    

    var chart = new CanvasJS.Chart("LinesChart", {
        animationEnabled: true,
        theme: "dark2",
        backgroundColor: "#0f0e20",
        title: {
            text: "Hourly Average Meowing"
        },
        axisX: {
            title: "Time"
        },
        axisY: {
            title: "Meows",
            suffix: "%"
        },
        data: [{
            type: "line",
            name: "Meowing happening",
            color: "#6738ff",
            connectNullData: true,
            //nullDataLineDashType: "solid",
            xValueType: "dateTime",
            xValueFormatString: "DD MMM hh:mm TT",
            yValueFormatString: "#,##0.##\"%\"",
            dataPoints: [
                { x: 1501048673000, y: 35.939 },
                { x: 1501052273000, y: 40.896 },
                { x: 1501055873000, y: 56.625 },
                { x: 1501059473000, y: 26.003 },
                { x: 1501063073000, y: 20.376 },
                { x: 1501066673000, y: 19.774 },
                { x: 1501070273000, y: 23.508 },
                { x: 1501073873000, y: 18.577 },
                { x: 1501077473000, y: 15.918 },
                { x: 1501081073000, y: null }, // Null Data
                { x: 1501084673000, y: 10.314 },
                { x: 1501088273000, y: 10.574 },
                { x: 1501091873000, y: 14.422 },
                { x: 1501095473000, y: 18.576 },
                { x: 1501099073000, y: 22.342 },
                { x: 1501102673000, y: 22.836 },
                { x: 1501106273000, y: 23.220 },
                { x: 1501109873000, y: 23.594 },
                { x: 1501113473000, y: 24.596 },
                { x: 1501117073000, y: 31.947 },
                { x: 1501120673000, y: 31.142 }
            ]
        }]
    });
    chart.render();
    }