import React from 'react';

class HelloWorld extends React.Component {
    constructor(props) {
        super(props)
        this.state = { world: null};
      }
      handleButtonClick = event => {
        this.setState({ world: event.target.value})
      }
    render() {
        return (
            <div>
                <p>Hello, {this.state.world}</p>
                <button onClick={this.handleButtonClick} value="World">World</button>
                <button onClick={this.handleButtonClick} value="Friend">Friend</button>
                <button onClick={this.handleButtonClick} value="React">React</button>
            </div>
        )
    }
}

export default HelloWorld;