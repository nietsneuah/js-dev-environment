import c3 from "c3";

window.loadChart = function (json) {
console.log("loadChart", json);
const obj = JSON.parse(json);
console.log(obj);
const data = obj.data;
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
