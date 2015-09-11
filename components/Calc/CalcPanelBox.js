import React from 'react';
import CalcItem from './CalcItem';
import CalcShowInfo from "./CalcShowInfo";

require('./calc.scss');

export default class CalcPanelBox extends React.Component {
	render() {
		let {onPress} = this.props;
		let itemComponent = (row) => row.map(item => (<CalcItem type={item.type} value={item.val} onPress={onPress}/>));


		let CellComponent = this.props.data.map((row)=> 
			(<div className="row">
				{itemComponent(row)}
			</div>)
		);

		return (
			<div  className="box">
				<CalcShowInfo />
				{CellComponent}
			</div>
			);
	}
}
