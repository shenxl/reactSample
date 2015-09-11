import React from 'react';

export default class CalcItem extends React.Component {

	constructor(props) {
	    super(props);
	    this.PressCell = this.PressCell.bind(this);
	}


	PressCell(){
		this.props.onPress(this.props.value,this.props.type);
		//console.log(this.props.value + " ==> " + Number.isInteger(this.props.value));
	}

	render() {

		return (
			<div className="item" onClick={this.PressCell}>
				<h1 >{this.props.value}</h1>
			</div>
		);
	}
}
