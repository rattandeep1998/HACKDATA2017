var dataPoints1Temp = [
    2209.899,
    2209.9,
    2209.9,
    2209.901,
    2209.901,
    2214.999,
    2206.53,
    2212.966,
    2205,
    2209.51,
    2217.751,
    2201.001,
    2201.002,
    2200.801,
    2205.003,
    2205.203,
    2204.571,
    2204.571,
    2204.571,
    2200.2,
    2201.151,
    2203.87,
    2203.669,
    2200.106,
    2203.669,
    2203.668,
    2203.673,
    2203.673,
    2202.705,
    2201.104,
    2196,
    2203.999,
    2199.35,
    2196.3,
    2198.999,
    2197,
    2196.2,
    2196,
    2196.951,
    2195.002,
    2199.197,
    2210,
    2200.001,
    2202,
    2202.001,
    2201.551,
    2201.001,
    2207.994,
    2200.551,
    2200,
    2209.99,
    2198.943,
    2200.004,
    2205,
    2208.995,
    2204.299,
    2204,
    2202,
    2200.003,
    2202.701,
    2199.999,
    2201,
    2201.702,
    2208.898,
    2202,
    2202.451,
    2204,
    2208.997,
    2202,
    2201.101,
    2204.999,
    2203.1,
    2202.399,
    2203.299,
    2205,
    2209,
    2221.999,
    2213.185,
    2219.555,
    2219.557,
    2225,
    2224,
    2223.5,
    2224,
    2225,
    2223,
    2224.9,
    2223.052,
    2220.999,
    2218.23,
    2214.312,
    2214.314,
    2214.311,
    2214.311,
    2215,
    2219.135,
    2219.138,
    2218.436,
    2219.989,
];

var dataPoints2Temp = [
    2233,
    2232.99,
    2233,
    2243.02,
    2238.09,
    2237.01,
    2238.04,
    2239.07,
    2242.98,
    2242.99,
    2243,
    2243,
    2243,
    2243.54,
    2243.75,
    2243.75,
    2244.71,
    2244.69,
    2252.27,
    2249.3,
    2249.46,
    2248.01,
    2247.01,
    2243.26,
    2239.93,
    2237.78,
    2239.48,
    2239.37,
    2239.83,
    2238.61,
    2239.93,
    2239.85,
    2239.83,
    2238.02,
    2240,
    2239.84,
    2239.47,
    2237.01,
    2239.06,
    2239.11,
    2240,
    2243.13,
    2244.73,
    2241.92,
    2242.84,
    2242.61,
    2242.14,
    2232.88,
    2239.98,
    2238.73,
    2233.92,
    2235.68,
    2235.64,
    2242.84,
    2238.09,
    2231.9,
    2235.34,
    2235.04,
    2235.34,
    2240,
    2243.81,
    2244.62,
    2240.9,
    2241,
    2240,
    2240.94,
    2241.72,
    2241.38,
    2241.7,
    2245,
    2244.65,
    2248.43,
    2248.69,
    2249.52,
    2254.98,
    2255,
    2254.99,
    2255,
    2255,
    2255,
    2256.5,
    2258.28,
    2260,
    2268.17,
    2262.76,
    2261.97,
    2258.27,
    2255,
    2252.51,
    2250.02,
    2245.5,
    2242.06,
    2240.32,
    2241.77,
    2243,
    2237.6,
    2251.85,
    2250.83,
    2246.15,
    2249.57,
];
window.onload = function () {

    var profit_div = document.getElementById("profit_div");

    // console.log(profit_div);

    var dataPoints1 = [];
    var dataPoints2 = [];

    var chart = new CanvasJS.Chart("chartContainer", {
        zoomEnabled: true,
        title: {
            text: "Bit Coin Rate of Two Exchanges"
        },
        axisX: {
            title: "chart updates every 1 sec"
        },
        axisY:{
            prefix: "$",
            includeZero: false,
            gridThickness: 0,
            minimum: 1500,
            maximum: 2500
        },
        toolTip: {
            shared: true
        },
        legend: {
            cursor:"pointer",
            verticalAlign: "top",
            fontSize: 22,
            fontColor: "dimGrey",
            itemclick : toggleDataSeries
        },
        data: [{
            type: "line",
            xValueType: "dateTime",
            yValueFormatString: "$####.00",
            xValueFormatString: "hh:mm:ss TT",
            showInLegend: true,
            name: "Coinbase USD Exchange",
            dataPoints: dataPoints1
        },
            {
                type: "line",
                xValueType: "dateTime",
                yValueFormatString: "$####.00",
                showInLegend: true,
                name: "BTC-E USD Exchange" ,
                dataPoints: dataPoints2
            }]
    });

    function toggleDataSeries(e) {
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        }
        else {
            e.dataSeries.visible = true;
        }
        chart.render();
    }

    var updateInterval = 1000;
