import React from 'react';

class Bomb extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count : 0
        }
    }
    componentDidMount() {
        this.interval = setInterval(() => {
          this.setState({
            count: this.state.count + 1 
          })
        }, 1000)
      }
      componentWillUnmount() {
        clearInterval(this.interval)
      }
      convertToBombString(num) {
        if (num >= 8) {
            return 'BOOM!';
        } else if (num % 2 === 0) {
            return `tick`;
        } else if (num % 2 !== 0) {
            return `tock`;
        } 
      }
    render() {
        return (
            <div>
                <p>{this.convertToBombString(this.state.count)}</p>
            </div>
        )
    }
}

export default Bomb;