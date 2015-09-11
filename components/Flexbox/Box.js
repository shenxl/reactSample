import React from 'react';
import Item from './Item';

require('./box.scss')

export default class Box extends React.Component {


	render() {
		let range = {};
		const iterator = Symbol.iterator;
		range[iterator] = function* (num) {
		    for (let i = 1; i <= num; i++) {
		    	yield i;
		    };
		};
		let {className} = this.props;

		return (
			<div className={className}>
				{[...range[iterator](this.props.number)].map(item =>(<Item count={item} />))}
			</div>
		);
	}
}
