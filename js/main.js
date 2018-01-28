/*live datasets */
var getData = $.getJSON(
  "https://sheetsu.com/apis/v1.0su/38da2f067c1e",
  function(data) {

    // Success! Do stuff with data.
    console.log(data.length);
    

    //dataset-1

    // data A - dataset 1
    var myJSONA = data[0]["Activity"];
    // display value as a string
    var myString = JSON.stringify(myJSON);
    // display value
    value1.innerHTML = myJSONA;

    //data B - dataset 1
    var myJSONB = data[0]["Hours"];
    // display value
    value2.innerHTML = myJSONB;


    //data C - dataset 1
    var myJSONC = data[0]["Net worth of Activity/Day"];
    // display value
    value3.innerHTML = myJSONC;

    //data D - dataset 1
    var myJSOND = data[0]["Net worth of Activity/Month"];
    // display value
    value4.innerHTML = myJSOND;

    //dataset-2

    // data A - dataset 2
    var myJSONE = data[1]["Activity"];
    // display value as a string
    var myString = JSON.stringify(myJSON);
    // display value
    value5.innerHTML = myJSONE;

    //data B - dataset 2
    var myJSON = data[1]["Hours"];
    // display value
    value6.innerHTML = myJSON;


    //data C - dataset 2
    var myJSONF = data[1]["Net worth of Activity/Day"];
    // display value
    value7.innerHTML = myJSONF;

    //data D - dataset 2
    var myJSONG = data[1]["Net worth of Activity/Month"];
    // display value
    value8.innerHTML = myJSONG;

    //dataset-3

    // data A - dataset 3
    var myJSONH = data[1]["Activity"];
    // display value as a string
    var myString = JSON.stringify(myJSON);
    // display value
    value9.innerHTML = myJSONH;

    //data B - dataset 3
    var myJSONI = data[1]["Hours"];
    // display value
    value10.innerHTML = myJSONI;


    //data C - dataset 3
    var myJSONJ = data[1]["Net worth of Activity/Day"];
    // display value
    value11.innerHTML = myJSONJ;

    //data D - dataset 3
    var myJSONK = data[1]["Net worth of Activity/Month"];
    // display value
    value12.innerHTML = myJSONK;

    //dataset-4

    // data A - dataset 4
    var myJSONL = data[1]["Activity"];
    // display value as a string
    var myString = JSON.stringify(myJSON);
    // display value
    value13.innerHTML = myJSONL;

    //data B - dataset 4
    var myJSONM = data[1]["Hours"];
    // display value
    value14.innerHTML = myJSONM;


    //data C - dataset 4
    var myJSONN = data[1]["Net worth of Activity/Day"];
    // display value
    value15.innerHTML = myJSONN;

    //data D - dataset 4
    var myJSONO = data[1]["Net worth of Activity/Month"];
    // display value
    value16.innerHTML = myJSONO;

  }
);


/*extracted Values */

//value for labels
var a = "Africa";
var b = "Asia";
var c = "Europe";
var d = "Latin America";
var e = "North America";

//value for data
var f = parseInt(28.8);
var g = parseInt(28.8);
var h = parseInt(28.8);
var i = parseInt(28.8);
var j = parseInt(28.8);

/* graph data */

new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
      labels: [a, b, c, d, e],
      datasets: [{
        label: "Population (millions)",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [
        f,
        g,
        h,
        i,
        j]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      }
    }
});