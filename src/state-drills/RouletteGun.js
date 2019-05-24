import React from 'react';

class RouletteGun extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            chamber : null,
            spinningTheChamber: false,
        }
    }
    handleButtonClick = event => {
        this.setState({
            spinningTheChamber : true,
            })
            this.interval = setTimeout(() => {
            let chamberNumber = this.generateRandomRouletteNumber();
            console.log(chamberNumber);
            this.setState({
                chamber : chamberNumber,
                spinningTheChamber : false,
            })
        }, 3000);
      }
    
    componentWillUnmount() {
        clearInterval(this.interval)
      }

    generateRandomRouletteNumber() {
        console.log('called');
        return Math.floor(Math.random() * (1 + 8 - 1)) + 1
      }
      
    render() {
        let message = ``;
        if (this.state.spinningTheChamber === true) {
                message = `spinning the chamber and pulling the trigger! ....`;
        } else if (this.state.chamber === this.props.userNumber) {
            message = `BANG! u ded bruh`;
        } else if (this.state.chamber !== this.props.userNumber) {
            message = `You're safe`;
        }
        return (
            <div>
                <button onClick={this.handleButtonClick}>Pull the trigger!</button>
                <p>{message}</p>
            </div>
        )
    }
}

function generateRandomRouletteNumber() {
    console.log('called');
    return Math.floor(Math.random() * (1 + 8 - 1)) + 1
  }

RouletteGun.defaultProps = ({
    userNumber: (() => {
        const random = generateRandomRouletteNumber();
        return random;
    })()
  })


export default RouletteGun;