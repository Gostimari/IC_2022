/* src/App.js */
import React, { useEffect, useState, Component } from 'react'
import { Amplify, API, graphqlOperation } from 'aws-amplify'
import { getBoardZolertia1, listBoardZolertia1S} from './graphql/queries'
import {add, createBoardZolertia1, createIcapp, createTodo, deleteTodo, updateIcapp, updateTodo} from './graphql/mutations'

import awsExports from "./aws-exports";

import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
 
//import DynamicLineChart from './Dynamic Line Chart';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';

//import DynamicMultiSeriesChart from './Dynamic Multi Series Chart'
import CanvasJSReact from './assets/canvasjs.react';

Amplify.configure(awsExports);
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

var Soil = [];
var Light = [];
var iteracao = [];
var dataPoints1 = [];
var dataPoints2 = [];
var updateInterval = 5000;
//initial values
var yValue1 = 0;
var yValue2 = 0;
var xValue = 1;
var atual = 0;

const App = ({ signOut, user }) => {
  const [todos, setTodos] = useState([])

  useEffect(() => { 
    RegaConfigure()
    //fetchTodos()
  }, [])
 
  async function fetchTodos() {
    try {
        const todoData = await API.graphql(graphqlOperation(getBoardZolertia1, {filter: {iteracao: {gt: atual, le: 300}}}))
        const todos = todoData.data.getBoardZolertia1
        setTodos(todos)
		Soil.push(parseInt((todos.Soil)))
		Light.push(parseInt((todos.Light)))
		iteracao.push(parseInt((todos.iteracao)))

    } catch (err) { console.log('error fetching todos') }
  }
   
  async function RegaConfigure() {
    try {
      const rega = { id: 'f9660efe-c831-4088-929f-2ebc1eb9b260', name: 'Rega', description: 0 }
      await API.graphql(graphqlOperation(updateTodo, {input: rega}))
    } catch (err) {
      console.log('error creating todo:', err)
    }
  } 

  async function RegaON() {
    try {
      const regaon = { id: 'f9660efe-c831-4088-929f-2ebc1eb9b260', name: 'Rega', description: 1 }
      await API.graphql(graphqlOperation(updateTodo, {input: regaon}))
    } catch (err) {
      console.log('error creating todo:', err)
    } 
  }

  async function RegaOFF() {
    try {
      const regaoff = { id: 'f9660efe-c831-4088-929f-2ebc1eb9b260', name: 'Rega', description: 0 }
      await API.graphql(graphqlOperation(updateTodo, {input: regaoff}))
    } catch (err) {
      console.log('error creating todo:', err)
    }
  }

  return (
    <>
    {
    <div style={styles.container}>
      <Navbar bg="dark" variant="dark" fixed="top">
				<Navbar.Brand href="/">myAgriculture</Navbar.Brand><span className="hidden-xs text-muted">React</span>
			</Navbar>
      <h2>/t</h2>
      <Heading level={1}>Hello There,</Heading>
 
      <Container>
      <DynamicMultiSeriesChart/>
      </Container>				
      
	  <button style={styles.button} onClick={fetchTodos}>Fetch DB</button>
      <button style={styles.button} onClick={RegaON}>Irrigation ON</button>
      <button style={styles.button} onClick={RegaOFF}>Irrigation OFF</button>
    </div>
    }
    
    <Button onClick={signOut}>Sign out</Button>
    </>
  )

}

const styles = {
  container: { width: 700, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
  todo: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  todoName: { fontSize: 20, fontWeight: 'bold' },
  todoDescription: { marginBottom: 0 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}


class DynamicMultiSeriesChart extends Component {
	constructor() {
		super();
		this.updateChart = this.updateChart.bind(this);		
		this.timer = null;
	}
	componentDidMount(){
		this.updateChart(1); 
	}

	async updateChart(count) { 
		if(this.chart) {
			count = count || 1;
			for (var i = 0; i < count; i++) {
				
				const todoData = await API.graphql(graphqlOperation(getBoardZolertia1, {iteracao:xValue}));
				const todos = todoData.data.getBoardZolertia1;

				yValue1 = parseInt((todos.Soil));
				yValue2 = parseInt((todos.Light));
				atual = parseInt((todos.iteracao));
				xValue = parseInt(todos.iteracao) + 1;
				

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
				title: "iteration"
			}, 
			axisY:{
				suffix: " %",
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
					xValueFormatString: "#,##0 iteration",
					yValueFormatString: "#,##0 value",
					showInLegend: true,
					name: "Soil Moisture",
					dataPoints: dataPoints1
				},
				{
					type: "stepLine",
					xValueFormatString: "#,##0 seconds",
					yValueFormatString: "#,##0 value",
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



export default withAuthenticator(App);