// initial value
    var yValue1 = 600;
    var yValue2 = 605;

    var f = 1;
    var buy = dataPoints1Temp[0];
    var ii = 1;
    var profit = 0;
    var time = new Date;
// starting at 9.30 am
    time.setHours(19);
    time.setMinutes(2);
    time.setSeconds(00);
    time.setMilliseconds(00);

    function updateChart(count) {
        count = count || 1;
        var deltaY1, deltaY2;
        for (var i = 0; i < count; i++) {
            time.setTime(time.getTime()+ updateInterval);
            // deltaY1 = .5 + Math.random() *(-.5-.5);
             //deltaY2 = .5 + Math.random() *(-.5-.5);

            // adding random value and rounding it to two digits.
            // yValue1 = Math.round((yValue1 + deltaY1)*100)/100;
             //yValue2 = Math.round((yValue2 + deltaY2)*100)/100;

            yValue1 = dataPoints1Temp[ii];
            yValue2 = dataPoints2Temp[ii];

            // pushing the new values
            dataPoints1.push({
                x: time.getTime(),
                y: yValue1
            });
            dataPoints2.push({
                x: time.getTime(),
                y: yValue2
            });

            var diff1 = yValue1 - dataPoints1Temp[ii-1];
            var diff2 = yValue2 - dataPoints2Temp[ii-1];

            if(diff1 > diff2)
            {
                console.log("2222");
                profit_div.innerHTML = "BTC-E USD Exchange";
                profit_div.style.color="red";

            }
            else
            {
                console.log("11111");
                profit_div.innerHTML = "Coinbase USD Exchange";
                profit_div.style.color="blue";

            }
            // if(yValue2 > yValue1 && f==1)
            // {
            //     f = 2;
            //     sell = yValue1;
            //     profit = sell-buy;
            //
            //     profit_div.innerHTML = profit;
            //     if(profit<0)
            //         profit_div.style.color="red";
            //     else
            //         profit_div.style.color="green";
            //
            //     console.log(profit);
            //     buy = yValue2;
            // }
            // else if(yValue1 > yValue2 && f==2)
            // {
            //     sell = yValue2;
            //     f = 1;
            //     profit = sell-buy;
            //
            //     profit_div.innerHTML = profit;
            //     if(profit<0)
            //         profit_div.style.color="red";
            //     else
            //         profit_div.style.color="green";
            //
            //     console.log(profit);
            //     buy = yValue1;
            // }
            // else
            // {
            //     if(f==1)
            //     {
            //         curVal = yValue1;
            //     }
            //     else
            //     {
            //         curVal = yValue2;
            //     }
            //     profit = curVal - buy;
            //
            //     profit_div.innerHTML = profit;
            //     if(profit<0)
            //         profit_div.style.color="red";
            //     else
            //         profit_div.style.color="green";
            //     console.log(profit);
            //
            // }
            ii++;
        }

        // updating legend text with  updated with y Value
        chart.options.data[0].legendText = " Coinbase USD Exchange $" + yValue1;
        chart.options.data[1].legendText = " BTC-E USD Exchange $" + yValue2;
        chart.render();
    }
// generates first set of dataPoints
    updateChart(20);
    setInterval(function(){updateChart()}, updateInterval);

}
