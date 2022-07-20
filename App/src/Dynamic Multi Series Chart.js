import React, { Component } from 'react';
import CanvasJSReact from './assets/canvasjs.react';

import { Amplify} from 'aws-amplify';
import awsExports from './aws-exports';

import Soil from './App'
//import setTodos from './App'
import Light from './App'

Amplify.configure(awsExports);

var CanvasJSChart = CanvasJSReact.CanvasJSChart;


var dataPoints1 = [];
var dataPoints2 = [];
var updateInterval = 1000;
//initial values
var yValue1 = 0;
var yValue2 = 0;
var xValue = 5;

class DynamicMultiSeriesChart extends Component {
	constructor() {
		super();
		this.updateChart = this.updateChart.bind(this);		
		this.timer = null;
	}
	componentDidMount(){
		this.updateChart(20);
	}
	
	updateChart(count) {
		if(this.chart) {
			count = count || 1;		
			for (var i = 0; i < count; i++) {
				xValue += 2;
				//yValue1 = Math.floor(Math.random()*(408-400+1)+400);
				//yValue2 = Math.floor(Math.random()*(350-340+1)+340);
				yValue1 = Soil;
				yValue2 = Light;
				dataPoints1.push({
				  x: xValue,
				  y: yValue1
				});
				dataPoints2.push({
				  x: xValue,
				  y: yValue2
				});
			}
			this.chart.options.data[0].legendText = " Soil Moisture - " + yValue1;
			this.chart.options.data[1].legendText = " Light - " + yValue2;
			this.chart.render();
			setTimeout(this.updateChart, updateInterval);
		}
	}
	render() {
		const options = {
			zoomEnabled: true,
			theme: "light2",
			title: {
				text: "Sensors Chard"
			},
			axisX: {
				title: "chart updates every 2 secs"
			},
			axisY:{
				suffix: " km/h",
				includeZero: false
			},
			toolTip: {
				shared: true
			},
			legend: {
				cursor:"pointer",
				verticalAlign: "top",
				fontSize: 18,
				fontColor: "dimGrey",
				itemclick : function(e){
					if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
						e.dataSeries.visible = false;
					}
					else {
						e.dataSeries.visible = true;
					}
					e.chart.render();
				}
			},
			data: [ 
				{
					type: "stepLine",
					xValueFormatString: "#,##0 seconds",
					yValueFormatString: "#,##0 km/h",
					showInLegend: true,
					name: "Soil Moisture",
					dataPoints: dataPoints1
				},
				{
					type: "stepLine",
					xValueFormatString: "#,##0 seconds",
					yValueFormatString: "#,##0 km/h",
					showInLegend: true,
					name: "Light" ,
					dataPoints: dataPoints2
				}
			]
		}
		
		return (
		<div>
			<CanvasJSChart options = {options} 
				onRef={ref => this.chart = ref}
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default DynamicMultiSeriesChart;