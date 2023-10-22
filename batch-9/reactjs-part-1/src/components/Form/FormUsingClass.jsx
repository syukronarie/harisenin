import React from "react";

export default class Form extends React.Component {
	constructor() {
		super();
		this.state = {
			name: "Taylor",
			age: 20,
			showFormDisplay: true,
		};
		console.log("1");
	}

	componentDidMount() {
		console.log("3");
	}

	componentDidUpdate() {
		console.log(this.state);
	}

	render() {
		console.log("2");
		const { name, age, showFormDisplay } = this.state;

		return (
			<>
				<input
					value={name}
					onChange={(e) => this.setState({ name: e.target.value })}
				/>
				<button onClick={() => this.setState({ age: age + 1 })}>
					Increment age
				</button>

				<button
					onClick={() => this.setState({ showFormDisplay: !showFormDisplay })}
				>
					toggle form display
				</button>

				{showFormDisplay ? <FormDisplay name={name} age={age} /> : null}
			</>
		);
	}
}

class FormDisplay extends React.Component {
	componentDidUpdate() {
		console.log(this.props);
	}

	componentWillUnmount() {
		console.log("this component will unmount");
	}

	render() {
		const { name, age } = this.props;

		return (
			<p>
				Hello, {name}. You are {age}.
			</p>
		);
	}
}
