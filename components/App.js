import React from 'react';
// import FlexBox from './Flexbox/box'

import CalcPanelBox from "./Calc/CalcPanelBox";

export default  class App extends React.Component {
	constructor(props) {
	    super(props);
	    this.PressCell = this.PressCell.bind(this);
	}

	PressCell(value,action){
		console.log(value+ "(" + action + ") => " + Number.isInteger(value));
	}

	render() {

		const data = [
		[{
			val: "CE",
			type: "sysOption"
		}, {
			val: "C",
			type: "sysOption"
		}, {
			val: "←",
			type: "sysOption"
		}, {
			val: "÷",
			type: "doubleOption"
		}], [{
			val: 7,
			type: "number"
		}, {
			val: 8,
			type: "number"
		}, {
			val: 9,
			type: "number"
		}, {
			val: "×",
			type: "doubleOption"
		}], [{
			val: 4,
			type: "number"
		}, {
			val: 5,
			type: "number"
		}, {
			val: 6,
			type: "number"
		}, {
			val: "-",
			type: "doubleOption"
		}], [{
			val: 1,
			type: "number"
		}, {
			val: 2,
			type: "number"
		}, {
			val: 3,
			type: "number"
		}, {
			val: "+",
			type: "doubleOption"
		}], [{
			val: "±",
			type: "signleOption"
		}, {
			val: 0,
			type: "signleOption"
		}, {
			val: ".",
			type: "signleOption"
		}, {
			val: "=",
			type: "final"
		}]
		];
	
		return (
			<div>
				<CalcPanelBox data={data} onPress={this.PressCell}/>
			</div>
		);
	}
}

