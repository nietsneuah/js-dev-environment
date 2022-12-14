import c3 from "c3";

window.loadChart = function (json) {
console.log("loadChart", json);
//create an variable that contains the json passed by the FM script named loadChart
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

};
