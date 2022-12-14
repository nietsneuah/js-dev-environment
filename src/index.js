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


const options =  { 
  size: {height : 360, width  : 420},
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
