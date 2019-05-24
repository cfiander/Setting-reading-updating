import React from "react";

class Accordian extends React.Component {
    static defaultProps = {
        sections: [],
    };
    state = {
        currentSectionIndex: 0
      }
    handleButtonClick(index) {
        this.setState({ currentSectionIndex: index })
      }
      renderButtons() {
        return this.props.sections.map((section, index) => (
          <li>
          <button key={index} onClick={() => this.handleButtonClick(index)}>
            {section.title}
          </button>
          {(this.state.currentSectionIndex === index) && this.renderContent()}
          </li>
        ))
      }
      renderContent() {
        const currentSection = this.props.sections[this.state.currentSectionIndex]
        console.log(currentSection);
        return (
          <p className='content'>
            {currentSection.content}
          </p>
        )
    }
    
    render() {
        return (
            <ul>
                {this.renderButtons()}
            </ul>
        )
    }
}

export default Accordian;