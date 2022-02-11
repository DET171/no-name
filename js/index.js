'use strict';

const { Header, Container, Input, Divider, Button } = semanticUIReact;

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: '',
			result: '',
		};
		this.handleChange = this.handleChange.bind(this);
		this.reverseString = this.reverseString.bind(this);
		this.handelKeyPress = this.handelKeyPress.bind(this);
	}

	reverseString() {
		this.setState({ result: this.state.input.split('').reverse().join('') });
	}

	handleChange(e) {
    this.setState({ input: e.target.value });
  }

	handelKeyPress(e) {
		if (e.charCode === 13) {
			this.reverseString();
		}
	}

	render() {
		return (
			<Container>
				<Header as='h1' className='center'>A Random page with no name</Header>
				<Input
    			icon={<Button onClick={() => this.reverseString()} className='top-bottom-left-bradius'>Reverse</Button>}
					fluid
					className='top-bottom-right-bradius'
					onChange={this.handleChange}
					onKeyPress={this.handelKeyPress}
    			placeholder='Search...'
  			/>
				<Divider horizontal>
      		<Header as='h4'>
        		Result
      		</Header>
    		</Divider>
				<p className='center'>{this.state.result}</p>
			</Container>
		);
	}
}


ReactDOM.render(<App />, document.getElementById('app'));