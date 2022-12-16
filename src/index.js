import c3 from "c3";
const months = [
"Jan",
"Feb",
"Mar",
"Apr",
"May",
"Jun",
"Jul",
"Aug",
"Sep",
"Oct",
"Nov",
"Dec",
];

window.loadChart = function (json) {
console.log("loadChart", json);
//create a variable that contains the json passed by the FM script named loadChart
const obj = JSON.parse(json);
console.log(obj);
// create a variable that contains the value from element "data" an Array from obj(json) 
const data = obj.data;
// create a variable that contains the value from element "chartType" from obj(json)
const chartType = obj.chartType;
console.log(chartType);
// Create variables for chartHeight  chartWidth
const chartHeight = obj.chartHeight;
const chartWidth  = obj.chartWidth; 


const options =  { 
  size: {height : chartHeight, width  : chartWidth},
  bindto: "#chart",
  axis: {
    x: {type: "category" },
    y: {},
  }, 
  


data: {
  onclick: function(d){
    console.log("data",d);
    // const index = d.index;
    // const name = d.name;
    // const value = d.value;
    // optional way to define multiple variables that are values of an object
    // is called "deconstruction"
    const {index, name, value} = (d);
    console.log("Index", index);
    const month = months[index];
    console.log("Month",month);
    // adding Month: before the const name changes the value of the variable returned to the DOM
    const newObj = {month, name, value};
    console.log("new object", newObj);
    FileMaker.PerformScript("On Chart Click",JSON.stringify (newObj));
  },
  labels : true,
  type   : chartType,
  json   :  data,
  keys: {
        x: "month", 
        value: ['Peaches' ,'Pears', 'Apples' ]
      },
   },
};


// chart variable calling options variable
const chart = c3.generate(options);  

window.transformChart = function (type) {
  chart.transform(type);
};
window.loadData = function (json) {
  const obj = JSON.parse(json);
console.log(obj);
// create a variable that contains the value from element "data" an Array from obj(json) 
const data = obj.data;
console.log(data);
chart.load({
  json: data,
  keys: {
    x: "month", 
    value: ['Bananas']
  },
})

};
};

